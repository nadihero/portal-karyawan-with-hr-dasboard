'use client';

import Link from 'next/link';
import { Home, ArrowLeftRight, TrendingUp, User } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', icon: Home, label: 'Beranda' },
    { href: '/cuti', icon: ArrowLeftRight, label: 'Cuti' },
    { href: '/absensi', icon: TrendingUp, label: 'Absensi' },
    { href: '/profil', icon: User, label: 'Profil' },
  ];

  return (
    <nav className="bg-white border-t border-gray-50 py-2 sticky bottom-0 z-40">
      <div className="grid grid-cols-4 gap-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center py-2 hover-scale ${isActive ? 'text-blue-500' : 'text-gray-500 hover:text-blue-500'
                }`}
            >
              <Icon className="w-5 h-5 mb-1" />
              <span className="text-xs">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
