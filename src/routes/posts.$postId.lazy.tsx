import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/posts/$postId")({
  component: PostRouteComponent,
});

function PostRouteComponent() {
  const { postId } = Route.useParams();
  return <>Route Post Id:- {Number(postId)}</>;
}
