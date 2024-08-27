import React, { Suspense, useState } from "react";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
//import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "../App.css";

export const Route = createRootRoute({
  component: RootRoute,
});

function RootRoute() {
  const [count, setCount] = useState(0);

  const TanStackRouterDevtools = import.meta.env.DEV
    ? () => null // Render nothing in production
    : React.lazy(() =>
        // Lazy load in development
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        }))
      );

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
          to="/posts/$postId"
          params={{ postId: "123" }}
          className="[&.active]:font-bold"
        >
          Post ID
        </Link>{" "}
        <Link to="/contact" className="[&.active]:font-bold">
          Contact
        </Link>{" "}
      </div>
      <hr />
      <>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
      <hr />
      <Outlet />
      <Suspense>
        <TanStackRouterDevtools position="bottom-right" initialIsOpen={false} />
      </Suspense>
    </>
  );
}
