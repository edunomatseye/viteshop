import { useMemo } from "react";
import { fetchProject, fetchProjects } from "../api/githubApi";
import { useQuery } from "@tanstack/react-query";
import { Project, ProjectDetails } from "../types/types";

export function useProjectPromiseData(activeProject: string) {
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

export function useProjectData(activeProject: string) {
  return useQuery<ProjectDetails, Error>({
    queryKey: ["project", activeProject],
    queryFn: async () => {
      const projectDetails = await fetchProject(activeProject);
      return {
        forks_count: projectDetails.forks_count,
        stargazers_count: projectDetails.stargazers_count,
        watchers_count: projectDetails.watchers_count,
      };
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 15 * 60 * 1000, // 15 minutes
  });
}
