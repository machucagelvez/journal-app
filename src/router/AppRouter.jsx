import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JournalRoutes } from '../journal/routes/JournalRoutes'

const router = createBrowserRouter([
  {
    path: 'auth/*',
    children: AuthRoutes,
  },
  {
    path: '/',
    children: JournalRoutes,
  },
  // {
  //   path: '/*',
  //   element: <Navigate to={'marvel'} />,
  // },
])

export const AppRouter = () => {
  return <RouterProvider router={router} />
}
