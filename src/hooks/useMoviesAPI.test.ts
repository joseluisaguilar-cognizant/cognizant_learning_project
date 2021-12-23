import { renderHook } from '@testing-library/react-hooks';
import useMoviesAPI from './useMoviesAPI';

describe('useMoviesAPI hook', () => {
  beforeEach(() => {
    window.fetch = jest.fn();
  });
  test('should use moviesAPI', () => {
    const { result } = renderHook(() => useMoviesAPI());

    expect(result.current.movieList).toEqual([]);
  });
});
