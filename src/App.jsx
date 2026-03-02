
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import './App.css'
import { RouterProvider } from 'react-router';
import { appRouter } from './router/app.routes';
import { Toaster } from 'sileo';

const queryClient = new QueryClient();

function App() {

  return (
    <>
      <Toaster position="top-right" />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={appRouter} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}

export default App
