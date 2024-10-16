/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from "@tanstack/react-router";

// Import Routes

import { Route as rootRoute } from "./routes/__root";
import { Route as LayoutImport } from "./routes/_layout";
import { Route as LayoutIndexImport } from "./routes/_layout/index";
import { Route as ProductsPostIdImport } from "./routes/products/$postId";
import { Route as ApiHelloImport } from "./routes/api/hello";
import { Route as LayoutGithubImport } from "./routes/_layout/github";

// Create Virtual Routes

const ProductsIndexLazyImport = createFileRoute("/products/")();
const LayoutTableLazyImport = createFileRoute("/_layout/table")();
const LayoutPostsLazyImport = createFileRoute("/_layout/posts")();
const LayoutFormLazyImport = createFileRoute("/_layout/form")();
const LayoutContactLazyImport = createFileRoute("/_layout/contact")();
const LayoutAboutLazyImport = createFileRoute("/_layout/about")();
const authLoginLazyImport = createFileRoute("/(auth)/login")();
const LayoutQuotesIndexLazyImport = createFileRoute("/_layout/quotes/")();
const LayoutBookstoreIndexLazyImport = createFileRoute("/_layout/bookstore/")();
const LayoutPostPostIdLazyImport = createFileRoute("/_layout/post/$postId")();

// Create/Update Routes

const LayoutRoute = LayoutImport.update({
  id: "/_layout",
  getParentRoute: () => rootRoute,
} as any);

