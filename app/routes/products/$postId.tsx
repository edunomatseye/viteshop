import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/products/$postId")({
  loader: async ({ context }) => {
    const posts = await context.fetchPosts();
    return { posts };
  },
  component: PostRouteComponent,
});

function PostRouteComponent() {
  const { postId } = Route.useParams();
  const { posts } = Route.useLoaderData();
  const ctx = Route.useRouteContext();
  return (
    <div>
      Hello school of economics /products/$postId! {postId}{" "}
      {JSON.stringify({ posts, ctx })}
    </div>
  );
}
