import { Suspense } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { GithubPage } from "../../components/github/GithubPage";
import { fetchProjects } from "../../api/githubApi";
import { ErrorBoundary as ErrorResetBoundary } from "../../components/github/ErrorBoundary";
import { ErrorBoundary } from "react-error-boundary";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_layout/github")({
  component: GithubPageWrapper,
  loader: async () => {
    const projects = await fetchProjects().catch((e) => {
      console.warn("Error fetching projects:", e.message);
      return null;
    });
    return {
      projects,
    };
  },
  errorComponent: ErrorBoundary,
  loaderDeps: ({ search }) => ({ search }),
  staleTime: 10_000,
});

function GithubPageWrapper() {
  const reset = () => {
    console.error("pity me1");
  };
  return (
    <ErrorBoundary
      fallbackRender={({ error, resetErrorBoundary }) => (
        <div>
          <ErrorResetBoundary error={error} reset={reset}></ErrorResetBoundary>
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
  );
}
