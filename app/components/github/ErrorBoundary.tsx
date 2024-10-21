interface ErrorBoundaryProps {
  error: Error;
  reset: () => void;
  info?: { componentStack: string };
}

export function ErrorBoundary({ error, reset, info }: ErrorBoundaryProps) {
  return (
    <div>
      Error Loading Github Pages - {error.message}
      {info && <div>Component Stack: {info.componentStack}</div>}
      <button onClick={reset}>Reset</button>
    </div>
  );
}
