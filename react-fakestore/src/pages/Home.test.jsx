import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './Home';
import '@testing-library/jest-dom';

const queryClient = new QueryClient();

describe('Home Component', () => {
  test('displays loading state initially when fetching from FakeStore', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    );
    
    expect(screen.getByText(/Loading store.../i)).toBeInTheDocument();
  });
});