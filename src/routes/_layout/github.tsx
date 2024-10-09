import { Suspense } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { GithubPage } from "../../components/github/GithubPage";
import { fetchProjects } from "../../api/githubApi";
import { ErrorBoundary } from "../../components/github/ErrorBoundary";

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
  return (
    // <ErrorBoundary fallback={({ error }) => <div>Error: {error.message}</div>}>
    <Suspense fallback={<div>Loading...</div>}>
      <GithubPage />
    </Suspense>
    // </ErrorBoundary>
  );
}
