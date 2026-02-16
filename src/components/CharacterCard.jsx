import React from "react";
import { Link } from "react-router";

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
  const raceStyles = {
    Saiyan: {
      bg: "bg-primary/90",
      border: "hover:border-primary/50",
      text: "group-hover:text-primary",
      icon: "bg-orange-100 dark:bg-orange-900/30 text-primary",
      bar: "bg-primary",
    },
    Namekian: {
      bg: "bg-green-500/90",
      border: "hover:border-green-500/50",
      text: "group-hover:text-green-500",
      icon: "bg-green-100 dark:bg-green-900/30 text-green-500",
      bar: "bg-green-500",
    },
    "Frieza Race": {
      bg: "bg-purple-500/90",
      border: "hover:border-purple-500/50",
      text: "group-hover:text-purple-500",
      icon: "bg-purple-100 dark:bg-purple-900/30 text-purple-500",
      bar: "bg-purple-500",
    },
    Android: {
      bg: "bg-lime-500/90",
      border: "hover:border-lime-500/50",
      text: "group-hover:text-lime-500",
      icon: "bg-lime-100 dark:bg-lime-900/30 text-lime-500",
      bar: "bg-lime-500",
    },
    Majin: {
      bg: "bg-pink-400/90",
      border: "hover:border-pink-400/50",
      text: "group-hover:text-pink-400",
      icon: "bg-pink-100 dark:bg-pink-900/30 text-pink-400",
      bar: "bg-pink-400",
    },
    Human: {
      bg: "bg-pink-400/90",
      border: "hover:border-pink-400/50",
      text: "group-hover:text-pink-400",
      icon: "bg-pink-100 dark:bg-pink-900/30 text-pink-400",
      bar: "bg-pink-400",
    },
    Hybrid: {
      bg: "bg-indigo-400/90",
      border: "hover:border-indigo-400/50",
      text: "group-hover:text-indigo-400",
      icon: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-400",
      bar: "bg-indigo-400",
    },
    God: {
      bg: "bg-red-500/90",
      border: "hover:border-red-500/50",
      text: "group-hover:text-red-500",
      icon: "bg-red-100 dark:bg-red-900/30 text-red-500",
      bar: "bg-red-500",
    },
  };

  const styles = raceStyles[race] || raceStyles["Saiyan"];

  return (
    <div
      className={`group relative bg-white dark:bg-card-dark rounded-xl overflow-hidden shadow-md hover:shadow-glow transition-all duration-300 border border-transparent ${styles.border} transform hover:-translate-y-1`}
    >
      <div className="aspect-4/5 w-full relative overflow-hidden bg-gray-200 dark:bg-gray-900">
        <img
          alt={name}
          className="w-full  object-top group-hover:scale-110 transition-transform duration-500"
          src={image}
        />

        <div className="absolute top-3 right-3">
          <span
            className={`${styles.bg} backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wider shadow-sm`}
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
                className={`text-lg font-bold text-gray-900 dark:text-white ${styles.text} transition-colors`}
              >
                {name}
              </h3>
            </Link>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {affiliation}
            </p>
          </div>
          <div
            className={`w-8 h-8 rounded-full ${styles.icon} flex items-center justify-center`}
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
              className={`${styles.bar} h-1.5 rounded-full`}
              style={{ width: "85%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
