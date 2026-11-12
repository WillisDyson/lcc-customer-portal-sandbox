import { QueryClient } from '@tanstack/react-query';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { pageNamesQueryOptions } from './mockApiCall';


afterEach(() => {
  // Restore the original global fetch function after each test
  vi.unstubAllGlobals();
});

describe('page names mock API', () => {
  it('fetches and returns the validated page names', async () => {
    const pageNames = { home: 'home', about: 'about' };

    // Mock a global fetch function that returns a successful response with the mock data
    const fetchMock = vi.fn().mockResolvedValue({
      // Simulate a successful response with a status of 200
      ok: true,

      // Return a JSON object with the mock data when the json() method is called
      json: vi.fn().mockResolvedValue(pageNames),
    });

    // Replace the global fetch function with the mock implementation for this test
    vi.stubGlobal('fetch', fetchMock);

    // Create a new QueryClient instance and use it to query the page names
    const queryClient = new QueryClient();

    // Use the query client to fetch the page names using the query options defined in mockApiCall.ts
    const result = await queryClient.query(pageNamesQueryOptions);

    expect(fetchMock).toHaveBeenCalledWith(

    // Check that the fetch function was called with the correct URL for the mock data
      `${import.meta.env.BASE_URL}mock-api/mock-data.json`,
    );

    // Check that the result of the query matches the expected mock data
    expect(result).toEqual(pageNames);
  });
});
 