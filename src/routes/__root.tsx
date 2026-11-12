import { createRootRouteWithContext } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
import { Nav } from "../components/Nav";
import { Outlet } from "@tanstack/react-router";

// Define the type for the router context
export type RouterContext = {
  queryClient: QueryClient;
};

function RootLayout() {
    return (
    <>
        <Nav />

        {/* Render the child routes here */}
        <Outlet />
    </>
  );
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootLayout,
});

