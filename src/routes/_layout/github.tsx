import { Suspense } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GithubPage } from "../../components/github/GithubPage";
import { ErrorBoundary as ErrorResetBoundary } from "../../components/github/ErrorBoundary";
import { ErrorBoundary } from "react-error-boundary";
import { Button } from "@/components/ui/button";

const queryClient = new QueryClient();

export const Route = createFileRoute("/_layout/github")({
  component: GithubPageWrapper,
  errorComponent: ErrorBoundary,
  loaderDeps: ({ search }) => ({ search }),
  staleTime: 10_000,
});

function GithubPageWrapper() {
  const reset = () => {
    console.error("pity me1");
  };
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary
        fallbackRender={({ error, resetErrorBoundary }) => (
          <div>
            <ErrorResetBoundary
              error={error}
              reset={reset}
            ></ErrorResetBoundary>
            There was an error!{" "}
            <Button onClick={() => resetErrorBoundary()}>Try again</Button>
            <pre style={{ whiteSpace: "normal" }}>{error.message}</pre>
          </div>
        )}
        onReset={reset}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <GithubPage />
        </Suspense>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}
