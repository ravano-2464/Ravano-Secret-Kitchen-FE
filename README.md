<div align="center">

<!-- Header Banner -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:FF6B6B,50:FFA726,100:FFD93D&height=220&section=header&text=🍳%20Ravano%20Secret%20Kitchen&fontSize=42&fontColor=ffffff&animation=fadeIn&fontAlignY=35&desc=Indonesian%20Recipe%20Web%20Application&descSize=18&descAlignY=55&descAlign=50" width="100%" />

<!-- Animated Typing -->
<a href="#">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&duration=3000&pause=1000&color=FF6B6B&center=true&vCenter=true&repeat=true&width=600&height=40&lines=Ribuan+Resep+Masakan+Indonesia+%F0%9F%87%AE%F0%9F%87%A9;Rendang%2C+Nasi+Goreng%2C+Soto+Ayam+%F0%9F%8D%B2;Dibuat+dengan+React+%2B+TypeScript+%E2%9A%A1;Lengkap+dengan+Tips+dan+Trik+%F0%9F%91%A8%E2%80%8D%F0%9F%8D%B3" alt="Typing SVG" />
</a>

<br/>

<!-- Tech Stack Badges -->
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![React Router](https://img.shields.io/badge/React_Router-7.13-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)

[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/Backend-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![SWC](https://img.shields.io/badge/Compiler-SWC-F8C457?style=for-the-badge&logo=swc&logoColor=black)](https://swc.rs/)

<br/>

> **🍽️ Aplikasi resep masakan Indonesia dengan ribuan resep lezat untuk keluarga Anda** 🇮🇩

[✨ Fitur](#-fitur) •
[🚀 Instalasi](#-instalasi-cepat) •
[📁 Struktur](#-struktur-proyek) •
[🛣️ Routing](#️-routing) •
[🪝 Hooks](#-custom-hooks) •
[🛠️ Tech Stack](#️-tech-stack-detail)

</div>

---

<!-- About Section -->
## 🎯 Tentang Proyek

<table>
<tr>
<td>

**Ravano Secret Kitchen** adalah aplikasi web resep masakan Indonesia yang dibangun sebagai proyek **Final Exam BINUS University**. Aplikasi ini memungkinkan pengguna untuk menjelajahi, mencari, dan melihat detail resep masakan Indonesia yang autentik.

Dibangun dengan arsitektur modern menggunakan **React 19** + **TypeScript** + **Vite**, aplikasi ini menerapkan best practices seperti:

- 🧩 **Component-Based Architecture** — Komponen modular & reusable
- 🎣 **Custom Hooks Pattern** — Pemisahan business logic dari UI
- 🔐 **Protected Routing** — Autentikasi & otorisasi route
- 🌐 **REST API Integration** — Koneksi ke backend MongoDB
- 📱 **Responsive Design** — Optimal di semua device

</td>
</tr>
</table>

---

## ✨ Fitur

<div align="center">

| 🔐 Autentikasi | 🔍 Pencarian | 🏷️ Kategori |
|:-:|:-:|:-:|
| Login & Register | Pencarian real-time | Filter per kategori |
| Validasi form lengkap | Debounce search | Masakan Utama |
| Token-based auth | Cari nama/deskripsi | Berkuah, Sayuran |
| Route protection | Hasil instan | Kue & Camilan |

| 📖 Detail Resep | 🌐 API Integration | 📱 Responsif |
|:-:|:-:|:-:|
| Tab Bahan-bahan | REST API Backend | Desktop & Mobile |
| Tab Cara Membuat | MongoDB Database | Adaptive Layout |
| Tab Tips & Trik | Error Handling | Touch Friendly |
| Info waktu & porsi | Toast Notifications | Smooth Animations |

</div>

---

## 🚀 Instalasi Cepat

### 📋 Prasyarat

<table>
<tr>
<td>

| Tool | Versi Minimum | Link |
|------|:---:|------|
| ![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=node.js&logoColor=white) | `≥ 18.x` | [Download](https://nodejs.org/) |
| ![npm](https://img.shields.io/badge/-npm-CB3837?style=flat-square&logo=npm&logoColor=white) | `≥ 9.x` | Included with Node.js |
| ![Git](https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white) | `≥ 2.x` | [Download](https://git-scm.com/) |
| ![MongoDB](https://img.shields.io/badge/-Backend_Server-47A248?style=flat-square&logo=mongodb&logoColor=white) | `Running` | [Setup Backend](../Backend/) |

</td>
</tr>
</table>

### ⚡ Langkah Instalasi

```bash
# 1️⃣ Clone repository
git clone <repository-url>

# 2️⃣ Masuk ke folder Frontend
cd Frontend

# 3️⃣ Install semua dependencies
npm install

# 4️⃣ Setup Environment Variables
#    Buat file .env di root folder Frontend
echo "VITE_API_URL=http://localhost:5000/api" > .env

# 5️⃣ Jalankan development server
npm run dev
```

> [!IMPORTANT]
> 🔌 Pastikan **Backend server** sudah berjalan sebelum menjalankan Frontend!
> ```bash
> cd ../Backend && npm run dev
> ```

> [!TIP]
> 🌐 Setelah berhasil, buka **http://localhost:5173** di browser Anda.

---

## 🔧 Environment Variables

| Variable | Deskripsi | Default |
|----------|-----------|---------|
| `VITE_API_URL` | URL API Backend server | `http://localhost:5000/api` |

> [!NOTE]
> File `.env` sudah ada di `.gitignore` sehingga tidak akan ter-push ke repository.

---

## 📁 Struktur Proyek

```
Frontend/
├── 📂 public/                      # ── File statis (disajikan langsung tanpa bundling)
│   └── 📄 vite.svg                 #    Favicon / logo Vite
│
├── 📂 src/                          # ── Source code utama aplikasi
│   │
│   ├── 📂 assets/                   # ── Asset statis (gambar, ikon, dll.)
│   │   └── 📄 react.svg            #    Logo React untuk branding
│   │
│   ├── 📂 components/               # ── Komponen UI reusable
│   │   ├── 📄 CategoryFilter.css    #    Styling filter kategori
│   │   ├── 📄 CategoryFilter.tsx    #    Komponen filter: Masakan Utama, Berkuah, dll.
│   │   ├── 📄 GuestRoute.tsx        #    Route guard → redirect ke /home jika sudah login
│   │   ├── 📄 Navbar.css            #    Styling navigation bar
│   │   ├── 📄 Navbar.tsx            #    Navbar sticky (logo, navigasi, tombol logout)
│   │   ├── 📄 ProtectedRoute.tsx    #    Route guard → redirect ke /login jika belum login
│   │   ├── 📄 RecipeCard.css        #    Styling kartu resep
│   │   ├── 📄 RecipeCard.tsx        #    Kartu resep (gambar, judul, deskripsi, kategori)
│   │   ├── 📄 SearchBar.css         #    Styling search bar
│   │   └── 📄 SearchBar.tsx         #    Komponen pencarian resep dengan debounce
│   │
│   ├── 📂 context/                   # ── React Context (state management global)
│   │   └── 📄 AuthContext.tsx        #    Provider autentikasi (token, user info, login state)
│   │
│   ├── 📂 hooks/                     # ── Custom React Hooks (business logic)
│   │   ├── 📄 useLogin.ts           #    Hook login (validasi, API call, error handling)
│   │   ├── 📄 useRecipeDetail.ts    #    Hook fetch & kelola detail resep by ID
│   │   ├── 📄 useRecipes.ts         #    Hook fetch daftar resep, filter, & pencarian
│   │   └── 📄 useRegister.ts        #    Hook registrasi (validasi, API call, error handling)
│   │
│   ├── 📂 pages/                     # ── Halaman utama (1 file = 1 route)
│   │   ├── 📄 HomePage.css          #    Styling halaman utama
│   │   ├── 📄 HomePage.tsx          #    Halaman utama — daftar resep + filter + pencarian
│   │   ├── 📄 LoginPage.css         #    Styling halaman login
│   │   ├── 📄 LoginPage.tsx         #    Halaman login — form email & password
│   │   ├── 📄 RecipeDetailPage.css  #    Styling halaman detail resep
│   │   ├── 📄 RecipeDetailPage.tsx  #    Detail resep — tab Bahan, Cara Membuat, Tips
│   │   └── 📄 RegisterPage.tsx      #    Halaman registrasi — nama, email, password
│   │
│   ├── 📂 types/                     # ── TypeScript type definitions
│   │   └── 📄 Recipe.ts             #    Interface Recipe (id, title, ingredients, steps, dll.)
│   │
│   ├── 📄 App.css                    #    Styling komponen App
│   ├── 📄 App.tsx                    #    Root komponen — konfigurasi routing
│   ├── 📄 index.css                  #    Global styles (reset, font, warna)
│   └── 📄 main.tsx                   #    Entry point — render App + wrap AuthProvider
│
├── 📄 .env                           # Environment variables (VITE_API_URL)
├── 📄 .gitignore                     # File/folder yang diabaikan Git
├── 📄 eslint.config.js               # Konfigurasi ESLint (linting & code quality)
├── 📄 index.html                     # HTML entry point (Vite inject JS di sini)
├── 📄 package.json                   # Metadata project, dependencies, scripts
├── 📄 package-lock.json              # Lock file (konsistensi versi dependency)
├── 📄 tsconfig.json                  # TypeScript root config
├── 📄 tsconfig.app.json              # TypeScript config untuk src/
├── 📄 tsconfig.node.json             # TypeScript config untuk konfigurasi Node
├── 📄 vite.config.ts                 # Konfigurasi Vite (plugins, server, proxy)
└── 📄 README.md                      # 📖 Dokumentasi proyek ini
```

---

### 🏗️ Arsitektur Folder

<div align="center">

```
┌─────────────────────────────────────────────────────────┐
│                      🏠 App.tsx                         │
│                   (React Router v7)                     │
├─────────────┬────────────┬──────────────────────────────┤
│  🔐 Guest   │ 🛡️ Protected│        📦 Providers          │
│   Routes    │   Routes   │   AuthContext + Toaster      │
├─────────────┴────────────┴──────────────────────────────┤
│                                                         │
│   📄 Pages        🧩 Components       🎣 Hooks          │
│   ┌──────────┐   ┌──────────────┐   ┌──────────────┐   │
│   │LoginPage │   │ Navbar       │   │ useLogin     │   │
│   │Register  │   │ SearchBar    │   │ useRegister  │   │
│   │HomePage  │   │ RecipeCard   │   │ useRecipes   │   │
│   │RecipeDetail│ │ CategoryFilter│  │ useRecipeDetail│ │
│   └──────────┘   │ ProtectedRoute│  └──────────────┘   │
│                   │ GuestRoute   │                       │
│                   └──────────────┘                       │
│                                                         │
│   🗃️ Context           📐 Types          🎨 Assets     │
│   ┌──────────────┐   ┌──────────┐   ┌──────────────┐   │
│   │AuthContext   │   │ Recipe   │   │ react.svg    │   │
│   │(token, user) │   │Interface │   │ vite.svg     │   │
│   └──────────────┘   └──────────┘   └──────────────┘   │
└─────────────────────────────────────────────────────────┘
```

</div>

| Folder | Emoji | Fungsi | Detail |
|--------|:-----:|--------|--------|
| `public/` | 📂 | **File Statis** | Disajikan langsung oleh Vite tanpa bundling. Cocok untuk favicon dan asset yang jarang berubah. |
| `src/assets/` | 🎨 | **Asset Statis** | Gambar dan ikon yang di-import langsung di komponen. Vite otomatis mengoptimasi dan menambahkan hash saat build. |
| `src/components/` | 🧩 | **Komponen Reusable** | Komponen UI yang bisa digunakan ulang di berbagai halaman. Termasuk **route guards** (`ProtectedRoute` & `GuestRoute`) untuk kontrol akses. |
| `src/context/` | 🗃️ | **State Global** | React Context API untuk state management global. `AuthContext` menyimpan token & user data yang bisa diakses dari seluruh komponen. |
| `src/hooks/` | 🎣 | **Business Logic** | Custom Hooks yang **memisahkan logika dari UI**. Membuat komponen lebih bersih dan logika bisa di-test secara independen. |
| `src/pages/` | 📄 | **Halaman Route** | Setiap file merepresentasikan **satu route** di aplikasi. Menggunakan komponen dari `components/` dan hook dari `hooks/`. |
| `src/types/` | 📐 | **Type Definitions** | TypeScript interfaces untuk **type safety** di seluruh aplikasi. |

---

## 🛣️ Routing

<div align="center">

```
                    ┌──────────────┐
                    │   App.tsx    │
                    │  (Router)   │
                    └──────┬───────┘
                           │
              ┌────────────┼────────────┐
              ▼            ▼            ▼
        ┌──────────┐ ┌──────────┐ ┌──────────┐
        │  Guest   │ │Protected │ │ Redirect │
        │  Routes  │ │  Routes  │ │  Rules   │
        └────┬─────┘ └────┬─────┘ └────┬─────┘
             │            │            │
        ┌────┴────┐  ┌────┴─────┐     │
        ▼         ▼  ▼          ▼     ▼
   /login  /register /home  /recipe/:id  /* → /home
```

</div>

| Path | Halaman | Akses | Deskripsi |
|------|---------|:-----:|-----------|
| `/login` | `LoginPage` | 🟢 Guest | Form login dengan email & password |
| `/register` | `RegisterPage` | 🟢 Guest | Form registrasi user baru |
| `/home` | `HomePage` | 🔒 Auth | Daftar resep dengan filter & pencarian |
| `/recipe/:id` | `RecipeDetailPage` | 🔒 Auth | Detail lengkap resep (bahan, cara membuat, tips) |
| `/` | — | 🔄 Redirect | Redirect otomatis ke `/home` |
| `/*` | — | 🔄 Redirect | Catch-all redirect ke `/home` |

> **🟢 Guest** = Hanya bisa diakses jika **belum login** (redirect ke `/home` jika sudah login)
>
> **🔒 Auth** = Hanya bisa diakses jika **sudah login** (redirect ke `/login` jika belum login)

---

## 🪝 Custom Hooks

<details>
<summary><b>🔐 useLogin</b> — Hook untuk logika login</summary>

```typescript
const {
  email,          // State email input
  password,       // State password input
  loading,        // Status loading saat API call
  error,          // Pesan error jika login gagal
  setEmail,       // Setter untuk email
  setPassword,    // Setter untuk password
  handleLogin     // Fungsi untuk submit login
} = useLogin();
```

**Fitur:**
- ✅ Validasi email & password sebelum submit
- ✅ API call ke endpoint login
- ✅ Error handling dengan pesan yang jelas
- ✅ Auto-redirect ke `/home` setelah berhasil

</details>

<details>
<summary><b>📝 useRegister</b> — Hook untuk logika registrasi</summary>

```typescript
const {
  name,               // State nama input
  email,              // State email input
  password,           // State password input
  confirmPassword,    // State konfirmasi password
  loading,            // Status loading
  error,              // Pesan error
  handleRegister,     // Fungsi submit registrasi
  ...setters          // Setter untuk semua field
} = useRegister();
```

**Fitur:**
- ✅ Validasi semua field form
- ✅ Pencocokan password & confirm password
- ✅ API call ke endpoint register
- ✅ Auto-redirect ke `/login` setelah berhasil

</details>

<details>
<summary><b>📋 useRecipes</b> — Hook untuk daftar resep</summary>

```typescript
const {
  filteredRecipes,     // Array resep yang sudah difilter
  categories,          // Daftar kategori tersedia
  activeCategory,      // Kategori yang sedang aktif
  searchQuery,         // Query pencarian saat ini
  setActiveCategory,   // Setter untuk ganti kategori
  setSearchQuery       // Setter untuk update pencarian
} = useRecipes();
```

**Fitur:**
- ✅ Fetch data resep dari API
- ✅ Filter berdasarkan kategori
- ✅ Pencarian berdasarkan nama/deskripsi
- ✅ Debounce search untuk performa optimal

</details>

<details>
<summary><b>🍲 useRecipeDetail</b> — Hook untuk detail resep</summary>

```typescript
const {
  recipe,        // Data detail resep lengkap
  activeTab,     // Tab yang sedang aktif (bahan/cara/tips)
  loading,       // Status loading
  setActiveTab,  // Setter untuk ganti tab
  goBack         // Fungsi kembali ke halaman sebelumnya
} = useRecipeDetail();
```

**Fitur:**
- ✅ Fetch detail resep berdasarkan ID dari URL params
- ✅ Manajemen tab (Bahan, Cara Membuat, Tips & Trik)
- ✅ Loading state yang smooth
- ✅ Navigasi kembali ke daftar resep

</details>

---

## 🛠️ Tech Stack Detail

<div align="center">

### 🎨 Frontend Core

| Technology | Badge | Version | Kegunaan |
|:----------:|:-----:|:-------:|----------|
| React | ![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black) | `19.2` | Library UI untuk membangun antarmuka |
| TypeScript | ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) | `5.9` | Type safety dan developer experience |
| Vite | ![Vite](https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=white) | `7.2` | Build tool & dev server yang super cepat |
| SWC | ![SWC](https://img.shields.io/badge/-SWC-F8C457?style=flat-square&logo=swc&logoColor=black) | Latest | Rust-based compiler (pengganti Babel) |

### 📦 Dependencies

| Package | Badge | Version | Kegunaan |
|:-------:|:-----:|:-------:|----------|
| React Router | ![React Router](https://img.shields.io/badge/-React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white) | `7.13` | Client-side routing & navigation |
| Lucide React | ![Lucide](https://img.shields.io/badge/-Lucide_Icons-F56565?style=flat-square&logo=lucide&logoColor=white) | `0.563` | Library ikon modern & customizable |
| React Hot Toast | ![Toast](https://img.shields.io/badge/-React_Hot_Toast-FF6B6B?style=flat-square) | `2.6` | Notifikasi toast yang ringan & cantik |

### 🔧 Dev Dependencies

| Package | Badge | Kegunaan |
|:-------:|:-----:|----------|
| ESLint | ![ESLint](https://img.shields.io/badge/-ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white) | Linting & code quality |
| TypeScript ESLint | ![TS-ESLint](https://img.shields.io/badge/-TS_ESLint-3178C6?style=flat-square&logo=typescript&logoColor=white) | TypeScript-aware linting rules |
| React Hooks Plugin | ![Hooks](https://img.shields.io/badge/-React_Hooks_Lint-61DAFB?style=flat-square&logo=react&logoColor=black) | Linting untuk React Hooks rules |

</div>

---

## 📐 Data Model

### `Recipe` Interface

```typescript
interface Recipe {
  id: string;            // 🔑 Unique identifier
  title: string;         // 📝 Nama resep
  category: string;      // 🏷️ Kategori (Masakan Utama, Berkuah, dll.)
  difficulty: "Mudah" | "Sedang" | "Sulit";  // ⚡ Tingkat kesulitan
  time: string;          // ⏱️ Waktu memasak
  servings: string;      // 🍽️ Jumlah porsi
  image: string;         // 🖼️ URL gambar resep
  description: string;   // 📄 Deskripsi singkat
  ingredients: string[]; // 🥕 Daftar bahan-bahan
  steps: string[];       // 📋 Langkah-langkah memasak
  videoUrl?: string;     // 🎥 URL video tutorial (opsional)
  tips?: string[];       // 💡 Tips & trik memasak (opsional)
}
```

---

## 📜 Scripts

| Script | Perintah | Deskripsi |
|:------:|----------|-----------|
| 🚀 | `npm run dev` | Menjalankan development server di `localhost:5173` |
| 📦 | `npm run build` | Compile TypeScript & build production bundle ke `dist/` |
| 🔍 | `npm run lint` | Menjalankan ESLint untuk cek code quality |
| 👀 | `npm run preview` | Preview production build secara lokal |

---

## 🍽️ Contoh Resep

> *📝 Catatan: Daftar ini adalah contoh data awal yang di-seed ke database.*

<div align="center">

| Emoji | Nama Resep | Kategori | Tingkat |
|:-----:|------------|:--------:|:-------:|
| 🥘 | **Rendang Daging Sapi** | Masakan Utama | 🔴 Sulit |
| 🍳 | **Nasi Goreng Kampung** | Masakan Utama | 🟢 Mudah |
| 🍲 | **Soto Ayam Kuning** | Masakan Berkuah | 🟡 Sedang |
| 🍰 | **Kue Lapis Legit** | Kue dan Camilan | 🔴 Sulit |
| 🍌 | **Pisang Goreng Crispy** | Kue dan Camilan | 🟢 Mudah |
| 🥗 | **Sayur Asem Jakarta** | Sayuran | 🟡 Sedang |

</div>

---

## 🔐 Alur Autentikasi

```
┌─────────────┐      ┌──────────────┐      ┌──────────────┐
│   User      │      │   Frontend   │      │   Backend    │
│   Browser   │      │   (React)    │      │   (Express)  │
└──────┬──────┘      └──────┬───────┘      └──────┬───────┘
       │                    │                      │
       │  1. Input Credentials                     │
       │ ──────────────────►│                      │
       │                    │                      │
       │                    │ 2. POST /api/login   │
       │                    │─────────────────────►│
       │                    │                      │
       │                    │   3. JWT Token        │
       │                    │◄─────────────────────│
       │                    │                      │
       │                    │ 4. Save to Context    │
       │                    │ ──────── ►           │
       │                    │                      │
       │  5. Redirect /home │                      │
       │ ◄──────────────────│                      │
       │                    │                      │
       │  6. Browse Recipes │                      │
       │ ──────────────────►│ 7. GET /api/recipes  │
       │                    │─────────────────────►│
       │                    │   (with JWT header)  │
       │                    │                      │
       │                    │  8. Recipe Data       │
       │  9. Display Data   │◄─────────────────────│
       │ ◄──────────────────│                      │
       └────────────────────┴──────────────────────┘
```

---

## 📊 Design Patterns

<div align="center">

| Pattern | Implementasi | Manfaat |
|:-------:|:------------:|---------|
| 🧩 **Component Pattern** | Setiap UI element adalah komponen terpisah | Reusable & maintainable |
| 🎣 **Custom Hook Pattern** | Logika bisnis terpisah dari UI | Testable & clean code |
| 🗃️ **Context Pattern** | Auth state management via React Context | Centralized state |
| 🛡️ **Route Guard Pattern** | `ProtectedRoute` & `GuestRoute` | Keamanan navigasi |
| 📁 **Feature-based Structure** | Folder dikelompokkan berdasarkan fungsi | Skalabilitas |
| 🎨 **CSS Modules Pattern** | Setiap komponen memiliki file CSS sendiri | Scoped styling |

</div>

---

## 🤝 Contributing

```bash
# 1. Fork repository ini
# 2. Buat branch fitur baru
git checkout -b feature/fitur-baru

# 3. Commit perubahan
git commit -m "feat: tambah fitur baru"

# 4. Push ke branch
git push origin feature/fitur-baru

# 5. Buat Pull Request
```

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:FF6B6B,50:FFA726,100:FFD93D&height=120&section=footer" width="100%" />

### 🍳 Ravano Secret Kitchen

**Dibuat dengan ❤️ oleh Ravano Akbar Widodo**

*BINUS University — Final Exam Project*

[![GitHub](https://img.shields.io/badge/GitHub-Ravano-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/)

</div>
