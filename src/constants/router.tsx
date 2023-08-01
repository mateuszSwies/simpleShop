import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '@/error-page';
import Layout from '@/layout/Layout';
import Home from '@/screens/Home';
import Profile from '@/screens/Profile';
import RegistrationForm from '@/components/RegistrationForm';
import Shop from '@/screens/Shop';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '/cart',
    element: (
      <Layout>
        <div>cart</div>
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '/about',
    element: (
      <Layout>
        <div>about</div>
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '/shop',
    element: (
      <Layout>
        <Shop />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '/contact',
    element: (
      <Layout>
        <div>contact</div>
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '/promotions',
    element: (
      <Layout>
        <div>promotions</div>
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '/profile',
    element: (
      <Layout>
        <Profile />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '/registration',
    element: (
      <Layout>
        <RegistrationForm />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
]);

export default router;
