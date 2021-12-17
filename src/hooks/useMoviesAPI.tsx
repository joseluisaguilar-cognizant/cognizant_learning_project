import { useEffect, useState } from 'react';

import {
  fetchDeleteMovie,
  fetchGetMoviesList,
  fetchUpdateMovie
} from '../api/services/moviesService';

import { MovieData } from '../interfaces/MovieData';

interface UseMoviesAPI {
  movieList: MovieData[];
  isLoading: boolean;
  deleteMovie: (id: number) => void;
  updateMovie: (id: number, data: { [key: string]: string }) => void;
}

const useMoviesAPI = (): UseMoviesAPI => {
  const [movieList, setMovieList] = useState<MovieData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const movies = await fetchGetMoviesList();
      void setMovieList(movies);
    } catch (error) {
      void setMovieList([]);
      alert('Please, switch on the mock-server');
    }

    setIsLoading(false);
  };

  const deleteMovie = (id: number) => {
    fetchDeleteMovie(id);

    fetchMovies();
  };

  const updateMovie = (id: number, data: any) => {
    fetchUpdateMovie(id, data);

    fetchMovies();
  };
  return { movieList, isLoading, deleteMovie, updateMovie };
};

export default useMoviesAPI;
