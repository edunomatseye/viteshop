import { Button } from "@/components/ui/button";
import { Route } from "../../routes/_layout/github";
import { Project } from "../../types/types";

interface ProjectsProps {
  onProjectChange: (project: string) => void;
}

export function Projects({ onProjectChange }: ProjectsProps) {
  const { projects } = Route.useLoaderData();

  if (!projects) {
    return <div>No projects available.</div>;
  }

  return (
    <>
      <span>List of all Projects</span>
      {projects.map((project: Project) => (
        <div key={project.full_name}>
          <Button
            variant="outline"
            onClick={() => onProjectChange(project.full_name)}
          >
            {project.name}
          </Button>
          {" - "}
          <span>{project.full_name}</span>
        </div>
      ))}
    </>
  );
}
