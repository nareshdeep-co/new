
"use client"

import * as React from "react"
import { Search, Film, Menu, Bell, User } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface NavbarProps {
  onSearch: (query: string) => void
}

export function Navbar({ onSearch }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="p-2 bg-primary rounded-lg group-hover:bg-primary/80 transition-colors">
              <Film className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-accent">CINEWAVE</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button suppressHydrationWarning className="text-sm font-medium hover:text-accent transition-colors">Movies</button>
            <button suppressHydrationWarning className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">Series</button>
            <button suppressHydrationWarning className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">Animation</button>
            <button suppressHydrationWarning className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">My List</button>
          </div>
        </div>

        <div className="flex-1 max-w-md relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Search movies by title..." 
            className="pl-10 bg-muted/50 border-none focus-visible:ring-1 focus-visible:ring-accent"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="sm:hidden">
            <Search className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Bell className="w-5 h-5" />
          </Button>
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/40 cursor-pointer overflow-hidden">
            <User className="w-5 h-5 text-accent" />
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  )
}
