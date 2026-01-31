'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import {
  LayoutDashboard,
  Users,
  CalendarCheck,
  ClipboardList,
  Wallet,
  Settings,
  LogOut,
  Bell,
  Search,
  ChevronDown,
} from 'lucide-react';

const sidebarItems = [
  { href: '/admin', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/admin/karyawan', icon: Users, label: 'Karyawan' },
  { href: '/admin/absensi', icon: CalendarCheck, label: 'Absensi' },
  { href: '/admin/cuti', icon: ClipboardList, label: 'Pengajuan Cuti' },
  { href: '/admin/gaji', icon: Wallet, label: 'Penggajian' },
  { href: '/admin/pengaturan', icon: Settings, label: 'Pengaturan' },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const getPageTitle = () => {
    const currentItem = sidebarItems.find((item) => item.href === pathname);
    return currentItem?.label || 'Dashboard';
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar - Fixed Desktop */}
      <aside className="fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-200">
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="h-16 px-6 flex items-center border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 cjtp-primary rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <div>
                <h1 className="font-bold text-lg text-gray-900">Tawaharu</h1>
                <p className="text-xs text-gray-500">Admin Panel</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            <p className="px-4 mb-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Menu Utama</p>
            {sidebarItems.slice(0, 4).map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${isActive
                      ? 'cjtp-primary text-white shadow-lg shadow-blue-500/30'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                  {item.label === 'Pengajuan Cuti' && !isActive && (
                    <span className="ml-auto px-2 py-0.5 text-xs font-semibold bg-orange-100 text-orange-600 rounded-full">3</span>
                  )}
                </Link>
              );
            })}

            <p className="px-4 mt-8 mb-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Lainnya</p>
            {sidebarItems.slice(4).map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${isActive
                      ? 'cjtp-primary text-white shadow-lg shadow-blue-500/30'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* User Info */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
              <Image
                src="/img/user.jpeg"
                alt="Admin"
                width={44}
                height={44}
                className="w-11 h-11 rounded-xl object-cover"
              />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm text-gray-900 truncate">Administrator</p>
                <p className="text-xs text-gray-500 truncate">admin@tawaharu.id</p>
              </div>
              <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Keluar">
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content - With Left Margin for Sidebar */}
      <div className="flex-1 ml-72 flex flex-col min-h-screen">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-gray-200 sticky top-0 z-30">
          <div className="h-full px-8 flex items-center justify-between">
            {/* Left - Page Title & Breadcrumb */}
            <div>
              <h2 className="text-xl font-bold text-gray-900">{getPageTitle()}</h2>
              <p className="text-sm text-gray-500">Selamat datang kembali, Administrator</p>
            </div>

            {/* Right - Search, Notifications, Profile */}
            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Cari..."
                  className="w-64 pl-10 pr-4 py-2 bg-gray-100 border-0 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                />
              </div>

              {/* Notifications */}
              <button className="relative p-2.5 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
              </button>

              {/* Profile Dropdown */}
              <button className="flex items-center gap-3 p-1.5 pr-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors">
                <Image
                  src="/img/user.jpeg"
                  alt="Admin"
                  width={36}
                  height={36}
                  className="w-9 h-9 rounded-lg object-cover"
                />
                <div className="text-left">
                  <p className="text-sm font-semibold text-gray-900">Admin</p>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>

        {/* Footer */}
        <footer className="h-14 px-8 bg-white border-t border-gray-200 flex items-center justify-between">
          <p className="text-sm text-gray-500">© 2026 Tawaharu. All rights reserved.</p>
          <p className="text-sm text-gray-400">Portal Karyawan v1.0.0</p>
        </footer>
      </div>
    </div>
  );
}
