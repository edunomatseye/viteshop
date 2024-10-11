import { useMemo } from "react";
import { fetchProject, fetchProjects } from "../api/githubApi";
import { useQuery } from "@tanstack/react-query";
import { Project } from "../types/types";

export function useProjectData(activeProject: string) {
  const projectPromise = useMemo(
    () => fetchProject(activeProject),
    [activeProject],
  );

  return { projectPromise };
}

export function useProjectsData() {
  return useQuery<Project[], Error>({
    queryKey: ["projects"],
    queryFn: fetchProjects,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 15 * 60 * 1000, // 15 minutes
  });
}
