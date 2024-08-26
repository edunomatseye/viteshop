import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/posts")({
  component: PostsIndexComponent,
});

function PostsIndexComponent() {
  return <div>Please select a post!</div>;
}
