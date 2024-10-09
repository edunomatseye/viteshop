import { useMemo } from "react";
import { fetchProject } from "../api/githubApi";

export function useProjectData(activeProject: string) {
  const projectPromise = useMemo(
    () => fetchProject(activeProject),
    [activeProject],
  );

  return { projectPromise };
}
