import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/table")({
  component: () => <div>Hello /table!</div>,
});
