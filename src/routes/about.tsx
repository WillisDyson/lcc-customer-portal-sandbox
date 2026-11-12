import { createFileRoute } from '@tanstack/react-router';
import { useSuspenseQuery } from '@tanstack/react-query';
import { pageNamesQueryOptions } from '../api/mockApiCall';

// Define the route for the About page
export const Route = createFileRoute('/about')({

  // Fetch the data before rendering the component
  loader: async ({ context }) => {

    // Fetch the page names from the mock API and store them in the query client
    await context.queryClient.query(pageNamesQueryOptions);
    return {
      header: {
        title: 'Citizen Portal',
        text: 'Report a problem, apply for something, or check on a report you have already made.',
      },
    };
  },

  // Tells the router which component to render for this route
  component: AboutPage,
});

function AboutPage() {

  // Use the useSuspenseQuery hook to fetch the page names from the query client
  const { data: pageNames } = useSuspenseQuery(pageNamesQueryOptions);

  return (
    <div>
      <h1>About</h1>
      <p>You are on the {pageNames.about} page</p>
    </div>
  );
}
