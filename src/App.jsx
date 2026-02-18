
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import './App.css'
import { HomePage } from './pages/HomePage';
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router';
import { CharacterPage } from './pages/CharacterPage';
import { SearchPage } from './pages/SearchPage';
import { appRouter } from './router/app.routes';

const queryClient = new QueryClient();

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={appRouter} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}

export default App
