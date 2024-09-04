import React, { Suspense } from "react";
import {
  createRootRouteWithContext,
  Link,
  Outlet,
} from "@tanstack/react-router";

import "../App.css";

export const Route = createRootRouteWithContext()({
  component: RootRoute,
});

const TanStackRouterDevtools =
  import.meta.env.MODE !== "development"
    ? () => null // Render nothing in production
    : React.lazy(() =>
        // Lazy load in development
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        })),
      );

function RootRoute() {
  return (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>{" "}
        <Link to="/posts" className="[&.active]:font-bold">
          Posts
        </Link>{" "}
        <Link
          to="/post/$postId"
          params={{ postId: "123" }}
          className="[&.active]:font-bold"
        >
          Post ID
        </Link>{" "}
        <Link to="/contact" className="[&.active]:font-bold">
          Contact
        </Link>{" "}
        <Link to="/table" className="[&.active]:font-bold">
          Table
        </Link>{" "}
        <Link to="/form" className="[&.active]:font-bold">
          Form
        </Link>{" "}
      </div>
      <hr />

      <Outlet />
      <Suspense>
        <TanStackRouterDevtools position="bottom-right" initialIsOpen={false} />
      </Suspense>
    </>
  );
}
