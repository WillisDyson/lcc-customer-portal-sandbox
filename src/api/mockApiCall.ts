import { queryOptions } from '@tanstack/react-query';
import { z } from 'zod';

// Create a Zod schema object to validate the structure of the mock data
const pageNamesSchema = z.object({
  home: z.string(),
  about: z.string(),
});

// Create a TypeScript type based on the Zod schema
type PageNames = z.infer<typeof pageNamesSchema>;

// Fetch the mock data from the JSON file and validate it against the Zod schema
async function fetchPageNames(): Promise<PageNames> {
  const response = await fetch(
    `${import.meta.env.BASE_URL}mock-api/mock-data.json`,
  );

  if (!response.ok) {
    throw new Error('Unable to load page names');
  }

  const data: unknown = await response.json();

  // Check that the data matches the expected structure using the Zod schema, and only return the data if it is valid.
  return pageNamesSchema.parse(data);
}

// Define the options required for TanStack to fetch and cache the page names, and expose them for use in the route loaders and components.
export const pageNamesQueryOptions = queryOptions({

  // Define a unique key for the query to identify it in the cache
  queryKey: ['page-names'],

  // Define the function that will be used to fetch the data
  queryFn: fetchPageNames,

  // Define how long the data should be considered fresh before it is refetched (static = never refetch)
  staleTime: 'static',
});