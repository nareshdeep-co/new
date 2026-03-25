"use client"

import * as React from "react"
import { MessageSquare, Send, X, Bot, Sparkles, Film, HelpCircle, Zap, BrainCircuit } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { movieQuestionAnswering } from "@/ai/flows/movie-question-answering"
import { getMovieRecommendations } from "@/ai/flows/movie-recommendation"
import { getPlotSummary } from "@/ai/flows/plot-summarization-flow"

type Message = {
  id: string
  role: 'user' | 'assistant'
  content: string
}

export function ChatbotAssistant() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [input, setInput] = React.useState('')
  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hi! I'm CineVerse AI, your personal cinematic guide. Ask me about directors, plot twists, or for a recommendation tailored to your mood!"
    }
  ])
  const [isLoading, setIsLoading] = React.useState(false)
  const scrollRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (scrollRef.current) {
      const scrollArea = scrollRef.current.querySelector('[data-radix-scroll-area-viewport]')
      if (scrollArea) {
        scrollArea.scrollTop = scrollArea.scrollHeight
      }
    }
  }, [messages, isLoading])

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: input }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setIsLoading(true)

    try {
      let response = "I'm sorry, I couldn't process that request. My cinematic database seems to be flickering."
      
      const lowerInput = input.toLowerCase()
      
      if (lowerInput.includes('recommend') || lowerInput.includes('suggest')) {
        const recs = await getMovieRecommendations({ preferences: input })
        response = `I've curated these recommendations for you:\n\n` + 
          recs.map(r => `• **${r.title}** (${r.year}): ${r.reasonForRecommendation}`).join('\n')
      } else if (lowerInput.includes('summary') || lowerInput.includes('plot of')) {
        const movieTitle = input.replace(/summarize|summary of|plot of/gi, '').trim()
        const summaryRes = await getPlotSummary({ movieTitle })
        response = summaryRes.summary
      } else {
        const qaRes = await movieQuestionAnswering({ question: input })
        response = qaRes.answer
      }

      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: 'assistant', content: response }])
    } catch (error) {
      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: 'assistant', content: "Oops, something went wrong with my cinematic database." }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <Card className="w-80 sm:w-96 shadow-2xl border-primary/20 bg-card/95 backdrop-blur-xl overflow-hidden animate-in slide-in-from-bottom-4 zoom-in-95 duration-300">
          <CardHeader className="bg-gradient-to-r from-primary via-primary/90 to-accent p-4 flex flex-row items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -top-1 -right-1">
                  <Sparkles className="w-3 h-3 text-yellow-400 animate-pulse" />
                </div>
              </div>
              <div>
                <CardTitle className="text-lg text-white font-black tracking-tight leading-none">CINEVERSE AI</CardTitle>
                <p className="text-[10px] text-white/70 font-medium uppercase tracking-widest mt-1">Advanced Neural Guide</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-white hover:bg-white/10 rounded-full h-8 w-8">
              <X className="w-4 h-4" />
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-96 p-4" ref={scrollRef}>
              <div className="space-y-4 pb-4">
                {messages.map((m) => (
                  <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                      m.role === 'user' 
                        ? 'bg-accent text-accent-foreground rounded-tr-none font-medium' 
                        : 'bg-muted/80 text-foreground rounded-tl-none border border-border/50'
                    }`}>
                      {m.content.split('\n').map((line, i) => (
                        <p key={i} className={line.startsWith('•') ? 'ml-2 mb-2 last:mb-0' : 'mb-2 last:mb-0'}>{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-muted/50 p-4 rounded-2xl rounded-tl-none flex items-center gap-2 border border-border/30">
                      <div className="flex gap-1">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce [animation-delay:-0.3s]" />
                        <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce [animation-delay:-0.15s]" />
                        <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce" />
                      </div>
                      <span className="text-xs text-muted-foreground font-medium">Analyzing...</span>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
          </CardContent>
          <CardFooter className="p-4 pt-0 border-t border-border/50 bg-muted/20">
            <div className="flex w-full items-center gap-2 pt-4">
              <div className="relative flex-1">
                <Input 
                  placeholder="Ask me anything..." 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  className="bg-background/50 border-border focus-visible:ring-1 focus-visible:ring-accent h-11 pr-10 rounded-xl"
                />
                <BrainCircuit className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/30" />
              </div>
              <Button 
                size="icon" 
                onClick={handleSend} 
                disabled={isLoading || !input.trim()} 
                className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-xl h-11 w-11 shadow-lg shadow-accent/20 transition-all active:scale-95"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      ) : (
        <div className="group relative">
          {/* Animated Glow Rings */}
          <div className="absolute inset-0 bg-primary rounded-full blur-xl opacity-40 group-hover:opacity-70 group-hover:scale-125 transition-all duration-500 animate-pulse" />
          <div className="absolute inset-0 bg-accent rounded-full blur-md opacity-20 group-hover:opacity-50 animate-ping" />
          
          <Button 
            size="lg" 
            className="relative rounded-2xl w-16 h-16 bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground shadow-[0_0_20px_rgba(94,92,230,0.4)] hover:shadow-[0_0_30px_rgba(94,92,230,0.6)] hover:scale-110 hover:-rotate-3 transition-all duration-300 border border-white/20 p-0 overflow-hidden"
            onClick={() => setIsOpen(true)}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.2),transparent)]" />
            <div className="flex flex-col items-center justify-center">
              <Bot className="w-8 h-8 drop-shadow-lg" />
              <div className="flex gap-0.5 mt-0.5">
                <div className="w-1 h-1 bg-white rounded-full animate-bounce [animation-delay:-0.3s]" />
                <div className="w-1 h-1 bg-white rounded-full animate-bounce [animation-delay:-0.15s]" />
                <div className="w-1 h-1 bg-white rounded-full animate-bounce" />
              </div>
            </div>
          </Button>
          
          {/* AI Hint Tooltip */}
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-card border border-border rounded-lg text-xs font-bold text-accent whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 pointer-events-none shadow-xl">
            Ask CineVerse AI
          </div>
        </div>
      )}
    </div>
  )
}
