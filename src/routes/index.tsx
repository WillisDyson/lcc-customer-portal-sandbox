import { createFileRoute } from '@tanstack/react-router';
import { useSuspenseQuery } from '@tanstack/react-query';
import { pageNamesQueryOptions } from '../api/mockApiCall';

export const Route = createFileRoute('/')({
  loader: async ({ context }) => {
    await context.queryClient.query(pageNamesQueryOptions);
    return {
      header: {
        title: 'Citizen Portal',
        text: 'Report a problem, apply for something, or check on a report you have already made.',
      },
    };
  },
  component: HomePage,
});

function HomePage() {
  const { data: pageNames } = useSuspenseQuery(pageNamesQueryOptions);

  return (
    <div>
      <h1>Home</h1>
      <p>You are on the {pageNames.home} page</p>
    </div>
  );
}
