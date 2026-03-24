
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
  // Hollywood
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
    title: 'The Dark Knight',
    year: 2008,
    genre: ['Action', 'Crime', 'Drama'],
    rating: 9.0,
    image: 'https://picsum.photos/seed/tdk/400/600',
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    director: 'Christopher Nolan',
    cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
    runtime: '2h 32m',
    trailerUrl: 'https://www.youtube.com/embed/EXeTwQWrcwY'
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
    id: '9',
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
    id: '10',
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
  },
  {
    id: '11',
    title: 'Dune: Part Two',
    year: 2024,
    genre: ['Action', 'Adventure', 'Sci-Fi'],
    rating: 8.6,
    image: 'https://picsum.photos/seed/dune2/400/600',
    description: 'Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family.',
    director: 'Denis Villeneuve',
    cast: ['Timothée Chalamet', 'Zendaya', 'Rebecca Ferguson'],
    runtime: '2h 46m',
    trailerUrl: 'https://www.youtube.com/embed/Way9Dexny3w'
  },
  {
    id: '12',
    title: 'Oppenheimer',
    year: 2023,
    genre: ['Biography', 'Drama', 'History'],
    rating: 8.3,
    image: 'https://picsum.photos/seed/opp/400/600',
    description: 'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.',
    director: 'Christopher Nolan',
    cast: ['Cillian Murphy', 'Emily Blunt', 'Matt Damon'],
    runtime: '3h 0m',
    trailerUrl: 'https://www.youtube.com/embed/uYPbbksJxIg'
  },

  // Bollywood
  {
    id: '4',
    title: 'RRR',
    year: 2022,
    genre: ['Action', 'Drama'],
    rating: 7.8,
    image: 'https://picsum.photos/seed/rrr/400/600',
    description: 'A fictitious story about two legendary revolutionaries and their journey away from home before they started fighting for their country in 1920s.',
    director: 'S. S. Rajamouli',
    cast: ['N. T. Rama Rao Jr.', 'Ram Charan', 'Ajay Devgn'],
    runtime: '3h 7m',
    trailerUrl: 'https://www.youtube.com/embed/f_vbAtFSEc0'
  },
  {
    id: '5',
    title: 'Dangal',
    year: 2016,
    genre: ['Action', 'Biography', 'Drama'],
    rating: 8.3,
    image: 'https://picsum.photos/seed/dgl/400/600',
    description: 'Former wrestler Mahavir Singh Phogat and his two wrestler daughters struggle towards glory at the Commonwealth Games in the face of societal oppression.',
    director: 'Nitesh Tiwari',
    cast: ['Aamir Khan', 'Sakshi Tanwar', 'Fatima Sana Shaikh'],
    runtime: '2h 41m',
    trailerUrl: 'https://www.youtube.com/embed/x_7YlGv9u1g'
  },
  {
    id: '6',
    title: 'Lagaan',
    year: 2001,
    genre: ['Drama', 'Musical', 'Sport'],
    rating: 8.1,
    image: 'https://picsum.photos/seed/lgn/400/600',
    description: 'The people of a small village in Victorian India stake their future on a game of cricket against their ruthless British rulers.',
    director: 'Ashutosh Gowariker',
    cast: ['Aamir Khan', 'Raghuvir Yadav', 'Gracy Singh'],
    runtime: '3h 44m',
    trailerUrl: 'https://www.youtube.com/embed/N6O2biF-pIs'
  },
  {
    id: '13',
    title: 'Sholay',
    year: 1975,
    genre: ['Action', 'Adventure', 'Comedy'],
    rating: 8.1,
    image: 'https://picsum.photos/seed/sholay/400/600',
    description: 'After his family is murdered by a notorious and ruthless bandit, a retired police officer enlists the help of two outlaws to capture the bandit.',
    director: 'Ramesh Sippy',
    cast: ['Dharmendra', 'Sanjeev Kumar', 'Amitabh Bachchan'],
    runtime: '3h 24m',
    trailerUrl: 'https://www.youtube.com/embed/hLh_D6X4fG0'
  },
  {
    id: '14',
    title: 'Dilwale Dulhania Le Jayenge',
    year: 1995,
    genre: ['Drama', 'Musical', 'Romance'],
    rating: 8.0,
    image: 'https://picsum.photos/seed/ddlj/400/600',
    description: 'When Raj meets Simran in Europe, it isn\'t love at first sight but when Simran moves to India for an arranged marriage, love makes its presence felt.',
    director: 'Aditya Chopra',
    cast: ['Shah Rukh Khan', 'Kajol', 'Amrish Puri'],
    runtime: '3h 10m',
    trailerUrl: 'https://www.youtube.com/embed/c25GKl5VNeQ'
  },
  {
    id: '15',
    title: 'PK',
    year: 2014,
    genre: ['Comedy', 'Drama', 'Sci-Fi'],
    rating: 8.1,
    image: 'https://picsum.photos/seed/pk/400/600',
    description: 'An alien on Earth loses the only device he can use to communicate with his spaceship. His innocent nature and child-like questions force the country to evaluate the impact of religion on its people.',
    director: 'Rajkumar Hirani',
    cast: ['Aamir Khan', 'Anushka Sharma', 'Sanjay Dutt'],
    runtime: '2h 33m',
    trailerUrl: 'https://www.youtube.com/embed/82Z55nu75Gw'
  },
  {
    id: '16',
    title: 'Jawan',
    year: 2023,
    genre: ['Action', 'Thriller'],
    rating: 7.0,
    image: 'https://picsum.photos/seed/jawan/400/600',
    description: 'A high-octane action thriller which outlines the emotional journey of a man who is set to rectify the wrongs in the society.',
    director: 'Atlee',
    cast: ['Shah Rukh Khan', 'Nayanthara', 'Vijay Sethupathi'],
    runtime: '2h 49m',
    trailerUrl: 'https://www.youtube.com/embed/k8YiqM0Y-78'
  },
  {
    id: '7',
    title: 'Everything Everywhere All At Once',
    year: 2022,
    genre: ['Action', 'Adventure', 'Comedy'],
    rating: 7.8,
    image: 'https://picsum.photos/seed/eeao/400/600',
    description: 'A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes and connecting with the lives she could have led.',
    director: 'Daniel Kwan, Daniel Scheinert',
    cast: ['Michelle Yeoh', 'Stephanie Hsu', 'Ke Huy Quan'],
    runtime: '2h 19m',
    trailerUrl: 'https://www.youtube.com/embed/wxN1T1uxQ2g'
  },
  {
    id: '8',
    title: '3 Idiots',
    year: 2009,
    genre: ['Comedy', 'Drama'],
    rating: 8.4,
    image: 'https://picsum.photos/seed/3id/400/600',
    description: 'Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them "idiots".',
    director: 'Rajkumar Hirani',
    cast: ['Aamir Khan', 'Madhavan', 'Mona Singh'],
    runtime: '2h 50m',
    trailerUrl: 'https://www.youtube.com/embed/K0eDlFX9GMc'
  }
];
