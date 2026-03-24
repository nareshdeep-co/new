"use client"

import * as React from "react"
import { Search, Film, Menu, Bell, User, Settings, CreditCard, LogOut, Clapperboard, Sparkles } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface NavbarProps {
  onSearch: (query: string) => void
}

export function Navbar({ onSearch }: NavbarProps) {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false)

  return (
    <nav className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          {/* Enhanced Premium Logo */}
          <div 
            className="flex items-center gap-3 group cursor-pointer" 
            onClick={() => window.location.reload()}
          >
            <div className="relative">
              <div className="p-2 bg-gradient-to-br from-primary to-accent rounded-xl shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                <Clapperboard className="w-6 h-6 text-white" />
              </div>
              <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400 animate-pulse" />
            </div>
            <span className="text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-accent to-primary">
              CINE<span className="text-accent">VERSE</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button className="text-sm font-medium hover:text-accent transition-colors">Movies</button>
            <button className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">Series</button>
            <button className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">Animation</button>
            <button className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">My List</button>
          </div>
        </div>

        <div className={`flex-1 max-w-md relative ${isSearchOpen ? 'block absolute inset-x-0 mx-4 bg-background z-50' : 'hidden sm:block'}`}>
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Search movies by title..." 
            className="pl-10 bg-muted/50 border-none focus-visible:ring-1 focus-visible:ring-accent"
            onChange={(e) => onSearch(e.target.value)}
            autoFocus={isSearchOpen}
          />
          {isSearchOpen && (
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-1 top-1/2 -translate-y-1/2 sm:hidden"
              onClick={() => setIsSearchOpen(false)}
            >
              <Menu className="w-4 h-4 rotate-45" />
            </Button>
          )}
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <Button variant="ghost" size="icon" className="sm:hidden" onClick={() => setIsSearchOpen(!isSearchOpen)}>
            <Search className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full border border-background" />
          </Button>
          
          {/* Functional Profile Button */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20 flex items-center justify-center border border-accent/20 cursor-pointer hover:border-accent/50 hover:bg-primary/10 transition-all overflow-hidden">
                <User className="w-5 h-5 text-accent" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-card border-border shadow-xl">
              <DropdownMenuLabel className="font-bold text-lg p-3">My Account</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-border/50" />
              <DropdownMenuItem className="p-3 cursor-pointer focus:bg-accent focus:text-accent-foreground">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-3 cursor-pointer focus:bg-accent focus:text-accent-foreground">
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Subscription</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-3 cursor-pointer focus:bg-accent focus:text-accent-foreground">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-border/50" />
              <DropdownMenuItem className="p-3 cursor-pointer text-destructive focus:bg-destructive focus:text-destructive-foreground">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  )
}