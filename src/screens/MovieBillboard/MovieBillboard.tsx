import useMoviesAPI from '../../hooks/useMoviesAPI';

import { FunctionComponent } from 'react';
import { MovieData } from '../../interfaces/MovieData';
import Movie from '../../components/Movie/Movie';

const MovieBillboard: FunctionComponent = () => {
  const {
    movieList: movies,
    isLoading,
    deleteMovie,
    updateMovie
  } = useMoviesAPI();

  const deleteMovieHandler = (id: number): void => {
    deleteMovie(id);
  };

  const updateMovieHandler = (id: number): void => {
    updateMovie(id, { title: 'Data' });
  };

  if (isLoading) {
    return (
      <h2 style={{ fontSize: '2rem', textAlign: 'center', padding: '3rem' }}>
        Loading data ...
      </h2>
    );
  }

  return (
    <table style={{ width: '100%' }}>
      <thead
        style={{
          background: 'springgreen',
          textTransform: 'uppercase',
          fontWeight: 'bold'
        }}
      >
        <tr>
          <th style={headerStyling}>Title</th>
          <th style={headerStyling}>Episode number</th>
          <th style={headerStyling}>Description</th>
          <th style={headerStyling}>Actions</th>
        </tr>
      </thead>

      <tbody className="billboard-table__body">
        {movies.length ? (
          movies.map(
            ({ id, title, episode_number, description }: MovieData) => {
              return (
                <tr key={id} style={{ borderBottom: '1px solid lightgreen' }}>
                  <Movie
                    id={id}
                    title={title}
                    episode={episode_number}
                    description={description}
                    deleteMovieHandler={deleteMovieHandler}
                    updateMovieHandler={updateMovieHandler}
                  />
                </tr>
              );
            }
          )
        ) : (
          <tr>
            <th
              style={{
                padding: '1rem',
                fontSize: '1rem',
                borderBottom: '1px solid red'
              }}
              colSpan={4}
            >
              NO MOVIES
            </th>
          </tr>
        )}
      </tbody>
    </table>
  );
};

const headerStyling = {
  width: '25%',
  padding: '0.5rem'
};

export default MovieBillboard;
