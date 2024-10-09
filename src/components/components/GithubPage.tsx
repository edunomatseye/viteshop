import { Button } from "@/components/ui/button";
import { Projects } from "./Projects";
import { Project } from "./Project";
import { useGithubState } from "../../hooks/hooks/useGithubState";

export function GithubPage() {
  const { showProjects, activeProject, toggleProjects, setActiveProject } =
    useGithubState();

  return (
    <>
      <Button variant="secondary" onClick={toggleProjects}>
        {showProjects ? "Hide Projects" : "Show Projects"}
      </Button>
      <hr />
      {showProjects &&
        (activeProject ? (
          <Project
            onProjectChange={setActiveProject}
            activeProject={activeProject}
          />
        ) : (
          <Projects onProjectChange={setActiveProject} />
        ))}
    </>
  );
}
