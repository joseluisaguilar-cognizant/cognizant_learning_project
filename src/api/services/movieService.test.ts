import axios from 'axios';

import { MovieData } from '../../interfaces/MovieData';
import * as moviesService from './moviesService';

const mockMovie: MovieData = {
  id: 2,
  title: 'Title 3',
  episode_number: 'Episode 1',
  main_characters: ['Human 1', 'Alien 1', 'Robot 1'],
  description: 'Description 1',
  poster: 'Poster 1',
  hero_image: 'Hero 1'
};

const mockMovieData: MovieData[] = [
  {
    id: 1,
    title: 'Title 1',
    episode_number: 'Episode 1',
    main_characters: ['Human 1', 'Alien 1', 'Robot 1'],
    description: 'Description 1',
    poster: 'Poster 1',
    hero_image: 'Hero 1'
  },
  {
    id: 2,
    title: 'Title 2',
    episode_number: 'Episode 2',
    main_characters: ['Human 2', 'Alien 2', 'Robot 2'],
    description: 'Description 2',
    poster: 'Poster 2',
    hero_image: 'Hero 2'
  },
  {
    id: 3,
    title: 'Title 3',
    episode_number: 'Episode 3',
    main_characters: ['Human 3', 'Alien 3', 'Robot 3'],
    description: 'Description 3',
    poster: 'Poster 3',
    hero_image: 'Hero 3'
  }
];

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('movieService service', () => {
  test('should receive the list of movies', async () => {
    // Arrange
    mockedAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: mockMovieData })
    );

    // Act
    const result = await moviesService.fetchGetMoviesList();

    // Assert
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockMovieData);
  });

  test('should update movies', async () => {
    // Arrange
    mockedAxios.patch.mockImplementationOnce(() =>
      Promise.resolve({ data: mockMovie })
    );

    // Act
    const result = await moviesService.fetchUpdateMovie(2, {
      title: 'something'
    });

    // Assert
    expect(result).toEqual(mockMovie);
  });

  test('should delete movie', async () => {
    // Arrange
    mockedAxios.delete.mockImplementationOnce(() =>
      Promise.resolve({ data: {} })
    );

    // Act
    const result = await moviesService.fetchDeleteMovie(2);

    // Assert
    expect(result).toEqual({});
  });
});
