import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();

  if (typeof error === 'string') {
    return (
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error}</i>
        </p>
      </div>
    );
  }

  if (error instanceof Error) {
    return (
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.message}</i>
        </p>
      </div>
    );
  }
  return null;
}
