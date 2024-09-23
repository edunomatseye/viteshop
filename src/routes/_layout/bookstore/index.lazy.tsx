import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_layout/bookstore/")({
  component: () => <div>Hello /webstore/!</div>,
});
