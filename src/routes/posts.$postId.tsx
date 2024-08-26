import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/posts/$postId")({
  component: PostRouteComponent,
});

function PostRouteComponent() {
  const { postId } = Route.useParams();
  return <>Route Post Id:- {Number(postId)}</>;
}
