import { FunctionComponent } from 'react';

import Button from '../Button/Button';

interface IMovie {
  id: number;
  title: string;
  episode: string;
  description: string;
  deleteMovieHandler: (id: number) => void;
  updateMovieHandler: (id: number) => void;
}

const Movie: FunctionComponent<IMovie> = ({
  id,
  title,
  episode,
  description,
  deleteMovieHandler,
  updateMovieHandler
}: IMovie) => {
  return (
    <>
      <th style={cellStyling}>{title}</th>
      <th style={cellStyling}>{episode}</th>
      <th style={cellStyling}>{description}</th>
      <th style={cellStyling}>
        <Button
          type="primary"
          text="put"
          clickHandler={() => updateMovieHandler(id)}
        />
        <Button
          type="danger"
          text="delete"
          clickHandler={() => deleteMovieHandler(id)}
        />
      </th>
    </>
  );
};

const cellStyling = {
  verticalAlign: 'middle',
  padding: '0.5rem'
};

export default Movie;
