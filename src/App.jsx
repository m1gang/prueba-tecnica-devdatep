
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import './App.css'
import { HomePage } from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router';
import { CharacterPage } from './pages/CharacterPage';

const queryClient = new QueryClient();

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/character/:id" element={<CharacterPage />} />

          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}

export default App