const ProductsIndexLazyRoute = ProductsIndexLazyImport.update({
  path: "/products/",
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import("./routes/products/index.lazy").then((d) => d.Route),
);

const LayoutIndexRoute = LayoutIndexImport.update({
  path: "/",
  getParentRoute: () => LayoutRoute,
} as any);

const LayoutTableLazyRoute = LayoutTableLazyImport.update({
  path: "/table",
  getParentRoute: () => LayoutRoute,
} as any).lazy(() =>
  import("./routes/_layout/table.lazy").then((d) => d.Route),
);

const LayoutPostsLazyRoute = LayoutPostsLazyImport.update({
  path: "/posts",
  getParentRoute: () => LayoutRoute,
} as any).lazy(() =>
  import("./routes/_layout/posts.lazy").then((d) => d.Route),
);

const LayoutFormLazyRoute = LayoutFormLazyImport.update({
  path: "/form",
  getParentRoute: () => LayoutRoute,
} as any).lazy(() => import("./routes/_layout/form.lazy").then((d) => d.Route));

const LayoutContactLazyRoute = LayoutContactLazyImport.update({
  path: "/contact",
  getParentRoute: () => LayoutRoute,
} as any).lazy(() =>
  import("./routes/_layout/contact.lazy").then((d) => d.Route),
);

const LayoutAboutLazyRoute = LayoutAboutLazyImport.update({
  path: "/about",
  getParentRoute: () => LayoutRoute,
} as any).lazy(() =>
  import("./routes/_layout/about.lazy").then((d) => d.Route),
);

const authLoginLazyRoute = authLoginLazyImport
  .update({
    path: "/login",
    getParentRoute: () => rootRoute,
  } as any)
  .lazy(() => import("./routes/(auth)/login.lazy").then((d) => d.Route));

const ProductsPostIdRoute = ProductsPostIdImport.update({
  path: "/products/$postId",
  getParentRoute: () => rootRoute,
} as any);

const ApiHelloRoute = ApiHelloImport.update({
  path: "/api/hello",
  getParentRoute: () => rootRoute,
} as any);

const LayoutGithubRoute = LayoutGithubImport.update({
  path: "/github",
  getParentRoute: () => LayoutRoute,
} as any);

const LayoutQuotesIndexLazyRoute = LayoutQuotesIndexLazyImport.update({
  path: "/quotes/",
  getParentRoute: () => LayoutRoute,
} as any).lazy(() =>
  import("./routes/_layout/quotes/index.lazy").then((d) => d.Route),
);

const LayoutBookstoreIndexLazyRoute = LayoutBookstoreIndexLazyImport.update({
  path: "/bookstore/",
  getParentRoute: () => LayoutRoute,
} as any).lazy(() =>
  import("./routes/_layout/bookstore/index.lazy").then((d) => d.Route),
);

const LayoutPostPostIdLazyRoute = LayoutPostPostIdLazyImport.update({
  path: "/post/$postId",
  getParentRoute: () => LayoutRoute,
} as any).lazy(() =>
  import("./routes/_layout/post.$postId.lazy").then((d) => d.Route),
);

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/_layout": {
      id: "/_layout";
      path: "";
      fullPath: "";
      preLoaderRoute: typeof LayoutImport;
      parentRoute: typeof rootRoute;
    };
    "/_layout/github": {
      id: "/_layout/github";
      path: "/github";
      fullPath: "/github";
      preLoaderRoute: typeof LayoutGithubImport;
      parentRoute: typeof LayoutImport;
    };
    "/api/hello": {
      id: "/api/hello";
      path: "/api/hello";
      fullPath: "/api/hello";
      preLoaderRoute: typeof ApiHelloImport;
      parentRoute: typeof rootRoute;
    };
    "/products/$postId": {
      id: "/products/$postId";
      path: "/products/$postId";
      fullPath: "/products/$postId";
      preLoaderRoute: typeof ProductsPostIdImport;
      parentRoute: typeof rootRoute;
    };
    "/(auth)/login": {
      id: "/login";
      path: "/login";
      fullPath: "/login";
      preLoaderRoute: typeof authLoginLazyImport;
      parentRoute: typeof rootRoute;
    };
    "/_layout/about": {
      id: "/_layout/about";
      path: "/about";
      fullPath: "/about";
      preLoaderRoute: typeof LayoutAboutLazyImport;
      parentRoute: typeof LayoutImport;
    };
    "/_layout/contact": {
      id: "/_layout/contact";
      path: "/contact";
      fullPath: "/contact";
      preLoaderRoute: typeof LayoutContactLazyImport;
      parentRoute: typeof LayoutImport;
    };
    "/_layout/form": {
      id: "/_layout/form";
      path: "/form";
      fullPath: "/form";
      preLoaderRoute: typeof LayoutFormLazyImport;
      parentRoute: typeof LayoutImport;
    };
    "/_layout/posts": {
      id: "/_layout/posts";
      path: "/posts";
      fullPath: "/posts";
      preLoaderRoute: typeof LayoutPostsLazyImport;
      parentRoute: typeof LayoutImport;
    };
    "/_layout/table": {
      id: "/_layout/table";
      path: "/table";
      fullPath: "/table";
      preLoaderRoute: typeof LayoutTableLazyImport;
      parentRoute: typeof LayoutImport;
    };
    "/_layout/": {
      id: "/_layout/";
      path: "/";
      fullPath: "/";
      preLoaderRoute: typeof LayoutIndexImport;
      parentRoute: typeof LayoutImport;
    };
    "/products/": {
      id: "/products/";
      path: "/products";
      fullPath: "/products";
      preLoaderRoute: typeof ProductsIndexLazyImport;
      parentRoute: typeof rootRoute;
    };
    "/_layout/post/$postId": {
      id: "/_layout/post/$postId";
      path: "/post/$postId";
      fullPath: "/post/$postId";
      preLoaderRoute: typeof LayoutPostPostIdLazyImport;
      parentRoute: typeof LayoutImport;
    };
    "/_layout/bookstore/": {
      id: "/_layout/bookstore/";
      path: "/bookstore";
      fullPath: "/bookstore";
      preLoaderRoute: typeof LayoutBookstoreIndexLazyImport;
      parentRoute: typeof LayoutImport;
    };
    "/_layout/quotes/": {
      id: "/_layout/quotes/";
      path: "/quotes";
      fullPath: "/quotes";
      preLoaderRoute: typeof LayoutQuotesIndexLazyImport;
      parentRoute: typeof LayoutImport;
    };
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  LayoutRoute: LayoutRoute.addChildren({
    LayoutGithubRoute,
    LayoutAboutLazyRoute,
    LayoutContactLazyRoute,
    LayoutFormLazyRoute,
    LayoutPostsLazyRoute,
    LayoutTableLazyRoute,
    LayoutIndexRoute,
    LayoutPostPostIdLazyRoute,
    LayoutBookstoreIndexLazyRoute,
    LayoutQuotesIndexLazyRoute,
  }),
  ApiHelloRoute,
  ProductsPostIdRoute,
  authLoginLazyRoute,
  ProductsIndexLazyRoute,
});

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_layout",
        "/api/hello",
        "/products/$postId",
        "/login",
        "/products/"
      ]
    },
    "/_layout": {
      "filePath": "_layout.tsx",
      "children": [
        "/_layout/github",
        "/_layout/about",
        "/_layout/contact",
        "/_layout/form",
        "/_layout/posts",
        "/_layout/table",
        "/_layout/",
        "/_layout/post/$postId",
        "/_layout/bookstore/",
        "/_layout/quotes/"
      ]
    },
    "/_layout/github": {
      "filePath": "_layout/github.tsx",
      "parent": "/_layout"
    },
    "/api/hello": {
      "filePath": "api/hello.ts"
    },
    "/products/$postId": {
      "filePath": "products/$postId.tsx"
    },
    "/login": {
      "filePath": "(auth)/login.lazy.tsx"
    },
    "/_layout/about": {
      "filePath": "_layout/about.lazy.tsx",
      "parent": "/_layout"
    },
    "/_layout/contact": {
      "filePath": "_layout/contact.lazy.tsx",
      "parent": "/_layout"
    },
    "/_layout/form": {
      "filePath": "_layout/form.lazy.tsx",
      "parent": "/_layout"
    },
    "/_layout/posts": {
      "filePath": "_layout/posts.lazy.tsx",
      "parent": "/_layout"
    },
    "/_layout/table": {
      "filePath": "_layout/table.lazy.tsx",
      "parent": "/_layout"
    },
    "/_layout/": {
      "filePath": "_layout/index.tsx",
      "parent": "/_layout"
    },
    "/products/": {
      "filePath": "products/index.lazy.tsx"
    },
    "/_layout/post/$postId": {
      "filePath": "_layout/post.$postId.lazy.tsx",
      "parent": "/_layout"
    },
    "/_layout/bookstore/": {
      "filePath": "_layout/bookstore/index.lazy.tsx",
      "parent": "/_layout"
    },
    "/_layout/quotes/": {
      "filePath": "_layout/quotes/index.lazy.tsx",
      "parent": "/_layout"
    }
  }
}
ROUTE_MANIFEST_END */
