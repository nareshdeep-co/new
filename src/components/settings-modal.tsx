"use client"

import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Settings, Bell, Shield, PlayCircle, Globe, Save } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface SettingsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = React.useState(false)

  const handleSave = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Settings Saved",
        description: "Your cinematic preferences have been updated successfully.",
      })
      onClose()
    }, 1000)
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl bg-card border-primary/20 shadow-2xl overflow-hidden p-0">
        <div className="flex flex-col h-[500px]">
          <DialogHeader className="p-6 bg-muted/30 border-b border-border/50">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/20 rounded-lg">
                <Settings className="w-5 h-5 text-accent" />
              </div>
              <div>
                <DialogTitle className="text-2xl font-black tracking-tight">System Settings</DialogTitle>
                <DialogDescription>Manage your CineVerse account and preferences</DialogDescription>
              </div>
            </div>
          </DialogHeader>

          <div className="flex-1 overflow-hidden">
            <Tabs defaultValue="general" className="flex h-full">
              <TabsList className="flex flex-col h-full w-48 bg-muted/10 rounded-none border-r border-border/50 p-2 justify-start space-y-1">
                <TabsTrigger value="general" className="w-full justify-start gap-2 px-3 py-2 data-[state=active]:bg-primary/20 data-[state=active]:text-accent">
                  <Globe className="w-4 h-4" /> General
                </TabsTrigger>
                <TabsTrigger value="playback" className="w-full justify-start gap-2 px-3 py-2 data-[state=active]:bg-primary/20 data-[state=active]:text-accent">
                  <PlayCircle className="w-4 h-4" /> Playback
                </TabsTrigger>
                <TabsTrigger value="notifications" className="w-full justify-start gap-2 px-3 py-2 data-[state=active]:bg-primary/20 data-[state=active]:text-accent">
                  <Bell className="w-4 h-4" /> Notifications
                </TabsTrigger>
                <TabsTrigger value="privacy" className="w-full justify-start gap-2 px-3 py-2 data-[state=active]:bg-primary/20 data-[state=active]:text-accent">
                  <Shield className="w-4 h-4" /> Privacy
                </TabsTrigger>
              </TabsList>

              <div className="flex-1 p-6 overflow-y-auto">
                <TabsContent value="general" className="mt-0 space-y-6">
                  <div className="space-y-4">
                    <div className="grid gap-2">
                      <Label>Interface Language</Label>
                      <Select defaultValue="en">
                        <SelectTrigger className="bg-background/50">
                          <SelectValue placeholder="Select Language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English (US)</SelectItem>
                          <SelectItem value="hi">Hindi (IN)</SelectItem>
                          <SelectItem value="es">Spanish</SelectItem>
                          <SelectItem value="fr">French</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-muted/20 rounded-xl border border-border/50">
                      <div className="space-y-0.5">
                        <Label>Autoplay Next Episode</Label>
                        <p className="text-xs text-muted-foreground">Start the next video automatically</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="playback" className="mt-0 space-y-6">
                  <div className="space-y-4">
                    <div className="grid gap-2">
                      <Label>Streaming Quality</Label>
                      <Select defaultValue="auto">
                        <SelectTrigger className="bg-background/50">
                          <SelectValue placeholder="Select Quality" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="auto">Auto (Recommended)</SelectItem>
                          <SelectItem value="4k">4K Ultra HD</SelectItem>
                          <SelectItem value="1080p">1080p Full HD</SelectItem>
                          <SelectItem value="720p">720p HD</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-[10px] text-muted-foreground">4K streaming requires a Premium subscription.</p>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-muted/20 rounded-xl border border-border/50">
                      <div className="space-y-0.5">
                        <Label>Show Data Warning</Label>
                        <p className="text-xs text-muted-foreground">Notify when using cellular data</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="notifications" className="mt-0 space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 hover:bg-muted/10 rounded-lg transition-colors">
                      <Label>New Releases</Label>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between p-3 hover:bg-muted/10 rounded-lg transition-colors">
                      <Label>Recommended for You</Label>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between p-3 hover:bg-muted/10 rounded-lg transition-colors">
                      <Label>Account Security</Label>
                      <Switch defaultChecked disabled />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="privacy" className="mt-0 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-muted/20 rounded-xl border border-border/50">
                      <div className="space-y-0.5">
                        <Label>Incognito Mode</Label>
                        <p className="text-xs text-muted-foreground">Don't save watch history for this session</p>
                      </div>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between p-4 bg-muted/20 rounded-xl border border-border/50">
                      <div className="space-y-0.5">
                        <Label>Personalized Ads</Label>
                        <p className="text-xs text-muted-foreground">Allow ads based on your viewing habits</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>

          <DialogFooter className="p-4 bg-muted/30 border-t border-border/50 gap-2">
            <Button variant="ghost" onClick={onClose} className="rounded-full">Cancel</Button>
            <Button 
              onClick={handleSave} 
              disabled={isLoading}
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
            >
              {isLoading ? "Saving..." : "Save Changes"} <Save className="ml-2 w-4 h-4" />
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  )
}
