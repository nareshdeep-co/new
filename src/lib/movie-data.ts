
export interface Movie {
  id: string;
  title: string;
  year: number;
  genre: string[];
  rating: number;
  image: string;
  description: string;
  director: string;
  cast: string[];
  runtime: string;
  trailerUrl: string;
}

export const MOVIES: Movie[] = [
  {
    id: '1',
    title: 'Inception',
    year: 2010,
    genre: ['Action', 'Sci-Fi', 'Thriller'],
    rating: 8.8,
    image: 'https://picsum.photos/seed/inc/400/600',
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    director: 'Christopher Nolan',
    cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page'],
    runtime: '2h 28m',
    trailerUrl: 'https://www.youtube.com/embed/YoHD9XEInc0'
  },
  {
    id: '2',
    title: 'The Matrix',
    year: 1999,
    genre: ['Action', 'Sci-Fi'],
    rating: 8.7,
    image: 'https://picsum.photos/seed/mtx/400/600',
    description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    director: 'Lana Wachowski, Lilly Wachowski',
    cast: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
    runtime: '2h 16m',
    trailerUrl: 'https://www.youtube.com/embed/vKQi3bBA1y8'
  },
  {
    id: '3',
    title: 'Interstellar',
    year: 2014,
    genre: ['Adventure', 'Drama', 'Sci-Fi'],
    rating: 8.7,
    image: 'https://picsum.photos/seed/ist/400/600',
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    director: 'Christopher Nolan',
    cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
    runtime: '2h 49m',
    trailerUrl: 'https://www.youtube.com/embed/zSWdZVtXT7E'
  },
  {
    id: '4',
    title: 'Joker',
    year: 2019,
    genre: ['Crime', 'Drama', 'Thriller'],
    rating: 8.4,
    image: 'https://picsum.photos/seed/jkr/400/600',
    description: 'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime.',
    director: 'Todd Phillips',
    cast: ['Joaquin Phoenix', 'Robert De Niro', 'Zazie Beetz'],
    runtime: '2h 2m',
    trailerUrl: 'https://www.youtube.com/embed/zAGVQLHvwOY'
  },
  {
    id: '5',
    title: 'Dune',
    year: 2021,
    genre: ['Action', 'Adventure', 'Sci-Fi'],
    rating: 8.0,
    image: 'https://picsum.photos/seed/dne/400/600',
    description: 'A noble family becomes embroiled in a war for control over the galaxy\'s most valuable asset while its heir becomes troubled by visions of a dark future.',
    director: 'Denis Villeneuve',
    cast: ['Timothée Chalamet', 'Rebecca Ferguson', 'Zendaya'],
    runtime: '2h 35m',
    trailerUrl: 'https://www.youtube.com/embed/n9xhJrPXop4'
  },
  {
    id: '6',
    title: 'Pulp Fiction',
    year: 1994,
    genre: ['Crime', 'Drama'],
    rating: 8.9,
    image: 'https://picsum.photos/seed/pulp/400/600',
    description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    director: 'Quentin Tarantino',
    cast: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson'],
    runtime: '2h 34m',
    trailerUrl: 'https://www.youtube.com/embed/s7EdQ4FqbhY'
  }
];
