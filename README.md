# Portal Karyawan + HR Dashboard

Aplikasi Portal Karyawan dengan HR Dashboard untuk manajemen karyawan, absensi, cuti, dan penggajian.

## Features

### Portal Karyawan (Mobile-First)
- **Beranda** - Ringkasan gaji bulanan dengan toggle visibility, kartu 12 bulan dengan hover actions
- **Cuti** - Sisa cuti, riwayat pengajuan, ajukan cuti baru
- **Absensi** - Statistik kehadiran, riwayat 7 hari terakhir, statistik bulanan
- **Profil** - Informasi karyawan, pengaturan akun, logout

### HR Dashboard (Desktop)
- **Dashboard** - Statistik karyawan, chart kehadiran, distribusi gaji, aktivitas terbaru
- **Karyawan** - Manajemen data karyawan (CRUD), search, filter, pagination
- **Absensi** - Rekap absensi harian, status hadir/telat/absen/cuti
- **Pengajuan Cuti** - Approve/reject pengajuan, filter status
- **Penggajian** - Slip gaji, generate slip, export data
- **Pengaturan** - Konfigurasi perusahaan, jam kerja, notifikasi, backup

## Tech Stack

- **Framework:** Next.js 16.1.6
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide React
- **Font:** Chirp (Custom)

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/nadihero/portal-karyawan-with-hr-dasboard.git

# Navigate to project
cd portal-karyawan-with-hr-dasboard

# Install dependencies
npm install

# Run development server
npm run dev
```

### Access

- **Portal Karyawan:** http://localhost:3000
- **HR Dashboard:** http://localhost:3000/admin

## Project Structure

```
app/
├── layout.tsx              # Root layout
├── globals.css             # Global styles + custom CSS
├── components/             # Shared components
│   ├── Header.tsx
│   ├── BottomNav.tsx
│   ├── BalanceCard.tsx
│   └── MonthlyCard.tsx
├── (portal)/               # Portal Karyawan (Mobile)
│   ├── layout.tsx          # Mobile frame wrapper
│   ├── page.tsx            # Beranda
│   ├── cuti/page.tsx
│   ├── absensi/page.tsx
│   └── profil/page.tsx
└── admin/                  # HR Dashboard (Desktop)
    ├── layout.tsx          # Sidebar + Header
    ├── page.tsx            # Dashboard
    ├── karyawan/page.tsx
    ├── absensi/page.tsx
    ├── cuti/page.tsx
    ├── gaji/page.tsx
    └── pengaturan/page.tsx

public/
├── fonts/                  # Chirp font files
└── img/                    # Images (cubes.png, user.jpeg)
```

## Screenshots

### Portal Karyawan
- Mobile-first design dengan max-width 448px
- Bottom navigation dengan 4 menu
- Balance toggle untuk privasi

### HR Dashboard
- Full-width desktop layout
- Fixed sidebar 288px dengan navigasi
- Header dengan search, notifikasi, profile

## License

MIT License

## Author

Tawaharu Team - 2026
