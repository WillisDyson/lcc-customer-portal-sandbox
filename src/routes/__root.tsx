import { createRootRouteWithContext } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
import { Nav } from "../components/Nav";
import { Outlet } from "@tanstack/react-router";

export type RouterContext = {
  queryClient: QueryClient;
};

function RootLayout() {
    return (
    <>
        <Nav />
        <Outlet />
    </>
  );
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootLayout,
});

