import { createFileRoute } from '@tanstack/react-router';
import { useSuspenseQuery } from '@tanstack/react-query';
import { pageNamesQueryOptions } from '../api/mockApiCall';

// Define the route for the Apply page
export const Route = createFileRoute('/apply')({

  // Fetch the data before rendering the component
  loader: async ({ context }) => {

    // Fetch the page names from the mock API and store them in the query client. Use the pre-defined query options from mockApiCall.ts to ensure that the data is validated and cached correctly. If the data is already in the cache, it will be returned from there instead of making a new network request, due to the unique query key defined in the query options (in mockApiCall.ts).
    await context.queryClient.query(pageNamesQueryOptions);
    return {
      header: {
        title: 'Citizen Portal',
        text: 'Report a problem, apply for something, or check on a report you have already made.',
      },
    };
  },

  // Tells the router which component to render for this route
  component: ApplyPage,
});

function ApplyPage() {

  // Use the useSuspenseQuery hook to fetch the page names from the query client
  const { data: pageNames } = useSuspenseQuery(pageNamesQueryOptions);

  return (
    <div>
      <h1>Apply</h1>
      <p>You are on the {pageNames.apply} page</p>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
