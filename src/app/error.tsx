'use client';

export default function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div className="error">
      <h1>Something went wrong!</h1>
      <p>{error.message}</p>
    </div>
  );
}
