import React from "react";
import { createLazyFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createLazyFileRoute("/_layout/github")({
  component: Github,
});

interface Project {
  id: number;
  title: string;
  name: string;
}

function Github() {
  Route.useLoaderData();
  const [showProjects, setShowprojects] = React.useState<boolean>(false);
  const [activeProject, setActiveProject] = React.useState<string | null>(null);
  return (
    <>
      <Button
        variant={"secondary"}
        onClick={() => {
          console.log("showing projects");
          setShowprojects((project) => !project);
        }}
      >
        {showProjects ? "Hide Project" : "Show Projects"}
      </Button>
      <hr />
      {showProjects ? (
        activeProject ? (
          <Project onProjectChange={setActiveProject} project={activeProject} />
        ) : (
          <Projects onProjectChange={setActiveProject} />
        )
      ) : null}
    </>
  );
}

function Project({
  onProjectChange,
  project,
}: {
  onProjectChange: React.Dispatch<React.SetStateAction<string | null>>;
  project: string;
}) {
  const activeProject = fetchProject(project);
  return (
    <>
      <Button onClick={() => onProjectChange(null)}>Back</Button>
      <br />
      <span> {activeProject} </span>
    </>
  );
}

function Projects({
  onProjectChange,
}: {
  onProjectChange: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const projects = fetchProjects();

  return (
    <>
      <span>List of all Projects</span>
      {projects.map((project) => (
        <div key={project.id}>
          <Button
            variant={"outline"}
            onClick={() => onProjectChange(project.name)}
          >
            {project.name}
          </Button>{" "}
          {" - "} <span>{project.title}</span>
        </div>
      ))}
    </>
  );
}

function fetchProject(projectName: string) {
  return projectName;
}

function fetchProjects() {
  const projects = [];
  for (let i = 0; i <= 10; i++) {
    projects.push({
      id: i,
      title: `Title ${i}`,
      name: `Name ${i}`,
    });
  }
  return projects;
}
