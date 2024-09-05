import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/products/$postId")({
  component: PostRouteComponent,
});

function PostRouteComponent() {
  const { postId } = Route.useParams();
  return <div>Hello /products/$postId! {postId}</div>;
}
