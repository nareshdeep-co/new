"use client"

import * as React from "react"
import { Search, Bell, User, Settings, CreditCard, LogOut, Clapperboard, Sparkles, Menu, Info } from "lucide-react"
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
import { useToast } from "@/hooks/use-toast"

interface NavbarProps {
  onSearch: (query: string) => void
  onFilterChange: (filter: string) => void
  activeFilter: string
}

export function Navbar({ onSearch, onFilterChange, activeFilter }: NavbarProps) {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false)
  const { toast } = useToast()

  const navItems = [
    { name: "Movies", filter: "Movie" },
    { name: "Series", filter: "Series" },
    { name: "Animation", filter: "Animation" },
    { name: "My List", filter: "My List" },
  ]

  const notifications = [
    { id: 1, title: "New Release", message: "Oppenheimer is now streaming!", time: "2h ago" },
    { id: 2, title: "Subscription", message: "Your premium trial ends in 3 days.", time: "5h ago" },
    { id: 3, title: "Trending", message: "RRR is trending in your region.", time: "1d ago" },
  ]

  const handleMyListClick = () => {
    onFilterChange("My List")
    toast({
      title: "My List Filtered",
      description: "Showing your saved cinematic masterpieces.",
    })
  }

  return (
    <nav className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 group cursor-pointer" 
            onClick={() => {
              onFilterChange("All")
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
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

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button 
                key={item.name}
                onClick={() => item.filter === "My List" ? handleMyListClick() : onFilterChange(item.filter)}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  activeFilter === item.filter ? 'text-accent' : 'text-muted-foreground'
                }`}
              >
                {item.name}
              </button>
            ))}
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

          {/* Functional Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full border border-background" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80 bg-card border-border shadow-xl p-0 overflow-hidden">
              <DropdownMenuLabel className="font-bold text-lg p-4 bg-muted/30">Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator className="m-0" />
              <div className="max-h-[300px] overflow-y-auto">
                {notifications.map((n) => (
                  <div key={n.id} className="p-4 hover:bg-accent/5 cursor-pointer border-b last:border-0 transition-colors">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-semibold text-sm">{n.title}</span>
                      <span className="text-[10px] text-muted-foreground uppercase">{n.time}</span>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2">{n.message}</p>
                  </div>
                ))}
              </div>
              <div className="p-2 border-t text-center">
                <Button variant="ghost" size="sm" className="w-full text-accent text-xs">View all notifications</Button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          
          {/* Profile Button */}
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
