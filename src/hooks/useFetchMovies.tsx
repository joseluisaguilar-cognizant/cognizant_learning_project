import { useEffect, useState } from 'react';

import ENDPOINTS from '../api/constants/endpoints';

import { MovieData } from '../interfaces/MovieData';

const useFetchMovies = () => {
  const [movieList, setMovieList] = useState<MovieData[]>([]);

  useEffect(() => {
    const storeMovies = async (): Promise<void> => {
      const movies = await fetchMoviesHandler();

      void setMovieList(movies);
    };

    storeMovies();
  }, []);

  const fetchMoviesHandler = async (): Promise<MovieData[]> => {
    const res = await fetch(ENDPOINTS.movies.list);
    const data = await res.json();

    return data;
  };

  return movieList;
};

export default useFetchMovies;
