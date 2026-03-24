
import placeholderData from '@/app/lib/placeholder-images.json';

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
  type?: 'Movie' | 'Series' | 'Animation';
  imageHint?: string;
}

const getPlaceholder = (id: string) => {
  const img = placeholderData.placeholderImages.find(p => p.id === id);
  return {
    url: img?.imageUrl || `https://picsum.photos/seed/${id}/400/600`,
    hint: img?.imageHint || 'movie'
  };
};

export const MOVIES: Movie[] = [
  {
    id: '1',
    title: 'Inception',
    year: 2010,
    genre: ['Action', 'Sci-Fi', 'Thriller'],
    rating: 8.8,
    image: getPlaceholder('inception').url,
    imageHint: getPlaceholder('inception').hint,
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    director: 'Christopher Nolan',
    cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page'],
    runtime: '2h 28m',
    trailerUrl: 'https://www.youtube.com/embed/YoHD9XEInc0',
    type: 'Movie'
  },
  {
    id: '2',
    title: 'The Dark Knight',
    year: 2008,
    genre: ['Action', 'Crime', 'Drama'],
    rating: 9.0,
    image: getPlaceholder('dark-knight').url,
    imageHint: getPlaceholder('dark-knight').hint,
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    director: 'Christopher Nolan',
    cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
    runtime: '2h 32m',
    trailerUrl: 'https://www.youtube.com/embed/EXeTwQWrcwY',
    type: 'Movie'
  },
  {
    id: '3',
    title: 'Interstellar',
    year: 2014,
    genre: ['Adventure', 'Drama', 'Sci-Fi'],
    rating: 8.7,
    image: getPlaceholder('interstellar').url,
    imageHint: getPlaceholder('interstellar').hint,
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    director: 'Christopher Nolan',
    cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
    runtime: '2h 49m',
    trailerUrl: 'https://www.youtube.com/embed/zSWdZVtXT7E',
    type: 'Movie'
  },
  {
    id: '4',
    title: 'RRR',
    year: 2022,
    genre: ['Action', 'Drama'],
    rating: 7.8,
    image: getPlaceholder('rrr').url,
    imageHint: getPlaceholder('rrr').hint,
    description: 'A fictitious story about two legendary revolutionaries and their journey away from home before they started fighting for their country in 1920s.',
    director: 'S. S. Rajamouli',
    cast: ['N. T. Rama Rao Jr.', 'Ram Charan', 'Ajay Devgn'],
    runtime: '3h 7m',
    trailerUrl: 'https://www.youtube.com/embed/f_vbAtFSEc0',
    type: 'Movie'
  },
  {
    id: 'hol-1',
    title: 'The Matrix',
    year: 1999,
    genre: ['Action', 'Sci-Fi'],
    rating: 8.7,
    image: getPlaceholder('matrix').url,
    imageHint: getPlaceholder('matrix').hint,
    description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    director: 'Lana Wachowski',
    cast: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
    runtime: '2h 16m',
    trailerUrl: 'https://www.youtube.com/embed/m8e-FF8MsqU',
    type: 'Movie'
  },
  {
    id: 'hol-2',
    title: 'The Godfather',
    year: 1972,
    genre: ['Crime', 'Drama'],
    rating: 9.2,
    image: getPlaceholder('godfather').url,
    imageHint: getPlaceholder('godfather').hint,
    description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    director: 'Francis Ford Coppola',
    cast: ['Marlon Brando', 'Al Pacino', 'James Caan'],
    runtime: '2h 55m',
    trailerUrl: 'https://www.youtube.com/embed/sY1S34973zA',
    type: 'Movie'
  },
  {
    id: 'hol-3',
    title: 'Pulp Fiction',
    year: 1994,
    genre: ['Crime', 'Drama'],
    rating: 8.9,
    image: getPlaceholder('pulp-fiction').url,
    imageHint: getPlaceholder('pulp-fiction').hint,
    description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    director: 'Quentin Tarantino',
    cast: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson'],
    runtime: '2h 34m',
    trailerUrl: 'https://www.youtube.com/embed/s7EdQ4FqbhY',
    type: 'Movie'
  },
  {
    id: 'hol-4',
    title: 'Dune: Part Two',
    year: 2024,
    genre: ['Action', 'Adventure', 'Sci-Fi'],
    rating: 8.9,
    image: getPlaceholder('dune').url,
    imageHint: getPlaceholder('dune').hint,
    description: 'Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family.',
    director: 'Denis Villeneuve',
    cast: ['Timothée Chalamet', 'Zendaya', 'Rebecca Ferguson'],
    runtime: '2h 46m',
    trailerUrl: 'https://www.youtube.com/embed/Way9Dexny3w',
    type: 'Movie'
  },
  {
    id: 'hol-5',
    title: 'Oppenheimer',
    year: 2023,
    genre: ['Biography', 'Drama', 'History'],
    rating: 8.4,
    image: getPlaceholder('oppenheimer').url,
    imageHint: getPlaceholder('oppenheimer').hint,
    description: 'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.',
    director: 'Christopher Nolan',
    cast: ['Cillian Murphy', 'Emily Blunt', 'Matt Damon'],
    runtime: '3h 0m',
    trailerUrl: 'https://www.youtube.com/embed/uYPbbksJxIg',
    type: 'Movie'
  },
  {
    id: 'bol-1',
    title: 'Lagaan',
    year: 2001,
    genre: ['Drama', 'Musical', 'Sport'],
    rating: 8.1,
    image: getPlaceholder('lagaan').url,
    imageHint: getPlaceholder('lagaan').hint,
    description: 'The people of a small village in Victorian India stake their future on a game of cricket against their ruthless British rulers.',
    director: 'Ashutosh Gowariker',
    cast: ['Aamir Khan', 'Raghuvir Yadav', 'Gracy Singh'],
    runtime: '3h 44m',
    trailerUrl: 'https://www.youtube.com/embed/N6B-zZ0N1n4',
    type: 'Movie'
  },
  {
    id: 'bol-2',
    title: '3 Idiots',
    year: 2009,
    genre: ['Comedy', 'Drama'],
    rating: 8.4,
    image: getPlaceholder('3-idiots').url,
    imageHint: getPlaceholder('3-idiots').hint,
    description: 'Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently.',
    director: 'Rajkumar Hirani',
    cast: ['Aamir Khan', 'Madhavan', 'Sharman Joshi'],
    runtime: '2h 50m',
    trailerUrl: 'https://www.youtube.com/embed/K0EWCBAenQI',
    type: 'Movie'
  },
  {
    id: 'bol-3',
    title: 'Dangal',
    year: 2016,
    genre: ['Action', 'Biography', 'Drama'],
    rating: 8.3,
    image: getPlaceholder('dangal').url,
    imageHint: getPlaceholder('dangal').hint,
    description: 'Former wrestler Mahavir Singh Phogat and his two wrestler daughters struggle towards glory at the Commonwealth Games in the face of societal oppression.',
    director: 'Nitesh Tiwari',
    cast: ['Aamir Khan', 'Sakshi Tanwar', 'Fatima Sana Shaikh'],
    runtime: '2h 41m',
    trailerUrl: 'https://www.youtube.com/embed/x_7YlGv9u1g',
    type: 'Movie'
  },
  {
    id: 'bol-4',
    title: 'Sholay',
    year: 1975,
    genre: ['Action', 'Adventure', 'Comedy'],
    rating: 8.1,
    image: getPlaceholder('sholay').url,
    imageHint: getPlaceholder('sholay').hint,
    description: 'After his family is murdered by a notorious and ruthless bandit, a retired police officer enlists the help of two outlaws to capture him.',
    director: 'Ramesh Sippy',
    cast: ['Dharmendra', 'Sanjeev Kumar', 'Hema Malini'],
    runtime: '3h 24m',
    trailerUrl: 'https://www.youtube.com/embed/N6B-zZ0N1n4',
    type: 'Movie'
  },
  {
    id: 'ser-1',
    title: 'Breaking Bad',
    year: 2008,
    genre: ['Series', 'Crime', 'Drama'],
    rating: 9.5,
    image: getPlaceholder('breaking-bad').url,
    imageHint: getPlaceholder('breaking-bad').hint,
    description: 'A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine.',
    director: 'Vince Gilligan',
    cast: ['Bryan Cranston', 'Aaron Paul', 'Anna Gunn'],
    runtime: '45m',
    trailerUrl: 'https://www.youtube.com/embed/HhesaQXLuRY',
    type: 'Series'
  },
  {
    id: 'ser-2',
    title: 'The Last of Us',
    year: 2023,
    genre: ['Series', 'Action', 'Adventure'],
    rating: 8.8,
    image: getPlaceholder('last-of-us').url,
    imageHint: getPlaceholder('last-of-us').hint,
    description: 'After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity\'s last hope.',
    director: 'Craig Mazin',
    cast: ['Pedro Pascal', 'Bella Ramsey'],
    runtime: '50m',
    trailerUrl: 'https://www.youtube.com/embed/uLtkt8BonwM',
    type: 'Series'
  },
  {
    id: 'ser-3',
    title: 'The Bear',
    year: 2022,
    genre: ['Series', 'Comedy', 'Drama'],
    rating: 8.6,
    image: getPlaceholder('the-bear').url,
    imageHint: getPlaceholder('the-bear').hint,
    description: 'A young chef from the fine dining world comes home to Chicago to run his family sandwich shop.',
    director: 'Christopher Storer',
    cast: ['Jeremy Allen White', 'Ebon Moss-Bachrach'],
    runtime: '30m',
    trailerUrl: 'https://www.youtube.com/embed/gBPlu0h_o9M',
    type: 'Series'
  },
  {
    id: 'anim-1',
    title: 'Spider-Man: Across the Spider-Verse',
    year: 2023,
    genre: ['Animation', 'Action', 'Adventure'],
    rating: 8.7,
    image: getPlaceholder('spider-verse').url,
    imageHint: getPlaceholder('spider-verse').hint,
    description: 'Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.',
    director: 'Joaquim Dos Santos',
    cast: ['Shameik Moore', 'Hailee Steinfeld'],
    runtime: '2h 20m',
    trailerUrl: 'https://www.youtube.com/embed/shW9i6k8cB0',
    type: 'Animation'
  },
  {
    id: 'anim-2',
    title: 'Toy Story',
    year: 1995,
    genre: ['Animation', 'Adventure', 'Comedy'],
    rating: 8.3,
    image: getPlaceholder('toy-story').url,
    imageHint: getPlaceholder('toy-story').hint,
    description: 'A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy\'s room.',
    director: 'John Lasseter',
    cast: ['Tom Hanks', 'Tim Allen'],
    runtime: '1h 21m',
    trailerUrl: 'https://www.youtube.com/embed/v-PjgYDrg70',
    type: 'Animation'
  },
  {
    id: 'anim-3',
    title: 'The Lion King',
    year: 1994,
    genre: ['Animation', 'Adventure', 'Drama'],
    rating: 8.5,
    image: getPlaceholder('lion-king').url,
    imageHint: getPlaceholder('lion-king').hint,
    description: 'Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.',
    director: 'Roger Allers',
    cast: ['Matthew Broderick', 'Jeremy Irons'],
    runtime: '1h 28m',
    trailerUrl: 'https://www.youtube.com/embed/lFzVjeohZg0',
    type: 'Animation'
  },
  // Adding more Hollywood Blockbusters
  {
    id: 'hol-6',
    title: 'Barbie',
    year: 2023,
    genre: ['Adventure', 'Comedy', 'Fantasy'],
    rating: 6.9,
    image: getPlaceholder('barbie').url,
    imageHint: getPlaceholder('barbie').hint,
    description: 'Barbie suffers a crisis that leads her to question her world and her existence.',
    director: 'Greta Gerwig',
    cast: ['Margot Robbie', 'Ryan Gosling'],
    runtime: '1h 54m',
    trailerUrl: 'https://www.youtube.com/embed/pBk4NYhWNMM',
    type: 'Movie'
  },
  {
    id: 'hol-7',
    title: 'Joker',
    year: 2019,
    genre: ['Crime', 'Drama', 'Thriller'],
    rating: 8.4,
    image: getPlaceholder('joker').url,
    imageHint: getPlaceholder('joker').hint,
    description: 'A mentally troubled comedian is disregarded and mistreated by society, embarking on a downward spiral of revolution and bloody crime.',
    director: 'Todd Phillips',
    cast: ['Joaquin Phoenix', 'Robert De Niro'],
    runtime: '2h 2m',
    trailerUrl: 'https://www.youtube.com/embed/zAGVQLHvwOY',
    type: 'Movie'
  },
  {
    id: 'hol-8',
    title: 'Avengers: Endgame',
    year: 2019,
    genre: ['Action', 'Adventure', 'Drama'],
    rating: 8.4,
    image: getPlaceholder('avengers').url,
    imageHint: getPlaceholder('avengers').hint,
    description: 'After the devastating events of Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more.',
    director: 'Anthony Russo',
    cast: ['Robert Downey Jr.', 'Chris Evans'],
    runtime: '3h 1m',
    trailerUrl: 'https://www.youtube.com/embed/TcMBFSGVi1c',
    type: 'Movie'
  },
  // Adding more Bollywood Hits
  {
    id: 'bol-5',
    title: 'Bajirao Mastani',
    year: 2015,
    genre: ['Action', 'Drama', 'History'],
    rating: 7.2,
    image: getPlaceholder('bajirao').url,
    imageHint: 'royal palace',
    description: 'The heroic Peshwa Bajirao, married to Kashibai, falls in love with Mastani, a warrior princess in distress.',
    director: 'Sanjay Leela Bhansali',
    cast: ['Ranveer Singh', 'Deepika Padukone', 'Priyanka Chopra'],
    runtime: '2h 38m',
    trailerUrl: 'https://www.youtube.com/embed/eHOc-4D7MjY',
    type: 'Movie'
  },
  {
    id: 'bol-6',
    title: 'Queen',
    year: 2013,
    genre: ['Adventure', 'Comedy', 'Drama'],
    rating: 8.1,
    image: getPlaceholder('queen').url,
    imageHint: 'paris street',
    description: 'A Delhi girl from a traditional family sets out on a solo honeymoon after her marriage is cancelled.',
    director: 'Vikas Bahl',
    cast: ['Kangana Ranaut', 'Rajkummar Rao'],
    runtime: '2h 26m',
    trailerUrl: 'https://www.youtube.com/embed/KGC6vl3lzf0',
    type: 'Movie'
  },
  {
    id: 'bol-7',
    title: 'Zindagi Na Milegi Dobara',
    year: 2011,
    genre: ['Comedy', 'Drama'],
    rating: 8.2,
    image: getPlaceholder('znmd').url,
    imageHint: 'spain roadtrip',
    description: 'Three friends decide to turn their fantasy vacation into reality after one of them gets engaged.',
    director: 'Zoya Akhtar',
    cast: ['Hrithik Roshan', 'Farhan Akhtar', 'Abhay Deol'],
    runtime: '2h 35m',
    trailerUrl: 'https://www.youtube.com/embed/ifIBOKCfjVs',
    type: 'Movie'
  },
  // Generic placeholders to reach volume
  ...Array.from({ length: 40 }).map((_, i) => ({
    id: `extra-${i}`,
    title: `Cinematic Gem ${i + 1}`,
    year: 2020 - Math.floor(i / 5),
    genre: ['Drama', 'Thriller'],
    rating: 7.5 + (i % 10) / 10,
    image: `https://picsum.photos/seed/extra${i}/400/600`,
    imageHint: 'cinematic scene',
    description: 'An immersive cinematic journey through the unknown, featuring a stellar cast and breathtaking visuals.',
    director: 'Various Artists',
    cast: ['Actor A', 'Actor B'],
    runtime: '2h 15m',
    trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    type: (i % 3 === 0 ? 'Series' : i % 3 === 1 ? 'Animation' : 'Movie') as any
  }))
];
