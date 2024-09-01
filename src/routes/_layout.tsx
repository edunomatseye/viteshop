import { createFileRoute, Outlet } from "@tanstack/react-router";
import { useState } from "react";

// import reactLogo from "../assets/react.svg";
// import viteLogo from "/vite.svg";

export const Route = createFileRoute("/_layout")({
  component: Layout,
});

function Layout() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <header>
        <h1>Vite + React</h1>
        <nav>{/* Add your navigation links here */}</nav>
      </header>
      <main>
        <>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
          </div>
        </>
        <hr />
        <Outlet />
      </main>
      <footer>
        <span>Footer</span>
      </footer>
    </div>
  );
}
