import React, { FunctionComponent } from 'react';

import Movie from '../Movie/Movie';

import { MovieData } from '../../interfaces/MovieData';

interface IMoviesList {
  movies: MovieData[];
}

const MoviesList: FunctionComponent<IMoviesList> = ({
  movies
}: IMoviesList) => {
  return (
    <>
      {movies.map(({ id, title, episode_number, description }: MovieData) => {
        return (
          <tr key={id}>
            <Movie
              title={title}
              episode={episode_number}
              description={description}
            />
          </tr>
        );
      })}
    </>
  );
};

export default MoviesList;
