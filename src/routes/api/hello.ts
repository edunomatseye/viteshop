import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/hello")({
  component: Hello,
});

function Hello() {
  return {
    hello: "welcome to the game!",
  };
}
