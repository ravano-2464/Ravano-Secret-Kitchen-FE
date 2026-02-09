<div align="center">

# 🍳 Rahasia Dapur

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
| 📱 **Responsif** | Tampilan optimal di desktop & mobile |

---

## 🎨 Screenshots

| Login | Register | Home |
|-------|----------|------|
| Form login dengan validasi | Form registrasi lengkap | Daftar resep dengan filter |

---

## 🚀 Instalasi

```bash
# Clone repository
git clone <repository-url>

# Masuk ke folder
cd Frontend

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Buka http://localhost:5173 di browser Anda.

---

## 📁 Struktur Proyek

```
Frontend/
├── 📄 index.html
├── 📄 package.json
├── 📄 vite.config.ts
├── 📄 tsconfig.json
│
└── 📂 src/
    ├── 📄 main.tsx              # Entry point
    ├── 📄 App.tsx               # Router setup
    ├── 📄 index.css             # Global styles
    │
    ├── 📂 components/           # Reusable components
    │   ├── 📄 Navbar.tsx        # Navigation bar (sticky)
    │   ├── 📄 Navbar.css
    │   ├── 📄 RecipeCard.tsx    # Card resep
    │   ├── 📄 RecipeCard.css
    │   ├── 📄 SearchBar.tsx     # Input pencarian
    │   ├── 📄 SearchBar.css
    │   ├── 📄 CategoryFilter.tsx # Filter kategori
    │   └── 📄 CategoryFilter.css
    │
    ├── 📂 pages/                # Halaman aplikasi
    │   ├── 📄 LoginPage.tsx     # Halaman login
    │   ├── 📄 LoginPage.css
    │   ├── 📄 RegisterPage.tsx  # Halaman registrasi
    │   ├── 📄 HomePage.tsx      # Halaman utama
    │   ├── 📄 HomePage.css
    │   ├── 📄 RecipeDetailPage.tsx  # Detail resep
    │   └── 📄 RecipeDetailPage.css
    │
    ├── 📂 hooks/                # Custom React Hooks
    │   ├── 📄 useLogin.ts       # Hook untuk login
    │   ├── 📄 useRegister.ts    # Hook untuk register
    │   ├── 📄 useRecipes.ts     # Hook untuk list resep
    │   └── 📄 useRecipeDetail.ts # Hook untuk detail resep
    │
    ├── 📂 data/                 # Mock data
    │   └── 📄 recipes.ts        # Data resep Indonesia
    │
    └── 📂 assets/               # Static assets
```

---

## 🛣️ Routing

| Path | Halaman | Deskripsi |
|------|---------|-----------|
| `/login` | LoginPage | Form login user |
| `/register` | RegisterPage | Form registrasi user baru |
| `/` | HomePage | Daftar resep dengan filter |
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

- 🥘 **Rendang Daging Sapi** - Masakan Utama
- 🍳 **Nasi Goreng Kampung** - Masakan Utama
- 🍲 **Soto Ayam Kuning** - Masakan Berkuah
- 🍰 **Kue Lapis Legit** - Kue dan Camilan
- 🍌 **Pisang Goreng Crispy** - Kue dan Camilan
- 🥗 **Sayur Asem Jakarta** - Sayuran

---

<div align="center">

**Made with ❤️ for Indonesian Food Lovers**

</div>
