'use client';

import { useState } from 'react';
import { Eye, EyeOff, Download, PanelBottom } from 'lucide-react';

interface BalanceCardProps {
  month: string;
  amount: string;
  attendance: number;
  workHours: string;
}

export default function BalanceCard({ month, amount, attendance, workHours }: BalanceCardProps) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <section className="bg-white p-5 rounded-2xl">
      <div className="flex justify-between items-start mb-6">
        <div>
          <p className="text-md opacity-90 mb-1">{month}</p>
          <p className="text-3xl font-bold">
            {isVisible ? amount : 'Rp ••••••••'}
          </p>
        </div>
        <button onClick={toggleVisibility} className="cursor-pointer hover-scale">
          {isVisible ? <Eye className="w-6 h-6" /> : <EyeOff className="w-6 h-6" />}
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-gray-50 p-3 rounded-xl">
          <p className="text-md opacity-90 mb-1">Kehadiran</p>
          <p className="text-lg font-semibold">{attendance}</p>
        </div>
        <div className="bg-gray-50 p-3 rounded-xl">
          <p className="text-md opacity-90 mb-1">HM (Operator/Driver)*</p>
          <p className="text-lg font-semibold">{workHours}</p>
        </div>
      </div>
      <div className="flex space-x-3">
        <button className="flex-1 cjtp-accent text-white py-3 px-4 rounded-lg font-semibold hover-scale flex items-center justify-center">
          <Download className="w-5 h-5 mr-2" />
          Download
        </button>
        <button className="flex-1 cjtp-primary text-white py-3 px-4 rounded-lg font-semibold hover-scale flex items-center justify-center">
          <PanelBottom className="w-5 h-5 mr-2" />
          Detail
        </button>
      </div>
    </section>
  );
}
