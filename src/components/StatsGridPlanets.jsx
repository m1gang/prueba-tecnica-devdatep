import React from "react";

export const StatsGridPlanets = ({ data }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

            <div className="relative overflow-hidden bg-white dark:bg-card-dark rounded-xl p-6 shadow-lg border border-gray-100 dark:border-white/5 group hover:border-accent-blue/50 transition-colors duration-300">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-accent-blue/10 rounded-full blur-2xl group-hover:bg-accent-blue/20 transition-all"></div>
                <div className="flex items-center justify-between relative z-10">
                    <div>
                        <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                            Planetas
                        </p>
                        <h3 className="text-4xl font-black text-gray-900 dark:text-white">
                            {data?.totalItems || 0}
                        </h3>
                    </div>
                    <div className="w-12 h-12 bg-accent-blue/20 rounded-lg flex items-center justify-center text-accent-blue">
                        <span className="material-icons text-2xl">public</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
