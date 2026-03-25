"use client"

import * as React from "react"
import { Navbar } from "@/components/navbar"
import { Movie } from "@/lib/movie-data"
import { MovieCard } from "@/components/movie-card"
import { MovieDetailsModal } from "@/components/movie-details-modal"
import { ChatbotAssistant } from "@/components/chatbot-assistant"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel"
import { Sparkles, TrendingUp, Clock, Star, PlayCircle, Loader2, ArrowDown } from "lucide-react"
import { fetchTrending, fetchTopRated, fetchNewReleases, searchMovies } from "@/lib/tmdb"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/hooks/use-toast"

export default function Home() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [selectedMovie, setSelectedMovie] = React.useState<Movie | null>(null)
  const [activeFilter, setActiveFilter] = React.useState("All")
  const [currentYear, setCurrentYear] = React.useState<number | null>(null)
  
  const [trending, setTrending] = React.useState<Movie[]>([])
  const [topRated, setTopRated] = React.useState<Movie[]>([])
  const [recent, setRecent] = React.useState<Movie[]>([])
  const [searchResults, setSearchResults] = React.useState<Movie[]>([])
  const [isLoading, setIsLoading] = React.useState(true)

  const discoveryRef = React.useRef<HTMLDivElement>(null)
  const { toast } = useToast()

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear())
    
    const loadInitialData = async () => {
      try {
        const [t, tr, n] = await Promise.all([
          fetchTrending(),
          fetchTopRated(),
          fetchNewReleases()
        ])
        setTrending(t)
        setTopRated(tr)
        setRecent(n)
      } catch (error) {
        console.error("Failed to fetch TMDB data:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadInitialData()
  }, [])

  React.useEffect(() => {
    const performSearch = async () => {
      if (searchQuery.trim()) {
        setIsLoading(true)
        const results = await searchMovies(searchQuery)
        setSearchResults(results)
        setIsLoading(false)
      } else {
        setSearchResults([])
      }
    }

    const timer = setTimeout(performSearch, 500)
    return () => clearTimeout(timer)
  }, [searchQuery])

  const scrollToDiscovery = () => {
    discoveryRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handlePremiumClick = () => {
    toast({
      title: "CineVerse Premium",
      description: "Unlock 4K streaming, offline downloads, and early access to new releases!",
    })
  }

  const filters = ["All", "Movie", "Series", "Animation", "Action", "Sci-Fi", "Drama", "Crime", "Thriller", "Adventure"]

  const displayMovies = searchQuery.trim() ? searchResults : trending

  const filteredMovies = displayMovies.filter(movie => {
    if (activeFilter === "All") return true
    if (activeFilter === "My List") return movie.rating > 8.5
    
    const matchesFilter = movie.genre.includes(activeFilter) || 
                          movie.type === activeFilter
    return matchesFilter
  })

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar 
        onSearch={setSearchQuery} 
        onFilterChange={setActiveFilter}
        activeFilter={activeFilter}
      />
      
      <main className="flex-1 container mx-auto px-4 py-8 space-y-16">
        {/* Hero Section */}
        <section className="relative h-[600px] rounded-[2.5rem] overflow-hidden bg-muted group shadow-2xl">
          <img 
            src="https://picsum.photos/seed/cine1/1200/600" 
            alt="Hero Banner"
            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
            data-ai-hint="cinematic landscape"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent flex flex-col justify-center px-8 md:px-16 space-y-6">
            <Badge 
              className="w-fit bg-accent text-accent-foreground font-bold px-4 py-1 cursor-pointer hover:scale-105 transition-transform"
              onClick={handlePremiumClick}
            >
              PREMIUM FEATURE
            </Badge>
            <div className="space-y-2">
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
                CINE<span className="text-accent">VERSE</span>
              </h1>
              <p className="text-xl md:text-2xl font-medium text-accent/80 tracking-wide uppercase">Your Cinematic Odyssey Starts Here</p>
            </div>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Experience the best of Hollywood, Bollywood, and beyond. Real-time data powered by TMDB and tailored to your unique taste.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-14 text-lg font-bold shadow-lg shadow-primary/20"
                onClick={scrollToDiscovery}
              >
                Explore Now <ArrowDown className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-accent/50 text-accent hover:bg-accent/10 rounded-full px-8 h-14 text-lg font-bold"
                onClick={() => {
                  if (trending[0]) setSelectedMovie(trending[0])
                }}
              >
                <PlayCircle className="w-5 h-5 mr-2" /> Watch Trailer
              </Button>
            </div>
          </div>
        </section>

        {isLoading && !trending.length ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <Loader2 className="w-10 h-10 animate-spin text-accent" />
            <p className="text-muted-foreground animate-pulse">Initializing your Cinematic Universe...</p>
          </div>
        ) : (
          <>
            {!searchQuery && activeFilter === "All" && (
              <>
                <MovieSection 
                  title="Trending This Week" 
                  movies={trending} 
                  icon={<TrendingUp className="w-6 h-6 text-accent" />} 
                  onMovieClick={setSelectedMovie}
                />

                <MovieSection 
                  title="Top Rated Classics" 
                  movies={topRated} 
                  icon={<Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />} 
                  onMovieClick={setSelectedMovie}
                />

                <MovieSection 
                  title="New Releases" 
                  movies={recent} 
                  icon={<Clock className="w-6 h-6 text-primary" />} 
                  onMovieClick={setSelectedMovie}
                />
              </>
            )}

            {/* Discovery & Browsing Grid */}
            <section ref={discoveryRef} className="space-y-8 pt-8 scroll-mt-24">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-2">
                  <h2 className="text-4xl font-black tracking-tight flex items-center gap-3">
                    <Sparkles className="w-8 h-8 text-accent animate-pulse" /> 
                    {searchQuery ? `SEARCH RESULTS FOR "${searchQuery.toUpperCase()}"` : activeFilter !== "All" ? `EXPLORE ${activeFilter.toUpperCase()}` : "EXPLORE ALL"}
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    {searchQuery ? "Found in our live cinematic database" : "Browse our entire universe of content"}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {filters.map(filter => (
                    <Button
                      key={filter}
                      variant={activeFilter === filter ? "default" : "secondary"}
                      size="sm"
                      onClick={() => setActiveFilter(filter)}
                      className={`rounded-full px-6 transition-all duration-300 ${
                        activeFilter === filter 
                        ? 'bg-primary text-primary-foreground scale-105 shadow-lg shadow-primary/30' 
                        : 'bg-muted/50 hover:bg-muted'
                      }`}
                    >
                      {filter}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                {filteredMovies.map(movie => (
                  <MovieCard 
                    key={movie.id} 
                    movie={movie} 
                    onClick={(m) => setSelectedMovie(m)}
                  />
                ))}
              </div>

              {filteredMovies.length === 0 && !isLoading && (
                <div className="text-center py-32 space-y-6 bg-muted/20 rounded-3xl border border-dashed border-border">
                  <div className="text-6xl">🎬</div>
                  <div className="space-y-2">
                    <p className="text-2xl font-bold">No results found</p>
                    <p className="text-muted-foreground">Try adjusting your filters or search terms</p>
                  </div>
                  <Button variant="outline" className="rounded-full" onClick={() => {setSearchQuery(""); setActiveFilter("All")}}>
                    Clear all filters
                  </Button>
                </div>
              )}
            </section>
          </>
        )}
      </main>

      <footer className="border-t bg-muted/20 py-20 mt-20">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <PlayCircle className="w-8 h-8 text-primary" />
              <span className="text-3xl font-black tracking-tighter text-accent">CINEVERSE</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              The premier destination for cinematic excellence. Discover thousands of titles from across the globe with our live TMDB-powered discovery engine.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Discovery</h4>
            <ul className="text-muted-foreground space-y-4">
              <li className="hover:text-accent cursor-pointer transition-colors" onClick={() => { setActiveFilter("Movie"); scrollToDiscovery(); }}>Popular Movies</li>
              <li className="hover:text-accent cursor-pointer transition-colors" onClick={() => { setActiveFilter("Series"); scrollToDiscovery(); }}>TV Series</li>
              <li className="hover:text-accent cursor-pointer transition-colors" onClick={() => { setActiveFilter("Animation"); scrollToDiscovery(); }}>Animations</li>
              <li className="hover:text-accent cursor-pointer transition-colors" onClick={() => { setActiveFilter("All"); scrollToDiscovery(); }}>New Releases</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Account</h4>
            <ul className="text-muted-foreground space-y-4">
              <li className="hover:text-accent cursor-pointer transition-colors" onClick={handlePremiumClick}>Subscription</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Manage Profile</li>
              <li className="hover:text-accent cursor-pointer transition-colors" onClick={() => { setActiveFilter("My List"); scrollToDiscovery(); }}>My Watchlist</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Devices</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Support</h4>
            <ul className="text-muted-foreground space-y-4">
              <li className="hover:text-accent cursor-pointer transition-colors">Help Center</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Terms of Use</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-20 pt-8 border-t border-border/50 text-center text-muted-foreground">
          <p>© {currentYear || '...'} CineVerse Entertainment Inc. Powered by TMDB API.</p>
        </div>
      </footer>

      <MovieDetailsModal 
        movie={selectedMovie} 
        isOpen={!!selectedMovie} 
        onClose={() => setSelectedMovie(null)} 
      />
      
      <ChatbotAssistant />
      <Toaster />
    </div>
  )
}

interface MovieSectionProps {
  title: string
  movies: Movie[]
  icon: React.ReactNode
  onMovieClick: (movie: Movie) => void
}

function MovieSection({ title, movies, icon, onMovieClick }: MovieSectionProps) {
  if (movies.length === 0) return null

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-muted rounded-xl">
            {icon}
          </div>
          <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
        </div>
        <Button variant="ghost" className="text-accent hover:text-accent hover:bg-accent/10">
          View All
        </Button>
      </div>
      
      <Carousel
        opts={{
          align: "start",
          loop: movies.length > 5,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {movies.map((movie) => (
            <CarouselItem key={movie.id} className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6">
              <MovieCard 
                movie={movie} 
                onClick={() => onMovieClick(movie)}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious className="-left-6 bg-background/80 backdrop-blur-sm border-accent/20 hover:bg-accent hover:text-accent-foreground" />
          <CarouselNext className="-right-6 bg-background/80 backdrop-blur-sm border-accent/20 hover:bg-accent hover:text-accent-foreground" />
        </div>
      </Carousel>
    </section>
  )
}
