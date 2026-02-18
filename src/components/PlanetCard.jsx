import { Link } from "react-router";

export const PlanetCard = ({ planet }) => {
    const { name, image, isDestroyed } = planet;
    return (
        <div
            className={`group relative bg-white dark:bg-card-dark rounded-xl overflow-hidden shadow-md hover:shadow-glow transition-all duration-300 border border-transparent transform hover:-translate-y-1`}
        >
            <div className="aspect-4/5 w-full relative overflow-hidden bg-gray-200 dark:bg-gray-900">
                <img
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    src={image}
                />

                <div className="absolute top-3 right-3">
                    <span
                        className={`${isDestroyed ? 'bg-red-400' : 'bg-green-500'} backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wider shadow-sm`}
                    >
                        {!isDestroyed ? 'Activo' : 'Destruido'}
                    </span>
                </div>
            </div>
            <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <h3
                            className={`text-lg font-bold text-gray-900 dark:text-white  transition-colors `}
                        >
                            {name}
                        </h3>


                    </div>
                    <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center `}
                    >
                        <span className="material-icons text-sm">star</span>
                    </div>
                </div>

            </div>
        </div>
    )
}
