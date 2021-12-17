const SERVICE_ENDPOINT = 'http://localhost:3001';

interface Endpoint {
  list: string;
  find: (id: string) => string;
}

type Path = 'movies';

const ENDPOINTS: { [key in Path]: Endpoint } = {
  movies: {
    list: `${SERVICE_ENDPOINT}/movies`,
    find: (id) => `${SERVICE_ENDPOINT}/movies/${id}`
  }
};

export default ENDPOINTS;
