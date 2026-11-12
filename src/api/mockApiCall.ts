import { queryOptions } from '@tanstack/react-query';
import { z } from 'zod';

const pageNamesSchema = z.object({
  home: z.string(),
  about: z.string(),
});

type PageNames = z.infer<typeof pageNamesSchema>;

async function fetchPageNames(): Promise<PageNames> {
  const response = await fetch(
    `${import.meta.env.BASE_URL}mock-api/mock-data.json`,
  );

  if (!response.ok) {
    throw new Error('Unable to load page names');
  }

  const data: unknown = await response.json();
  return pageNamesSchema.parse(data);
}

export const pageNamesQueryOptions = queryOptions({
  queryKey: ['page-names'],
  queryFn: fetchPageNames,
  staleTime: 'static',
});