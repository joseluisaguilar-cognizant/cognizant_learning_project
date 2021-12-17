import axios from 'axios';
import { MovieData } from '../../interfaces/MovieData';

import ENDPOINTS from '../constants/endpoints';

const CONFIG = {
  headers: {
    'Content-Type': 'application/json'
  }
};

export async function fetchGetMoviesList(): Promise<MovieData[]> {
  const res = await axios.get<MovieData[]>(ENDPOINTS.movies.list, CONFIG);
  return res.data;
}

export async function fetchDeleteMovie(id: number): Promise<void> {
  const res = await axios.delete<void>(
    ENDPOINTS.movies.find(String(id)),
    CONFIG
  );

  return res.data;
}

export async function fetchUpdateMovie(
  id: number,
  data: { [key: string]: string }
): Promise<MovieData> {
  const res = await axios.patch<MovieData>(
    ENDPOINTS.movies.find(String(id)),
    data,
    CONFIG
  );

  return res.data;
}
