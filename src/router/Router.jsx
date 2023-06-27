import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../components/home/Home';
import About from '../components/about/About';
import Blog from '../components/blog/Blog';
import Courses from '../components/courses/Courses';
import NotFound from '../components/404/NotFound';
import CourseDetails from '../components/courses/courseDetails/CourseDetails';
import Instructors from '../components/instructors/Instructors';
import InstructorsDetails from '../components/instructorsDetails/InstructorsDetails';
import Contact from '../components/contact/Contact';
import Signin from '../components/signin/Signin';
import Demo from '../components/demo/Demo';
import Signup from '../components/signUp/Signup';

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
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/courses',
        element: <Courses></Courses>,
      },
      {
        path: '/course_details',
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: '/instructors',
        element: <Instructors></Instructors>,
      },
      {
        path: '/instructors_details',
        element: <InstructorsDetails></InstructorsDetails>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/contactus',
        element: <Contact></Contact>,
      },
      {
        path: '/signin',
        element: <Signin></Signin>,
      },
      {
        path: '/signup',
        element: <Signup></Signup>,
      },
    ],
  },
  {
    path: '/demo',
    element: <Demo></Demo>,
  },
  {
    path: '*',
    element: <NotFound></NotFound>,
  },
]);

export default router;
