import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Camera, Edit, MessageSquare } from "lucide-react"

export default function ProfilePage() {
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
            <span className="text-xl font-bold text-purple-600">Profil</span>
          </div>
        </div>
      </header>
      <main className="container flex-1 py-6">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex flex-col items-center justify-center">
            <div className="relative mb-4">
              <img
                src="/placeholder.svg?height=128&width=128"
                alt="Profile"
                className="h-32 w-32 rounded-full"
                width={128}
                height={128}
              />
              <Button
                size="icon"
                className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-purple-600 hover:bg-purple-700"
              >
                <Camera className="h-4 w-4" />
                <span className="sr-only">Change profile picture</span>
              </Button>
            </div>
            <h1 className="text-2xl font-bold">Nama Pengguna</h1>
            <p className="text-gray-500">@username</p>
            <div className="mt-4 flex gap-4">
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Edit className="mr-2 h-4 w-4" />
                Edit Profil
              </Button>
            </div>
          </div>
          <Tabs defaultValue="info" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="info">Info</TabsTrigger>
              <TabsTrigger value="posts">Postingan</TabsTrigger>
              <TabsTrigger value="friends">Teman</TabsTrigger>
              <TabsTrigger value="settings">Pengaturan</TabsTrigger>
            </TabsList>
            <TabsContent value="info" className="mt-6 space-y-6">
              <div className="space-y-4 rounded-lg border p-6">
                <h2 className="text-xl font-semibold">Informasi Pribadi</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="fullname">Nama Lengkap</Label>
                    <Input id="fullname" value="Nama Lengkap" readOnly />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" value="username" readOnly />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" value="nama@email.com" readOnly />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Nomor Telepon</Label>
                    <Input id="phone" value="+62 812 3456 7890" readOnly />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      value="Halo! Saya adalah pengguna ChatTeen."
                      readOnly
                      className="min-h-[100px]"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-4 rounded-lg border p-6">
                <h2 className="text-xl font-semibold">Statistik</h2>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="rounded-lg border p-4">
                    <div className="text-3xl font-bold text-purple-600">120</div>
                    <div className="text-sm text-gray-500">Teman</div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="text-3xl font-bold text-purple-600">45</div>
                    <div className="text-sm text-gray-500">Grup</div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="text-3xl font-bold text-purple-600">250</div>
                    <div className="text-sm text-gray-500">Postingan</div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="posts" className="mt-6">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="rounded-lg border">
                    <div className="p-4">
                      <div className="flex items-center gap-2">
                        <img
                          src="/placeholder.svg?height=40&width=40"
                          alt="Profile"
                          className="h-10 w-10 rounded-full"
                          width={40}
                          height={40}
                        />
                        <div>
                          <div className="font-semibold">Nama Pengguna</div>
                          <div className="text-xs text-gray-500">2 jam yang lalu</div>
                        </div>
                      </div>
                      <p className="mt-2">Ini adalah contoh postingan ke-{i} yang dibuat oleh pengguna.</p>
                      <div className="mt-2">
                        <img
                          src={`/placeholder.svg?height=200&width=400&text=Post+${i}`}
                          alt={`Post ${i}`}
                          className="rounded-md"
                          width={400}
                          height={200}
                        />
                      </div>
                      <div className="mt-4 flex items-center gap-4">
                        <Button variant="ghost" size="sm" className="gap-1">
                          <MessageSquare className="h-4 w-4" />
                          <span>24</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="gap-1">
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
                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                          </svg>
                          <span>86</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="friends" className="mt-6">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                  <div key={i} className="flex items-center gap-4 rounded-lg border p-4">
                    <img
                      src={`/placeholder.svg?height=64&width=64&text=U${i}`}
                      alt={`User ${i}`}
                      className="h-16 w-16 rounded-full"
                      width={64}
                      height={64}
                    />
                    <div>
                      <div className="font-semibold">Pengguna {i}</div>
                      <div className="text-sm text-gray-500">@user{i}</div>
                      <Button size="sm" variant="outline" className="mt-2">
                        <MessageSquare className="mr-2 h-3 w-3" />
                        Kirim Pesan
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="settings" className="mt-6 space-y-6">
              <div className="space-y-4 rounded-lg border p-6">
                <h2 className="text-xl font-semibold">Pengaturan Akun</h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="change-email">Email</Label>
                    <Input id="change-email" value="nama@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="change-password">Password Baru</Label>
                    <Input id="change-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Konfirmasi Password</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                  <Button className="bg-purple-600 hover:bg-purple-700">Simpan Perubahan</Button>
                </div>
              </div>
              <div className="space-y-4 rounded-lg border p-6">
                <h2 className="text-xl font-semibold">Notifikasi</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Pesan Baru</div>
                      <div className="text-sm text-gray-500">Dapatkan notifikasi saat ada pesan baru</div>
                    </div>
                    <div className="flex h-6 items-center">
                      <input
                        id="notification-messages"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-600"
                        defaultChecked
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Permintaan Pertemanan</div>
                      <div className="text-sm text-gray-500">
                        Dapatkan notifikasi saat ada permintaan pertemanan baru
                      </div>
                    </div>
                    <div className="flex h-6 items-center">
                      <input
                        id="notification-friends"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-600"
                        defaultChecked
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Email Notifikasi</div>
                      <div className="text-sm text-gray-500">Dapatkan notifikasi melalui email</div>
                    </div>
                    <div className="flex h-6 items-center">
                      <input
                        id="notification-email"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-600"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 rounded-lg border p-6">
                <h2 className="text-xl font-semibold">Privasi</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Profil Publik</div>
                      <div className="text-sm text-gray-500">Izinkan orang lain melihat profil kamu</div>
                    </div>
                    <div className="flex h-6 items-center">
                      <input
                        id="privacy-profile"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-600"
                        defaultChecked
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Status Online</div>
                      <div className="text-sm text-gray-500">Tampilkan status online kamu</div>
                    </div>
                    <div className="flex h-6 items-center">
                      <input
                        id="privacy-online"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-600"
                        defaultChecked
                      />
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
