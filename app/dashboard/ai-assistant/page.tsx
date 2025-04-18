import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Send, Mic, Paperclip } from "lucide-react"

export default function AIAssistantPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/dashboard">
                <ArrowLeft className="h-5 w-5" />
                <span className="sr-only">Back</span>
              </Link>
            </Button>
            <span className="text-xl font-bold text-purple-600">AI Asisten</span>
          </div>
        </div>
      </header>
      <main className="flex flex-1 flex-col overflow-hidden">
        <div className="flex-1 overflow-auto p-4">
          <div className="mx-auto max-w-3xl space-y-4">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 text-white">
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
                  className="h-5 w-5"
                >
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                  <line x1="12" x2="12" y1="19" y2="22"></line>
                </svg>
              </div>
              <div className="rounded-lg bg-gray-100 p-3">
                <p>Halo! Saya adalah AI Asisten ChatTeen. Apa yang bisa saya bantu hari ini?</p>
                <span className="mt-1 block text-xs text-gray-500">10:30</span>
              </div>
            </div>
            <div className="flex justify-end gap-4">
              <div className="rounded-lg bg-purple-100 p-3">
                <p>Hai! Bisakah kamu membantuku dengan PR matematika?</p>
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
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 text-white">
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
                  className="h-5 w-5"
                >
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                  <line x1="12" x2="12" y1="19" y2="22"></line>
                </svg>
              </div>
              <div className="rounded-lg bg-gray-100 p-3">
                <p>
                  Tentu saja! Saya senang bisa membantu dengan PR matematika. Apa topik yang sedang kamu pelajari?
                  Apakah itu aljabar, geometri, kalkulus, atau topik lainnya? Bisa tolong jelaskan soal yang kamu
                  hadapi?
                </p>
                <span className="mt-1 block text-xs text-gray-500">10:32</span>
              </div>
            </div>
            <div className="flex justify-end gap-4">
              <div className="rounded-lg bg-purple-100 p-3">
                <p>Aku sedang belajar tentang persamaan kuadrat. Bagaimana cara menyelesaikan x² - 5x + 6 = 0?</p>
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
            <div className="flex gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 text-white">
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
                  className="h-5 w-5"
                >
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                  <line x1="12" x2="12" y1="19" y2="22"></line>
                </svg>
              </div>
              <div className="rounded-lg bg-gray-100 p-3">
                <p>Untuk menyelesaikan persamaan kuadrat x² - 5x + 6 = 0, kita bisa menggunakan metode faktorisasi:</p>
                <p className="mt-2">Langkah 1: Identifikasi koefisien a = 1, b = -5, dan c = 6</p>
                <p className="mt-2">
                  Langkah 2: Cari dua bilangan yang jika dikalikan menghasilkan c (6) dan jika dijumlahkan menghasilkan
                  b (-5)
                </p>
                <p className="mt-2">Bilangan tersebut adalah -2 dan -3 karena (-2) × (-3) = 6 dan (-2) + (-3) = -5</p>
                <p className="mt-2">Langkah 3: Faktorkan persamaan menjadi (x - 2)(x - 3) = 0</p>
                <p className="mt-2">
                  Langkah 4: Gunakan sifat perkalian nol, jika (x - 2)(x - 3) = 0, maka x - 2 = 0 atau x - 3 = 0
                </p>
                <p className="mt-2">Langkah 5: Selesaikan untuk x: x = 2 atau x = 3</p>
                <p className="mt-2">Jadi, solusi dari persamaan x² - 5x + 6 = 0 adalah x = 2 atau x = 3.</p>
                <span className="mt-1 block text-xs text-gray-500">10:34</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t p-4">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Paperclip className="h-5 w-5" />
                <span className="sr-only">Attach</span>
              </Button>
              <Input placeholder="Tanyakan sesuatu..." className="flex-1" />
              <Button variant="ghost" size="icon">
                <Mic className="h-5 w-5" />
                <span className="sr-only">Voice</span>
              </Button>
              <Button size="icon" className="bg-purple-600 hover:bg-purple-700">
                <Send className="h-5 w-5" />
                <span className="sr-only">Send</span>
              </Button>
            </div>
            <p className="mt-2 text-center text-xs text-gray-500">
              AI Asisten dapat membantu dengan pertanyaan umum, PR, dan informasi. Asisten tidak selalu akurat.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
