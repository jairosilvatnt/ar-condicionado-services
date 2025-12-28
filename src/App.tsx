/* Main App Component - Handles routing (using react-router-dom), query client and other providers */
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  ScrollRestoration,
} from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import Index from './pages/Index'
import ServiceDetails from './pages/ServiceDetails'
import Success from './pages/Success'
import NotFound from './pages/NotFound'
import Layout from './components/Layout'

const RootLayout = () => {
  return (
    <TooltipProvider>
      <ScrollRestoration />
      <Outlet />
      <Toaster />
      <Sonner />
    </TooltipProvider>
  )
}

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Index />,
          },
          {
            path: 'servico/:id',
            element: <ServiceDetails />,
          },
          {
            path: 'sucesso',
            element: <Success />,
          },
        ],
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
