import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '@/error-page';
import Layout from '@/layout/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <div>tekst</div>
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
        <div>shop</div>
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
        <div>profile</div>
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
]);

export default router;
