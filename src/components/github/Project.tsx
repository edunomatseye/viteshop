import { Button } from "@/components/ui/button";
import { useProjectData } from "../../hooks/use-project-data";

interface ProjectProps {
  onProjectChange: (project: string | null) => void;
  activeProject: string;
}

export function Project({ onProjectChange, activeProject }: ProjectProps) {
  const { data: project } = useProjectData(activeProject);

  if (!project) {
    return <div>No project available.</div>;
  }

  return (
    <>
      <span>Project Name: {activeProject}</span>
      <br />
      <Button onClick={() => onProjectChange(null)}>Back</Button>
      <br />

      <>
        <span>Fork Count: {project?.forks_count}</span>
        <br />
        <span>Star Count: {project?.stargazers_count}</span>
        <br />
        <span>Watchers Count: {project?.watchers_count}</span>
      </>
    </>
  );
}
