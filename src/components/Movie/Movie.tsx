import { FunctionComponent } from 'react';

import Button from '../Button/Button';

interface IMovie {
  title: string;
  episode: string;
  description: string;
}

const Movie: FunctionComponent<IMovie> = ({
  title,
  episode,
  description
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
          clickHandler={() => console.log('hello')}
        />
        <Button
          type="danger"
          text="delete"
          clickHandler={() => console.log('hello')}
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
