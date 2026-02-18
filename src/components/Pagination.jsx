import React from 'react'
import { useSearchParams } from 'react-router';

export const Pagination = ({ totalPages }) => {

    const [searchParams, setSearchParams] = useSearchParams();
    const queryPage = searchParams.get('page') ?? 1;
    const page = isNaN(+queryPage) ? 1 : +queryPage;

    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages) return;
        searchParams.set('page', page.toString());
        setSearchParams(searchParams);
    }


    return (
        <div className="mt-5 flex justify-center pb-8">
            <nav aria-label="Pagination" className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                <button
                    className={`${!(page === 1) ? "cursor-pointer" : "cursor-not-allowed text-gray-500/10 opacity-50"} relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 dark:border-white/10 bg-white dark:bg-card-dark text-sm font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-white/5`}
                    disabled={page === 1}
                    onClick={() => handlePageChange(page - 1)}
                >
                    <span className="sr-only">Previous</span>
                    <span className="material-icons text-gray-400">chevron_left</span>
                </button>
                {
                    Array.from({ length: totalPages }).map((_, i) => (
                        <button
                            key={i}
                            className={`${page === i + 1 ? "z-10 bg-primary/20 border-primary text-primary relative inline-flex items-center px-4 py-2 border text-sm font-bold" : "cursor-pointer bg-white dark:bg-card-dark border-gray-300 dark:border-white/10 text-gray-500 hover:bg-gray-50 dark:hover:bg-white/5 relative inline-flex items-center px-4 py-2 border text-sm font-medium"} `}
                            onClick={() => handlePageChange(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))
                }



                <button
                    className={`${!(totalPages === page) ? "cursor-pointer" : "cursor-not-allowed text-gray-500/10 opacity-50"} relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 dark:border-white/10 bg-white dark:bg-card-dark text-sm font-medium  hover:bg-gray-50 dark:hover:bg-white/5`}
                    disabled={totalPages === page}
                    onClick={() => handlePageChange(page + 1)}
                >
                    <span className="sr-only">Next</span>
                    <span className="material-icons text-gray-400">chevron_right</span>
                </button>
            </nav>
        </div>
    )
}
