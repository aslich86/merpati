# 🕊️ Merpati App

Merpati App (Merah Putih Aplikasi Teknologi Indonesia) adalah aplikasi perpesanan yang dibangun dengan semangat nasionalisme, keberanian, dan kesederhanaan. Lebih dari sekadar platform chat, Merpati menggabungkan kecanggihan teknologi Artificial Intelligence untuk memberikan dampak positif bagi masyarakat Indonesia.

## ✨ Fitur Utama

- 💬 **Perpesanan Real-time**  
  Chat pribadi dan grup, dengan dukungan pengiriman teks, gambar, video, dan dokumen.

- 🧠 **Deteksi Kesehatan Mental (AI)**  
  Menganalisis isi pesan pengguna untuk mendeteksi gejala awal gangguan kesehatan mental dan memberikan saran awal berbasis AI.

- 📰 **Deteksi Berita Palsu (AI)**  
  Fitur verifikasi cepat untuk mengecek apakah sebuah tautan atau berita tergolong hoaks atau tidak.

## 🌱 Fitur Tambahan (Opsional)

- ☁️ **Merpati Drive** – Penyimpanan file berbasis cloud.  
- 📹 **Merpati Meet** – Fitur video meeting seperti Zoom/Google Meet (masih dalam rencana).

## 🚀 Teknologi yang Digunakan

- **Frontend:** React Native  
- **Backend:** Node.js / Express (opsional: Firebase)  
- **AI/ML:** Python (Transformers, Scikit-learn), FastAPI  
- **Database:** MongoDB / Firebase Firestore  
- **CI/CD & Monitoring:** GitHub Actions, Docker, Prometheus & Grafana  
- **Deployment:** (masih dalam pengembangan, target VPS/Docker Swarm/Kubernetes)

## 📦 Struktur Proyek (MVP)

```
merpati-app/
│
├── client/ # React Native app
│ ├── components/
│ ├── screens/
│ └── ...
│
├── server/ # Backend API
│ ├── routes/
│ ├── models/
│ └── ...
│
├── ai-services/ # AI untuk deteksi mental dan berita palsu
│ ├── mental_health/
│ └── fake_news/
│
├── docker/ # Docker setup (jika ada)
└── README.md
```

## ⚙️ Instalasi & Penggunaan

# Clone repositori
```
git clone https://github.com/namauser/merpati-app.git
cd merpati-app
```

# Jalankan Frontend (React Native)
```
cd client
npm install
npx react-native run-android # atau run-ios sesuai target
```

# Jalankan Backend
```
cd ../server
npm install
npm run dev
```

# Jalankan AI Services (opsional)
```
cd ../ai-services
uvicorn mental_health.app:app --reload
```

📌 Rencana Pengembangan
 - Implementasi UI dasar dengan React Native

 - Integrasi backend Express + MongoDB

 - Integrasi model AI dengan FastAPI

 - Deployment ke VPS lokal/awan

 - Versi beta untuk testing pengguna terbatas

🛡️ Lisensi
MIT License. 

🤝 Kontribusi
Merpati masih dalam tahap pengembangan. Jika kamu tertarik menjadi co-founder, kontributor, atau hanya ingin berdiskusi, silakan hubungi kami!

Dibuat dengan semangat nasionalisme dan teknologi oleh tim Merpati ❤️
