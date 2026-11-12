import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  loader: async () => {
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
  return (
    <div>
      <h1>About</h1>
      <p>Welcome to the about page!</p>
    </div>
  );
}
