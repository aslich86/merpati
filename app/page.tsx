import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Brain, SearchCheck } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#f8f4ff] to-white px-4 py-16">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">
          Selamat Datang di <span className="text-purple-600">MERPATI</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-6">
          Aplikasi obrolan cerdas untuk harapan, kedamaian, dan kebenaran. 
          Dirancang untuk membangun komunikasi sehat, edukasi mental, dan literasi digital anak bangsa.
        </p>
        <Link href="/auth">
          <Button className="text-white bg-purple-600 hover:bg-purple-700 px-6 py-2 text-lg rounded-xl">
            Mulai Sekarang
          </Button>
        </Link>
      </section>

      <section className="w-full max-w-5xl">
        <h2 className="text-3xl font-semibold text-center mb-10">Fitur Unggulan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center p-6">
            <CardContent>
              <ShieldCheck className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Obrolan Aman & Nyaman</h3>
              <p className="text-gray-600 text-sm">
                Privasi dan enkripsi menyeluruh untuk menjamin keamanan remaja saat berinteraksi.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent>
              <Brain className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI Kesehatan Mental</h3>
              <p className="text-gray-600 text-sm">
                Asisten virtual dengan pendekatan empati untuk mendampingi kondisi psikologis remaja.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent>
              <SearchCheck className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Deteksi Berita Palsu</h3>
              <p className="text-gray-600 text-sm">
                Analisis cerdas berbasis AI untuk membantu mengenali dan menyanggah hoaks secara otomatis.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
