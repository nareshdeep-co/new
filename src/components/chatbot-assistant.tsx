"use client"

import * as React from "react"
import { MessageSquare, Send, X, Bot, Sparkles, Film, HelpCircle } from "lucide-react"
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
      content: "Hi! I'm CineVerse AI. Ask me about directors, movie runtimes, or for a recommendation from Hollywood or Bollywood!"
    }
  ])
  const [isLoading, setIsLoading] = React.useState(false)

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: input }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setIsLoading(true)

    try {
      let response = "I'm sorry, I couldn't process that request."
      
      const lowerInput = input.toLowerCase()
      
      if (lowerInput.includes('recommend') || lowerInput.includes('suggest')) {
        const recs = await getMovieRecommendations({ preferences: input })
        response = `Here are some recommendations based on your request:\n\n` + 
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
        <Card className="w-80 sm:w-96 shadow-2xl border-primary/20 bg-card overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          <CardHeader className="bg-primary p-4 flex flex-row items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-background/20 rounded-lg">
                <Bot className="w-5 h-5 text-primary-foreground" />
              </div>
              <CardTitle className="text-lg text-primary-foreground">CineVerse AI</CardTitle>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-primary-foreground hover:bg-white/10">
              <X className="w-4 h-4" />
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-80 p-4">
              <div className="space-y-4">
                {messages.map((m) => (
                  <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                      m.role === 'user' 
                        ? 'bg-accent text-accent-foreground rounded-tr-none' 
                        : 'bg-muted text-foreground rounded-tl-none'
                    }`}>
                      {m.content.split('\n').map((line, i) => (
                        <p key={i} className={line.startsWith('•') ? 'ml-2' : ''}>{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-muted p-3 rounded-2xl rounded-tl-none animate-pulse">
                      Thinking...
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
          </CardContent>
          <CardFooter className="p-4 pt-0 border-t border-border mt-2">
            <div className="flex w-full items-center gap-2 pt-4">
              <Input 
                placeholder="Ask me anything..." 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="bg-muted/50 border-none h-10"
              />
              <Button size="icon" onClick={handleSend} disabled={isLoading} className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      ) : (
        <Button 
          size="lg" 
          className="rounded-full w-14 h-14 bg-primary text-primary-foreground shadow-2xl hover:scale-110 transition-transform"
          onClick={() => setIsOpen(true)}
        >
          <MessageSquare className="w-6 h-6" />
        </Button>
      )}
    </div>
  )
}
