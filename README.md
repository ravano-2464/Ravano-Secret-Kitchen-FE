<div align="center">

# 🍳 Ravano Secret Kitchen

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

**Aplikasi resep masakan Indonesia dengan ribuan resep lezat untuk keluarga Anda** 🇮🇩

[Demo](#-demo) • [Fitur](#-fitur) • [Instalasi](#-instalasi) • [Struktur Proyek](#-struktur-proyek)

</div>

---

## ✨ Fitur

| Fitur | Deskripsi |
|-------|-----------|
| 🔐 **Autentikasi** | Login & Register dengan validasi form |
| 🔍 **Pencarian** | Cari resep berdasarkan nama atau deskripsi |
| 🏷️ **Kategori** | Filter resep: Masakan Utama, Berkuah, Sayuran, Kue & Camilan |
| 📖 **Detail Resep** | Bahan-bahan, Cara Membuat, Tips & Trik |
| 🌐 **API Integration** | Mengambil data resep dari Backend (MongoDB) |
| 📱 **Responsif** | Tampilan optimal di desktop & mobile |

---

## 🎨 Screenshots

| Login | Register | Home |
|-------|----------|------|
| Form login dengan validasi | Form registrasi lengkap | Daftar resep dengan filter |

---

## 🚀 Instalasi

# Clone repository
git clone <repository-url>

# Masuk ke folder
cd Frontend

# Install dependencies
npm install

# Setup Environment Variables
# Buat file .env dan tambahkan URL API Backend
echo "VITE_API_URL=http://localhost:5000/api" > .env

# Jalankan development server
npm run dev

# Pastikan Backend server juga berjalan!
# cd ../Backend && npm run dev

Buka http://localhost:5173 di browser Anda.

---

## 📁 Struktur Proyek

```
Frontend/
├── 📂 public/                    # File statis yang langsung disajikan tanpa diproses
│   └── 📄 vite.svg              #   Favicon / logo Vite default
│
├── 📂 src/                       # Source code utama aplikasi
│   ├── 📂 assets/               #   Asset statis (gambar, ikon, dll.)
│   │   └── 📄 react.svg         #     Logo React untuk branding
│   │
│   ├── 📂 components/           #   Komponen UI yang dapat digunakan ulang
│   │   ├── 📄 CategoryFilter.css #     Styling untuk filter kategori
│   │   ├── 📄 CategoryFilter.tsx #     Komponen filter kategori resep (Masakan Utama, Berkuah, dll.)
│   │   ├── 📄 GuestRoute.tsx    #     Route guard — redirect ke /home jika sudah login
│   │   ├── 📄 Navbar.css        #     Styling untuk navigation bar
│   │   ├── 📄 Navbar.tsx        #     Navigation bar sticky (logo, navigasi, tombol logout)
│   │   ├── 📄 ProtectedRoute.tsx #    Route guard — redirect ke /login jika belum login
│   │   ├── 📄 RecipeCard.css    #     Styling untuk kartu resep
│   │   ├── 📄 RecipeCard.tsx    #     Komponen kartu resep (gambar, judul, deskripsi, kategori)
│   │   ├── 📄 SearchBar.css    #      Styling untuk search bar
│   │   └── 📄 SearchBar.tsx    #      Komponen pencarian resep dengan debounce
│   │
│   ├── 📂 context/              #   React Context untuk state management global
│   │   └── 📄 AuthContext.tsx   #     Provider autentikasi (login state, token, user info)
│   │
│   ├── 📂 hooks/                #   Custom React Hooks (pemisahan logika bisnis dari UI)
│   │   ├── 📄 useLogin.ts      #     Hook untuk logika login (validasi, API call, error handling)
│   │   ├── 📄 useRecipeDetail.ts #   Hook untuk fetch & kelola detail resep berdasarkan ID
│   │   ├── 📄 useRecipes.ts    #     Hook untuk fetch daftar resep, filter kategori, & pencarian
│   │   └── 📄 useRegister.ts   #     Hook untuk logika registrasi (validasi, API call, error handling)
│   │
│   ├── 📂 pages/                #   Halaman-halaman utama aplikasi (setiap file = 1 route)
│   │   ├── 📄 HomePage.css     #     Styling halaman utama
│   │   ├── 📄 HomePage.tsx     #     Halaman utama — daftar resep dengan filter & pencarian
│   │   ├── 📄 LoginPage.css    #     Styling halaman login
│   │   ├── 📄 LoginPage.tsx    #     Halaman login — form email & password
│   │   ├── 📄 RecipeDetailPage.css # Styling halaman detail resep
│   │   ├── 📄 RecipeDetailPage.tsx # Halaman detail resep — tab Bahan, Cara Membuat, Tips
│   │   └── 📄 RegisterPage.tsx #     Halaman registrasi — form nama, email, password, konfirmasi
│   │
│   ├── 📂 types/                #   TypeScript type definitions & interfaces
│   │   └── 📄 Recipe.ts        #     Interface untuk tipe data Resep (id, nama, bahan, langkah, dll.)
│   │
│   ├── 📄 App.css               #   Styling khusus komponen App
│   ├── 📄 App.tsx               #   Root komponen — konfigurasi routing (React Router)
│   ├── 📄 index.css             #   Global styles (reset CSS, font, warna dasar)
│   └── 📄 main.tsx              #   Entry point — render App ke DOM & wrap dengan AuthProvider
│
├── 📄 .env                      # Environment variables (VITE_API_URL untuk koneksi ke Backend)
├── 📄 .gitignore                # Daftar file/folder yang diabaikan Git (node_modules, dist, .env)
├── 📄 eslint.config.js          # Konfigurasi ESLint untuk linting & code quality
├── 📄 index.html                # HTML entry point — Vite inject bundle JS di sini
├── 📄 package.json              # Metadata project, dependencies, & script commands
├── 📄 package-lock.json         # Lock file — memastikan versi dependency konsisten
├── 📄 tsconfig.json             # TypeScript root config — referensi ke app & node config
├── 📄 tsconfig.app.json         # TypeScript config untuk source code aplikasi (src/)
├── 📄 tsconfig.node.json        # TypeScript config untuk file konfigurasi Node (vite.config.ts)
└── 📄 vite.config.ts            # Konfigurasi Vite (plugins, server port, proxy, dll.)
```

### 📖 Penjelasan Arsitektur Folder

| Folder | Fungsi |
|--------|--------|
| `public/` | File statis yang disajikan langsung oleh Vite tanpa proses bundling. Cocok untuk favicon dan asset yang jarang berubah. |
| `src/assets/` | Asset statis seperti gambar dan ikon yang di-import langsung di komponen. Vite akan mengoptimasi dan menambahkan hash pada build. |
| `src/components/` | Komponen UI yang **reusable** dan bisa digunakan di berbagai halaman. Setiap komponen memiliki file `.tsx` (logic + JSX) dan `.css` (styling) yang terpisah. Termasuk route guards (`ProtectedRoute` & `GuestRoute`) untuk kontrol akses. |
| `src/context/` | React Context API untuk **state management global**. `AuthContext` menyimpan informasi autentikasi (token, user data) yang bisa diakses dari seluruh komponen. |
| `src/hooks/` | Custom Hooks yang memisahkan **business logic** dari UI. Pattern ini membuat komponen lebih bersih dan logika bisa di-test secara independen. |
| `src/pages/` | Komponen halaman yang merepresentasikan **satu route** di aplikasi. Setiap halaman menggunakan komponen dari `components/` dan hook dari `hooks/`. |
| `src/types/` | TypeScript interfaces dan type definitions untuk memastikan **type safety** di seluruh aplikasi. |

---

## 🛣️ Routing

| Path | Halaman | Deskripsi |
|------|---------|-----------|
| `/login` | LoginPage | Form login user |
| `/register` | RegisterPage | Form registrasi user baru |
| `/home` | HomePage | Daftar resep dengan filter |
| `/recipe/:id` | RecipeDetailPage | Detail lengkap resep |

---

## 🪝 Custom Hooks

### `useLogin`
```typescript
const { email, password, loading, error, setEmail, setPassword, handleLogin } = useLogin();
```

### `useRegister`
```typescript
const { name, email, password, confirmPassword, loading, error, handleRegister, ... } = useRegister();
```

### `useRecipes`
```typescript
const { filteredRecipes, categories, activeCategory, searchQuery, setActiveCategory, setSearchQuery } = useRecipes();
```

### `useRecipeDetail`
```typescript
const { recipe, activeTab, loading, setActiveTab, goBack } = useRecipeDetail();
```

---

## 🛠️ Tech Stack

<div align="center">

| Technology | Version | Description |
|------------|---------|-------------|
| ![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black) | 19.2 | UI Library |
| ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) | 5.9 | Type Safety |
| ![Vite](https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=white) | 7.2 | Build Tool |
| ![React Router](https://img.shields.io/badge/-React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white) | 7.x | Routing |
| ![Lucide](https://img.shields.io/badge/-Lucide-F56565?style=flat-square) | Latest | Icons |

</div>

---

## 📜 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

---

## 🍽️ Resep yang Tersedia

*> Catatan: Daftar ini adalah contoh data awal yang di-seed ke database.*

- 🥘 **Rendang Daging Sapi** - Masakan Utama
- 🍳 **Nasi Goreng Kampung** - Masakan Utama
- 🍲 **Soto Ayam Kuning** - Masakan Berkuah
- 🍰 **Kue Lapis Legit** - Kue dan Camilan
- 🍌 **Pisang Goreng Crispy** - Kue dan Camilan
- 🥗 **Sayur Asem Jakarta** - Sayuran

---

<div align="center">

**Dibuat dengan ❤️ oleh Ravano Akbar Widodo**

</div>
