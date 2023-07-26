import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from '@/error-page';
import TestComponent from '@/components/TestComponent/TestComponent';
import SecondComponent from './components/SecondComponent/SecondComponent';

const router = createBrowserRouter([
  {
    path: '/',
    element: <TestComponent />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/cart',
    element: <SecondComponent />,
    errorElement: <ErrorPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
