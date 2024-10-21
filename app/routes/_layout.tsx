import { AppSidebar } from "@/components/app-sidebar";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import { useState } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

export const Route = createFileRoute("/_layout")({
  component: Layout,
});

function Layout() {
  const [count, setCount] = useState(0);
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background text-foreground">
        <header className="p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Vite + React</h1>
          <nav>
            <ThemeToggle />
            {/* Add your navigation links here */}
          </nav>
        </header>
        <main className="p-4">
          <>
            <AppSidebar />
            <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
              </button>
            </div>
          </>
          <hr className="my-4" />
          <Outlet />
        </main>
        <footer className="p-4">
          <span>Footer</span>
        </footer>
      </div>
    </ThemeProvider>
  );
}
