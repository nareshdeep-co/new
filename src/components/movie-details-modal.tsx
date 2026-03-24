
"use client"

import * as React from "react"
import { Movie } from "@/lib/movie-data"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, Star, Calendar, Clock, User } from "lucide-react"
import Image from "next/image"

interface MovieDetailsModalProps {
  movie: Movie | null
  isOpen: boolean
  onClose: () => void
}

export function MovieDetailsModal({ movie, isOpen, onClose }: MovieDetailsModalProps) {
  if (!movie) return null

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 border-none bg-background shadow-2xl">
        <div className="relative h-[300px] w-full">
          <Image
            src={movie.image}
            alt={movie.title}
            fill
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex items-end gap-6">
            <div className="relative h-48 w-32 flex-shrink-0 shadow-2xl hidden sm:block">
              <Image
                src={movie.image}
                alt={movie.title}
                fill
                className="object-cover rounded-lg border border-border"
              />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-2">
                {movie.genre.map((g) => (
                  <Badge key={g} variant="secondary" className="bg-primary/20 text-accent">
                    {g}
                  </Badge>
                ))}
              </div>
              <DialogTitle className="text-4xl font-bold mb-2">{movie.title}</DialogTitle>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {movie.year}</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {movie.runtime}</span>
                <span className="flex items-center gap-1 text-accent"><Star className="w-4 h-4 fill-accent" /> {movie.rating}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Synopsis</h3>
              <DialogDescription className="text-muted-foreground text-base leading-relaxed">
                {movie.description}
              </DialogDescription>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Trailer</h3>
              <div className="aspect-video w-full rounded-xl overflow-hidden bg-muted">
                <iframe
                  src={movie.trailerUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm uppercase tracking-wider text-muted-foreground font-semibold mb-3">Director</h3>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <User className="w-4 h-4 text-accent" />
                </div>
                <span>{movie.director}</span>
              </div>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-wider text-muted-foreground font-semibold mb-3">Top Cast</h3>
              <ul className="space-y-3">
                {movie.cast.map((actor) => (
                  <li key={actor} className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                      <User className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <span>{actor}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
              <Play className="w-4 h-4 mr-2 fill-current" /> Watch Now
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
