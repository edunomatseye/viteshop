import { useState, useCallback } from "react";

export function useGithubState() {
  const [showProjects, setShowProjects] = useState(false);
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const toggleProjects = useCallback(() => {
    setShowProjects((prev) => !prev);
  }, []);

  return {
    showProjects,
    activeProject,
    toggleProjects,
    setActiveProject,
  };
}
