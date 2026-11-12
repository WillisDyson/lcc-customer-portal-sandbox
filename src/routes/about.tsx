import { createFileRoute } from '@tanstack/react-router';
import { useSuspenseQuery } from '@tanstack/react-query';
import { pageNamesQueryOptions } from '../api/mockApiCall';

export const Route = createFileRoute('/about')({
  loader: async ({ context }) => {
    await context.queryClient.query(pageNamesQueryOptions);
    return {
      header: {
        title: 'Citizen Portal',
        text: 'Report a problem, apply for something, or check on a report you have already made.',
      },
    };
  },
  component: AboutPage,
});

function AboutPage() {
  const { data: pageNames } = useSuspenseQuery(pageNamesQueryOptions);

  return (
    <div>
      <h1>About</h1>
      <p>You are on the {pageNames.about} page</p>
    </div>
  );
}
