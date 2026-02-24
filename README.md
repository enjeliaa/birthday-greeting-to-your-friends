# 🎂 Birthday Greeting Website

Website ucapan ulang tahun yang elegan — React JS + Vite.
Responsive di HP dan Desktop. Ada background music & kue interaktif.

---

## 📁 Struktur File

```
birthday-project/
├── public/
│   └── music/          ← Taruh file .mp3 lagu di sini
├── src/
│   ├── components/
│   │   ├── HeroSection.jsx    ← Foto + nama + quote
│   │   ├── BirthdayCard.jsx   ← Kartu pesan
│   │   ├── Cake.jsx           ← Kue interaktif
│   │   ├── MusicPlayer.jsx    ← Background music
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## ✏️ Kustomisasi (Yang Perlu Diganti)

### 1. Nama
Buka `src/components/HeroSection.jsx`, ubah:
```jsx
<h1 className="hero-name">Your Name Here</h1>
```

### 2. Foto
Taruh foto di `public/foto.jpg`, lalu ubah src di `HeroSection.jsx`:
```jsx
<img src="/foto.jpg" alt="Birthday Person" className="hero-photo" />
```

### 3. Pesan Kartu
Buka `src/components/BirthdayCard.jsx`, ubah isi `card-message` dan `card-signature`.

### 4. Musik
Taruh file `.mp3` di `public/music/lagu.mp3`, lalu ubah src di `MusicPlayer.jsx`:
```jsx
<audio src="/music/lagu.mp3" loop preload="auto" />
```

---

## 🚀 Cara Menjalankan

```bash
npm install
npm run dev
```
Buka browser → `http://localhost:5173`

---

## 🌐 Deploy ke Vercel (Gratis, Paling Mudah)

1. Push project ke GitHub
2. Buka [vercel.com](https://vercel.com) → Login dengan GitHub
3. Klik **"Add New Project"** → Pilih repo ini
4. Klik **Deploy** (Vercel otomatis detect Vite)
5. Dapat link publik → bisa dibuka dari HP manapun ✅

---

## 📋 Tugas GDGoC UNSRI 25/26

Setelah deploy, pull request ke repo **Frontend Development GDGoC UNSRI 25/26**
dan masukkan link repo GitHub kamu di:
```
/3-introduction-to-react/task.txt
```
