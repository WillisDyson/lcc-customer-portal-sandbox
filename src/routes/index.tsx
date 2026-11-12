import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  loader: async () => {
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
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
    </div>
  );
}
