
"use client"

import * as React from "react"
import { Movie } from "@/lib/movie-data"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Play } from "lucide-react"
import Image from "next/image"

interface MovieCardProps {
  movie: Movie
  onClick: (movie: Movie) => void
}

export function MovieCard({ movie, onClick }: MovieCardProps) {
  return (
    <Card 
      className="group relative overflow-hidden border-none bg-card cursor-pointer movie-card-hover"
      onClick={() => onClick(movie)}
    >
      <div className="relative aspect-[2/3] w-full">
        <Image
          src={movie.image}
          alt={movie.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
        
        {/* Hover overlay content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300">
            <Play className="w-8 h-8 text-accent-foreground fill-current" />
          </div>
        </div>

        <div className="absolute top-2 right-2">
          <Badge className="bg-black/60 backdrop-blur-md text-accent border-none flex items-center gap-1">
            <Star className="w-3 h-3 fill-accent" /> {movie.rating}
          </Badge>
        </div>
      </div>
      <CardContent className="p-4 space-y-2">
        <div className="flex justify-between items-start gap-2">
          <h3 className="font-bold text-lg leading-tight group-hover:text-accent transition-colors line-clamp-1">{movie.title}</h3>
        </div>
        <div className="flex flex-wrap gap-1">
          {movie.genre.slice(0, 2).map((g) => (
            <span key={g} className="text-[10px] uppercase tracking-wider text-muted-foreground">{g}</span>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">{movie.year}</p>
      </CardContent>
    </Card>
  )
}
