import React, { Suspense } from "react";
import { Await, createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_layout/github")({
  component: Github,
  loader: async () => {
    const projects = await fetchProjects().catch((e) =>
      console.warn(e.message),
    );
    return {
      projects,
    };
  },
  errorComponent: ({ error, reset, info }) => (
    <div>
      Error Loading Github Pages - {error.message} - {info?.componentStack}{" "}
      <button onClick={reset}>Reset</button>
    </div>
  ),
  onCatch(error, errorInfo) {
    return (
      <>
        {error} - {errorInfo}
      </>
    );
  },
});

interface Project {
  name: string;
  full_name: string;
}

function Github() {
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
        <Suspense fallback={<>Loading...</>}>
          {activeProject ? (
            <Project
              onProjectChange={setActiveProject}
              project={activeProject}
            />
          ) : (
            <Projects onProjectChange={setActiveProject} />
          )}
        </Suspense>
      ) : null}
    </>
  );
}

function Project({
  onProjectChange,
  project,
}: {
  onProjectChange: React.Dispatch<React.SetStateAction<string | null>>;
  project: string | null;
}) {
  return (
    <>
      <Button onClick={() => onProjectChange(null)}>Back</Button>
      <br />
      <Await
        promise={fetchProject(project!)}
        fallback={<>Loading Project...</>}
      >
        {(project) => (
          <>
            <span> Fork Count: {project.forks_count} </span>
            <br />
            <span> Star Count: {project.stargazers_count} </span>
            <br />
            <span> Watchers Count: {project.watchers_count} </span>
            <br />
          </>
        )}
      </Await>
    </>
  );
}

function Projects({
  onProjectChange,
}: {
  onProjectChange: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const { projects } = Route.useLoaderData();

  return (
    <>
      <span>List of all Projects</span>
      {projects?.map((project, idx) => (
        <div key={idx}>
          <Button
            variant={"outline"}
            onClick={() => onProjectChange(project.full_name)}
          >
            {project.name}
          </Button>{" "}
          {" - "} <span>{project.full_name}</span>
        </div>
      ))}
    </>
  );
}

// function fetchProject2(projectName: string) {
//   return projectName;
// }

// function fetchProjects2() {
//   const projects = [];
//   for (let i = 0; i <= 10; i++) {
//     projects.push({
//       id: i,
//       title: `Title ${i}`,
//       name: `Name ${i}`,
//     });
//   }
//   return projects;
// }

async function fetchProjects(): Promise<
  Array<{ name: string; full_name: string }>
> {
  console.info("Fetching projects");

  const response = await fetch(
    `https://api.github.com/users/TanStack/repos?sort=updated`,
  );
  await new Promise((r) => setTimeout(r, 1000));
  return await response.json();
}

async function fetchProject(id: string): Promise<{
  forks_count: number;
  stargazers_count: number;
  watchers_count: number;
}> {
  console.info("Fetching project:", id);

  const response = await fetch(`https://api.github.com/repos/${id}`);
  await new Promise((r) => setTimeout(r, 1000));
  return await response.json();
}
