'use client';

import { Download, Eye } from 'lucide-react';

interface MonthlyCardProps {
  month: string;
  amount: string;
}

export default function MonthlyCard({ month, amount }: MonthlyCardProps) {
  return (
    <div className="bg-white p-3 rounded-xl relative cursor-pointer group">
      <p className="text-md opacity-90 mb-1">{month}</p>
      <p className="text-md font-semibold">{amount}</p>
      <div className="absolute inset-0 bg-gray-100 rounded-xl flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="px-2 py-1 rounded-md text-xs font-semibold text-white bg-orange-500 flex items-center gap-1">
          <Download className="w-3 h-3" />
          Download
        </button>
        <button className="px-2 py-1 rounded-md text-xs font-semibold text-white cjtp-primary flex items-center gap-1">
          <Eye className="w-3 h-3" />
          Detail
        </button>
      </div>
    </div>
  );
}
