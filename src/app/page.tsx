
"use client"

import * as React from "react"
import { Navbar } from "@/components/navbar"
import { MOVIES, Movie } from "@/lib/movie-data"
import { MovieCard } from "@/components/movie-card"
import { MovieDetailsModal } from "@/components/movie-details-modal"
import { ChatbotAssistant } from "@/components/chatbot-assistant"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, TrendingUp, Clock, Star } from "lucide-react"

export default function Home() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [selectedMovie, setSelectedMovie] = React.useState<Movie | null>(null)
  const [activeFilter, setActiveFilter] = React.useState("All")
  const [currentYear, setCurrentYear] = React.useState<number | null>(null)

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  const filters = ["All", "Action", "Sci-Fi", "Drama", "Crime", "Thriller"]

  const filteredMovies = MOVIES.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = activeFilter === "All" || movie.genre.includes(activeFilter)
    return matchesSearch && matchesFilter
  })

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onSearch={setSearchQuery} />
      
      <main className="flex-1 container mx-auto px-4 py-8 space-y-12">
        {/* Hero Section */}
        <section className="relative h-[400px] rounded-3xl overflow-hidden bg-muted group cursor-pointer">
          <img 
            src="https://picsum.photos/seed/cine1/1200/600" 
            alt="Hero Banner"
            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent flex flex-col justify-center px-12 space-y-4">
            <Badge className="w-fit bg-accent text-accent-foreground font-bold">FEATURING</Badge>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter">BEYOND <span className="text-accent">REALITY</span></h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              Explore the boundaries of the mind with our curated collection of mind-bending masterpieces.
            </p>
            <div className="flex gap-4 pt-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Explore Now
              </Button>
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
                Watch Trailer
              </Button>
            </div>
          </div>
        </section>

        {/* Discovery & Browsing */}
        <section className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-1">
              <h2 className="text-3xl font-bold flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-accent" /> Discover Movies
              </h2>
              <p className="text-muted-foreground">Find your next cinematic experience</p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {filters.map(filter => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "default" : "secondary"}
                  size="sm"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full px-6 ${activeFilter === filter ? 'bg-primary text-primary-foreground' : 'bg-muted/50'}`}
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {filteredMovies.map(movie => (
              <MovieCard 
                key={movie.id} 
                movie={movie} 
                onClick={(m) => setSelectedMovie(m)}
              />
            ))}
          </div>

          {filteredMovies.length === 0 && (
            <div className="text-center py-20 space-y-4">
              <p className="text-2xl font-bold text-muted-foreground">No movies found matching your criteria</p>
              <Button variant="link" onClick={() => {setSearchQuery(""); setActiveFilter("All")}}>
                Clear all filters
              </Button>
            </div>
          )}
        </section>

        {/* Trending Categories Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CardCategory title="Trending Now" icon={<TrendingUp className="w-5 h-5" />} color="text-accent" />
          <CardCategory title="Recently Added" icon={<Clock className="w-5 h-5" />} color="text-primary" />
          <CardCategory title="Top Rated" icon={<Star className="w-5 h-5" />} color="text-yellow-500" />
        </section>
      </main>

      <footer className="border-t bg-muted/20 py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <span className="text-2xl font-black tracking-tighter text-accent">CINEWAVE</span>
            <p className="text-sm text-muted-foreground">
              Your ultimate destination for discovering and experiencing the magic of cinema.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Platform</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>Browsing</li>
              <li>Subscription</li>
              <li>Devices</li>
              <li>Accessibility</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>Help Center</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Discord</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          © {currentYear || '...'} CineWave. All rights reserved.
        </div>
      </footer>

      <MovieDetailsModal 
        movie={selectedMovie} 
        isOpen={!!selectedMovie} 
        onClose={() => setSelectedMovie(null)} 
      />
      
      <ChatbotAssistant />
    </div>
  )
}

function CardCategory({ title, icon, color }: { title: string, icon: React.ReactNode, color: string }) {
  return (
    <div className="p-6 bg-card rounded-2xl border border-border/50 hover:border-accent/50 transition-colors cursor-pointer group">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-2 bg-muted rounded-xl ${color}`}>{icon}</div>
        <Badge variant="outline" className="opacity-0 group-hover:opacity-100 transition-opacity">Explore</Badge>
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm text-muted-foreground mt-1">Check out the latest from this category</p>
    </div>
  )
}
