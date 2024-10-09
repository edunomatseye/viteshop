import { Project, ProjectDetails } from "../types/types";

const BASE_URL = "https://api.github.com";

export async function fetchProjects(): Promise<Project[]> {
  console.info("Fetching projects");
  const response = await fetch(`${BASE_URL}/users/TanStack/repos?sort=updated`);
  await new Promise((r) => setTimeout(r, 1000)); // Simulating delay
  return response.json();
}

export async function fetchProject(id: string): Promise<ProjectDetails> {
  console.info("Fetching project:", id);
  const response = await fetch(`${BASE_URL}/repos/${id}`);
  await new Promise((r) => setTimeout(r, 1000)); // Simulating delay
  return response.json();
}
