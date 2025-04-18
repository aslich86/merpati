"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-10 bg-gradient-to-b from-white to-purple-50">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
          {isLogin ? "Masuk ke MERPATI" : "Daftar Akun MERPATI"}
        </h1>

        <form className="space-y-4">
          {!isLogin && (
            <Input type="text" placeholder="Nama Lengkap" required />
          )}
          <Input type="email" placeholder="Email" required />
          <Input type="password" placeholder="Kata Sandi" required />

          <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-xl">
            {isLogin ? "Masuk" : "Daftar"}
          </Button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          {isLogin ? "Belum punya akun?" : "Sudah punya akun?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-purple-600 hover:underline font-medium"
          >
            {isLogin ? "Daftar di sini" : "Masuk di sini"}
          </button>
        </p>

        <div className="text-center mt-6">
          <Link href="/" className="text-sm text-gray-500 hover:underline">
            ← Kembali ke Beranda
          </Link>
        </div>
      </div>
    </main>
  );
}
