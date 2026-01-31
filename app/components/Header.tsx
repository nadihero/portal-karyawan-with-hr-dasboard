'use client';

import Image from 'next/image';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export default function Header({ title, subtitle = 'ID CARD: MSS-22208' }: HeaderProps) {
  return (
    <header className="text-white p-5 top-0 cjtp-primary" id="header">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div>
            <h5 className="text-xl font-bold">{title}</h5>
            <p className="text-md opacity-90">{subtitle}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
            <Image
              src="/img/user.jpeg"
              alt="Profile"
              width={64}
              height={64}
              className="w-16 h-16 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
