
import { Movie } from "./movie-data";

const API_KEY = "c9e91d153ac4f4bd415d11ef1b92e5e5";
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const GENRES: Record<number, string> = {
  28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy", 80: "Crime", 
  99: "Documentary", 18: "Drama", 10751: "Family", 14: "Fantasy", 36: "History", 
  27: "Horror", 10402: "Music", 9648: "Mystery", 10749: "Romance", 878: "Sci-Fi", 
  10770: "TV Movie", 53: "Thriller", 10752: "War", 37: "Western"
};

const mapTMDBMovie = (item: any): Movie => ({
  id: `tmdb-${item.id}`,
  title: item.title || item.name || "Untitled",
  year: new Date(item.release_date || item.first_air_date || Date.now()).getFullYear(),
  genre: Array.from(new Set((item.genre_ids || []).map((id: number) => GENRES[id] || "Genre"))),
  rating: parseFloat(item.vote_average?.toFixed(1) || "0"),
  image: item.poster_path ? `${IMAGE_BASE_URL}${item.poster_path}` : "https://picsum.photos/seed/placeholder/400/600",
  description: item.overview || "No description available.",
  director: "Various",
  cast: [],
  runtime: "N/A",
  trailerUrl: "",
  type: item.media_type === "tv" ? "Series" : "Movie",
  imageHint: "movie poster"
});

export async function fetchTrending() {
  const res = await fetch(`${BASE_URL}/trending/all/week?api_key=${API_KEY}`);
  const data = await res.json();
  return (data.results || []).map(mapTMDBMovie);
}

export async function fetchTopRated() {
  const res = await fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`);
  const data = await res.json();
  return (data.results || []).map(mapTMDBMovie);
}

export async function fetchNewReleases() {
  const res = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`);
  const data = await res.json();
  return (data.results || []).map(mapTMDBMovie);
}

export async function searchMovies(query: string) {
  if (!query) return [];
  const res = await fetch(`${BASE_URL}/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
  const data = await res.json();
  return (data.results || []).map(mapTMDBMovie);
}
