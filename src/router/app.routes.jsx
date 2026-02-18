import { createBrowserRouter, Navigate } from "react-router";
import { DBLayout } from "../layout/DBLayout";
import { HomePage } from "../pages/HomePage";
import { CharacterPage } from "../pages/CharacterPage";
import { SearchPage } from "../pages/SearchPage";
import { PlanetPage } from "../pages/PlanetPage";

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <DBLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'character/:id',
                element: <CharacterPage />
            },
            {
                path: 'search',
                element: <SearchPage />
            },
            {
                path: 'planets',
                element: <PlanetPage />
            },
            {
                path: '*',
                element: <Navigate to='/' />
            }

        ],
    },



])