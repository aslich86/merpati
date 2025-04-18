import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MessageSquare, Users, Settings, LogOut, Send, ImageIcon, Smile, Paperclip, Mic } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="flex h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-purple-600">ChatTeen</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input type="search" placeholder="Cari..." className="w-[200px] pl-8 md:w-[300px]" />
            </div>
            <Button variant="ghost" size="icon" className="rounded-full" asChild>
              <Link href="/profile">
                <img
                  src="/placeholder.svg?height=32&width=32"
                  alt="Profile"
                  className="h-8 w-8 rounded-full"
                  width={32}
                  height={32}
                />
                <span className="sr-only">Profile</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <aside className="hidden w-64 border-r bg-gray-50 md:block">
          <div className="flex h-full flex-col">
            <div className="p-4">
              <Button className="w-full justify-start gap-2 bg-purple-600 hover:bg-purple-700">
                <MessageSquare className="h-4 w-4" />
                Obrolan Baru
              </Button>
            </div>
            <nav className="flex-1 overflow-auto p-2">
              <div className="space-y-2">
                <Button variant="ghost" className="w-full justify-start gap-2 font-normal" asChild>
                  <Link href="/dashboard">
                    <MessageSquare className="h-4 w-4" />
                    Semua Obrolan
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-2 font-normal" asChild>
                  <Link href="/dashboard/groups">
                    <Users className="h-4 w-4" />
                    Grup
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-2 font-normal" asChild>
                  <Link href="/dashboard/ai-assistant">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                      <line x1="12" x2="12" y1="19" y2="22"></line>
                    </svg>
                    AI Asisten
                  </Link>
                </Button>
              </div>
              <div className="mt-6">
                <h3 className="mb-2 px-4 text-sm font-semibold">Obrolan Terbaru</h3>
                <div className="space-y-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Button key={i} variant="ghost" className="w-full justify-start gap-2 font-normal">
                      <div className="relative">
                        <img
                          src={`/placeholder.svg?height=32&width=32&text=U${i}`}
                          alt={`User ${i}`}
                          className="h-8 w-8 rounded-full"
                          width={32}
                          height={32}
                        />
                        <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-green-500" />
                      </div>
                      <div className="flex flex-col items-start">
                        <span>Pengguna {i}</span>
                        <span className="text-xs text-gray-500">Pesan terakhir...</span>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>
            </nav>
            <div className="border-t p-4">
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="rounded-full" asChild>
                  <Link href="/settings">
                    <Settings className="h-5 w-5" />
                    <span className="sr-only">Settings</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <LogOut className="h-5 w-5" />
                  <span className="sr-only">Log out</span>
                </Button>
              </div>
            </div>
          </div>
        </aside>
        <main className="flex flex-1 flex-col overflow-hidden">
          <div className="border-b p-4">
            <div className="flex items-center gap-4">
              <img
                src="/placeholder.svg?height=40&width=40&text=U1"
                alt="User"
                className="h-10 w-10 rounded-full"
                width={40}
                height={40}
              />
              <div>
                <h2 className="font-semibold">Pengguna 1</h2>
                <p className="text-sm text-gray-500">Online</p>
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-auto p-4">
            <div className="space-y-4">
              <div className="flex gap-4">
                <img
                  src="/placeholder.svg?height=40&width=40&text=U1"
                  alt="User"
                  className="h-10 w-10 rounded-full"
                  width={40}
                  height={40}
                />
                <div className="rounded-lg bg-gray-100 p-3">
                  <p>Halo! Apa kabar?</p>
                  <span className="mt-1 block text-xs text-gray-500">10:30</span>
                </div>
              </div>
              <div className="flex justify-end gap-4">
                <div className="rounded-lg bg-purple-100 p-3">
                  <p>Hai! Aku baik, kamu?</p>
                  <span className="mt-1 block text-xs text-gray-500">10:31</span>
                </div>
                <img
                  src="/placeholder.svg?height=40&width=40"
                  alt="You"
                  className="h-10 w-10 rounded-full"
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex gap-4">
                <img
                  src="/placeholder.svg?height=40&width=40&text=U1"
                  alt="User"
                  className="h-10 w-10 rounded-full"
                  width={40}
                  height={40}
                />
                <div className="rounded-lg bg-gray-100 p-3">
                  <p>Aku juga baik. Apa rencana kamu hari ini?</p>
                  <span className="mt-1 block text-xs text-gray-500">10:32</span>
                </div>
              </div>
              <div className="flex justify-end gap-4">
                <div className="rounded-lg bg-purple-100 p-3">
                  <p>Aku berencana untuk belajar dan mengerjakan tugas sekolah. Kamu?</p>
                  <span className="mt-1 block text-xs text-gray-500">10:33</span>
                </div>
                <img
                  src="/placeholder.svg?height=40&width=40"
                  alt="You"
                  className="h-10 w-10 rounded-full"
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </div>
          <div className="border-t p-4">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Paperclip className="h-5 w-5" />
                <span className="sr-only">Attach</span>
              </Button>
              <Button variant="ghost" size="icon">
                <ImageIcon className="h-5 w-5" />
                <span className="sr-only">Image</span>
              </Button>
              <Input placeholder="Ketik pesan..." className="flex-1" />
              <Button variant="ghost" size="icon">
                <Smile className="h-5 w-5" />
                <span className="sr-only">Emoji</span>
              </Button>
              <Button variant="ghost" size="icon">
                <Mic className="h-5 w-5" />
                <span className="sr-only">Voice</span>
              </Button>
              <Button size="icon" className="bg-purple-600 hover:bg-purple-700">
                <Send className="h-5 w-5" />
                <span className="sr-only">Send</span>
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
