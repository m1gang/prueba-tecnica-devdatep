import React from "react";
import { Link } from "react-router";
import { raceStyles } from "../utils/raceStyles";

export const CharacterCard = ({ character }) => {
  const {
    id,
    name,
    image,
    race,
    ki = "Power Fighter",
    affiliation,
  } = character;

  // Define full Tailwind class sets for each race to ensure they are picked up by the compiler

  const styles = raceStyles[race] || raceStyles["Saiyan"];

  return (
    <div
      className={`group relative bg-white dark:bg-card-dark rounded-xl overflow-hidden shadow-md hover:shadow-glow transition-all duration-300 border border-transparent ${styles?.border || ""} transform hover:-translate-y-1`}
    >
      <div className="aspect-4/5 w-full relative overflow-hidden bg-gray-200 dark:bg-gray-900">
        <img
          alt={name}
          className="w-full  object-top group-hover:scale-110 transition-transform duration-500"
          src={image}
        />

        <div className="absolute top-3 right-3">
          <span
            className={`${styles?.bgSolid || ""} backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wider shadow-sm`}
          >
            {race}
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <Link to={`/character/${id}`}>
              <h3
                className={`text-lg font-bold text-gray-900 dark:text-white  transition-colors ${styles?.text || ""}`}
              >
                {name}
              </h3>
            </Link>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {affiliation}
            </p>
          </div>
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${styles?.icon || ""}`}
          >
            <span className="material-icons text-sm">star</span>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex justify-between text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
            <span>Max Ki</span>
            <span className="text-gray-900 dark:text-gray-200">{ki}</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
            <div
              className={` h-1.5 rounded-full ${styles?.bar || ""}`}
              style={{ width: "85%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
