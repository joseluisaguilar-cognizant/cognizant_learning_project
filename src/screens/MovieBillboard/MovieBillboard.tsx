import MoviesList from '../../components/MoviesList/MoviesList';
import useFetchMovies from '../../hooks/useFetchMovies';

import { MovieData } from '../../interfaces/MovieData';
import { FunctionComponent } from 'react';

const MovieBillboard: FunctionComponent = () => {
  const movies: MovieData[] = useFetchMovies();

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
          <MoviesList movies={movies} />
        ) : (
          <tr>
            <th>Loading data ...</th>
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
