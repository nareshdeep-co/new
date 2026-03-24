
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
}

export const MOVIES: Movie[] = [
  // --- EXISTING ---
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
    trailerUrl: 'https://www.youtube.com/embed/YoHD9XEInc0',
    type: 'Movie'
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
    trailerUrl: 'https://www.youtube.com/embed/EXeTwQWrcwY',
    type: 'Movie'
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
    trailerUrl: 'https://www.youtube.com/embed/zSWdZVtXT7E',
    type: 'Movie'
  },
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
    trailerUrl: 'https://www.youtube.com/embed/f_vbAtFSEc0',
    type: 'Movie'
  },

  // --- NEW: ANIMATION ---
  {
    id: 'anim-1',
    title: 'Spider-Man: Across the Spider-Verse',
    year: 2023,
    genre: ['Animation', 'Action', 'Adventure'],
    rating: 8.7,
    image: 'https://picsum.photos/seed/spid/400/600',
    description: 'Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.',
    director: 'Joaquim Dos Santos',
    cast: ['Shameik Moore', 'Hailee Steinfeld', 'Oscar Isaac'],
    runtime: '2h 20m',
    trailerUrl: 'https://www.youtube.com/embed/shW9i6k8cB0',
    type: 'Animation'
  },
  {
    id: 'anim-2',
    title: 'Spirited Away',
    year: 2001,
    genre: ['Animation', 'Adventure', 'Family'],
    rating: 8.6,
    image: 'https://picsum.photos/seed/spirit/400/600',
    description: 'During her family\'s move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits.',
    director: 'Hayao Miyazaki',
    cast: ['Daveigh Chase', 'Suzanne Pleshette', 'Miyu Irino'],
    runtime: '2h 5m',
    trailerUrl: 'https://www.youtube.com/embed/ByXuk9QqQMC',
    type: 'Animation'
  },
  {
    id: 'anim-3',
    title: 'Arcane',
    year: 2021,
    genre: ['Animation', 'Action', 'Adventure'],
    rating: 9.0,
    image: 'https://picsum.photos/seed/arc/400/600',
    description: 'Set in utopian Piltover and the oppressed underground of Zaun, the story follows the origins of two iconic League champions-and the power that will tear them apart.',
    director: 'Pascal Charrue',
    cast: ['Hailee Steinfeld', 'Kevin Alejandro', 'Jason Spisak'],
    runtime: '40m (Episodes)',
    trailerUrl: 'https://www.youtube.com/embed/fXmAurh012s',
    type: 'Animation'
  },
  {
    id: 'anim-4',
    title: 'Soul',
    year: 2020,
    genre: ['Animation', 'Adventure', 'Comedy'],
    rating: 8.0,
    image: 'https://picsum.photos/seed/soul/400/600',
    description: 'After landing the gig of a lifetime, a New York jazz pianist suddenly finds himself trapped in a strange land between Earth and the afterlife.',
    director: 'Pete Docter',
    cast: ['Jamie Foxx', 'Tina Fey', 'Graham Norton'],
    runtime: '1h 40m',
    trailerUrl: 'https://www.youtube.com/embed/Gs_6_l0fGvU',
    type: 'Animation'
  },

  // --- NEW: SERIES ---
  {
    id: 'ser-1',
    title: 'Breaking Bad',
    year: 2008,
    genre: ['Series', 'Crime', 'Drama'],
    rating: 9.5,
    image: 'https://picsum.photos/seed/bb/400/600',
    description: 'A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family\'s future.',
    director: 'Vince Gilligan',
    cast: ['Bryan Cranston', 'Aaron Paul', 'Anna Gunn'],
    runtime: '45m (Episodes)',
    trailerUrl: 'https://www.youtube.com/embed/HhesaQXLuRY',
    type: 'Series'
  },
  {
    id: 'ser-2',
    title: 'Stranger Things',
    year: 2016,
    genre: ['Series', 'Drama', 'Fantasy'],
    rating: 8.7,
    image: 'https://picsum.photos/seed/st/400/600',
    description: 'When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.',
    director: 'The Duffer Brothers',
    cast: ['Millie Bobby Brown', 'Finn Wolfhard', 'Winona Ryder'],
    runtime: '50m (Episodes)',
    trailerUrl: 'https://www.youtube.com/embed/b9EkMc79ZSU',
    type: 'Series'
  },
  {
    id: 'ser-3',
    title: 'Game of Thrones',
    year: 2011,
    genre: ['Series', 'Action', 'Adventure'],
    rating: 9.2,
    image: 'https://picsum.photos/seed/got/400/600',
    description: 'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.',
    director: 'David Benioff',
    cast: ['Emilia Clarke', 'Peter Dinklage', 'Kit Harington'],
    runtime: '55m (Episodes)',
    trailerUrl: 'https://www.youtube.com/embed/bjqEWgDVPe0',
    type: 'Series'
  },
  {
    id: 'ser-4',
    title: 'The Boys',
    year: 2019,
    genre: ['Series', 'Action', 'Comedy'],
    rating: 8.7,
    image: 'https://picsum.photos/seed/boys/400/600',
    description: 'A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.',
    director: 'Eric Kripke',
    cast: ['Karl Urban', 'Jack Quaid', 'Antony Starr'],
    runtime: '1h (Episodes)',
    trailerUrl: 'https://www.youtube.com/embed/MN8fOxo0mU0',
    type: 'Series'
  },
  {
    id: 'ser-5',
    title: 'Succession',
    year: 2018,
    genre: ['Series', 'Drama'],
    rating: 8.9,
    image: 'https://picsum.photos/seed/succ/400/600',
    description: 'The Roy family is known for controlling the biggest media and entertainment company in the world. However, their world changes when their father steps down from the company.',
    director: 'Jesse Armstrong',
    cast: ['Brian Cox', 'Jeremy Strong', 'Sarah Snook'],
    runtime: '1h (Episodes)',
    trailerUrl: 'https://www.youtube.com/embed/OzY2IWl6Wsc',
    type: 'Series'
  },

  // --- NEW: BOLLYWOOD ---
  {
    id: 'bol-1',
    title: 'Gangs of Wasseypur',
    year: 2012,
    genre: ['Action', 'Crime', 'Drama'],
    rating: 8.2,
    image: 'https://picsum.photos/seed/wasse/400/600',
    description: 'A clash between Sultan and Shahid Khan leads to the expulsion of Khan from Wasseypur, and ignites a deadly blood feud spanning three generations.',
    director: 'Anurag Kashyap',
    cast: ['Manoj Bajpayee', 'Nawazuddin Siddiqui', 'Pankaj Tripathi'],
    runtime: '5h 21m',
    trailerUrl: 'https://www.youtube.com/embed/j-AkWDkXcMY',
    type: 'Movie'
  },
  {
    id: 'bol-2',
    title: 'Drishyam',
    year: 2015,
    genre: ['Crime', 'Drama', 'Thriller'],
    rating: 8.2,
    image: 'https://picsum.photos/seed/drish/400/600',
    description: 'Desperate measures are taken by a man who tries to save his family from the dark side of the law, after they commit an unexpected crime.',
    director: 'Nishikant Kamat',
    cast: ['Ajay Devgn', 'Shriya Saran', 'Tabu'],
    runtime: '2h 43m',
    trailerUrl: 'https://www.youtube.com/embed/AuuX2jY5mEw',
    type: 'Movie'
  },
  {
    id: 'bol-3',
    title: 'Tumbbad',
    year: 2018,
    genre: ['Drama', 'Fantasy', 'Horror'],
    rating: 8.2,
    image: 'https://picsum.photos/seed/tumb/400/600',
    description: 'A mythological story about a remote village where it always rains, and a family that builds a shrine for a cursed god of greed.',
    director: 'Rahi Anil Barve',
    cast: ['Sohum Shah', 'Jyoti Malshe', 'Anita Date'],
    runtime: '1h 44m',
    trailerUrl: 'https://www.youtube.com/embed/sN75MPxgvX8',
    type: 'Movie'
  },
  {
    id: 'bol-4',
    title: 'Andhadhun',
    year: 2018,
    genre: ['Comedy', 'Crime', 'Music'],
    rating: 8.2,
    image: 'https://picsum.photos/seed/andh/400/600',
    description: 'A series of mysterious events change the life of a blind pianist, who now must report a crime that he should not have seen.',
    director: 'Sriram Raghavan',
    cast: ['Ayushmann Khurrana', 'Tabu', 'Radhika Apte'],
    runtime: '2h 19m',
    trailerUrl: 'https://www.youtube.com/embed/2iVYI99VGaw',
    type: 'Movie'
  },

  // --- HOLLYWOOD ---
  {
    id: 'hol-1',
    title: 'Gladiator',
    year: 2000,
    genre: ['Action', 'Adventure', 'Drama'],
    rating: 8.5,
    image: 'https://picsum.photos/seed/glad/400/600',
    description: 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',
    director: 'Ridley Scott',
    cast: ['Russell Crowe', 'Joaquin Phoenix', 'Connie Nielsen'],
    runtime: '2h 35m',
    trailerUrl: 'https://www.youtube.com/embed/P5ieIbInFpg',
    type: 'Movie'
  },
  {
    id: 'hol-2',
    title: 'Parasite',
    year: 2019,
    genre: ['Drama', 'Thriller'],
    rating: 8.5,
    image: 'https://picsum.photos/seed/para/400/600',
    description: 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
    director: 'Bong Joon Ho',
    cast: ['Song Kang-ho', 'Lee Sun-kyun', 'Cho Yeo-jeong'],
    runtime: '2h 12m',
    trailerUrl: 'https://www.youtube.com/embed/5xH0HfJHsaY',
    type: 'Movie'
  },
  {
    id: 'hol-3',
    title: 'Fight Club',
    year: 1999,
    genre: ['Drama'],
    rating: 8.8,
    image: 'https://picsum.photos/seed/fight/400/600',
    description: 'An insomniac office worker and a devil-may-care shoemaker form an underground fight club that evolves into much more.',
    director: 'David Fincher',
    cast: ['Brad Pitt', 'Edward Norton', 'Meat Loaf'],
    runtime: '2h 19m',
    trailerUrl: 'https://www.youtube.com/embed/qtRKdVHc-cE',
    type: 'Movie'
  },
  {
    id: 'hol-4',
    title: 'Mad Max: Fury Road',
    year: 2015,
    genre: ['Action', 'Adventure', 'Sci-Fi'],
    rating: 8.1,
    image: 'https://picsum.photos/seed/max/400/600',
    description: 'In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the help of a group of female prisoners, a psychotic worshiper, and a drifter named Max.',
    director: 'George Miller',
    cast: ['Tom Hardy', 'Charlize Theron', 'Nicholas Hoult'],
    runtime: '2h 0m',
    trailerUrl: 'https://www.youtube.com/embed/hEJnMQG9ev8',
    type: 'Movie'
  }
];
