import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Brain, Newspaper } from "lucide-react";
import Link from "next/link";

export default function HomeLoggedIn() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-10 bg-gradient-to-b from-white to-purple-50">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-purple-700 mb-2">Halo, Sobat MERPATI!</h1>
        <p className="text-gray-600">Pilih aktivitas yang ingin kamu lakukan hari ini.</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        <Card className="text-center p-6">
          <CardContent>
            <MessageCircle className="w-10 h-10 text-purple-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Ruang Obrolan</h3>
            <p className="text-sm text-gray-600 mb-4">
              Mulai obrolan sehat dan aman dengan teman-temanmu.
            </p>
            <Link href="/chat">
              <Button className="bg-purple-600 text-white w-full">Masuk</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="text-center p-6">
          <CardContent>
            <Brain className="w-10 h-10 text-purple-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">AI Kesehatan Mental</h3>
            <p className="text-sm text-gray-600 mb-4">
              Curhat dengan AI yang mendengarkan dengan empati.
            </p>
            <Link href="/ai-mental">
              <Button className="bg-purple-600 text-white w-full">Mulai</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="text-center p-6">
          <CardContent>
            <Newspaper className="w-10 h-10 text-purple-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Deteksi Berita Palsu</h3>
            <p className="text-sm text-gray-600 mb-4">
              Periksa kebenaran informasi secara instan.
            </p>
            <Link href="/hoax-check">
              <Button className="bg-purple-600 text-white w-full">Periksa</Button>
            </Link>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
