import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/mainLayout/MainLayout';
import Home from '../pages/home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/home',
        element: <Home></Home>,
      },
    ],
  },
  {
    path: '*',
    element: <h2 className='text-5xl text-red-900'>404 not found</h2>,
  },
]);

export default router;
