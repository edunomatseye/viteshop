import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/bookstore/")({
  component: () => <div>Hello /webstore/!</div>,
});
