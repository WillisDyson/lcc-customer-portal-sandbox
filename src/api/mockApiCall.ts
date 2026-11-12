import { queryOptions } from '@tanstack/react-query';

type PageNames = {
  home: string;
  about: string;
};

async function fetchPageNames(): Promise<PageNames> {
  const response = await fetch(
    `${import.meta.env.BASE_URL}mock-api/mock-data.json`,
  );

  if (!response.ok) {
    throw new Error('Unable to load page names');
  }

  return response.json() as Promise<PageNames>;
}

export const pageNamesQueryOptions = queryOptions({
  queryKey: ['page-names'],
  queryFn: fetchPageNames,
  staleTime: 'static',
});