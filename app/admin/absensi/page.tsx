'use client';

import { useState } from 'react';
import {
  Search,
  Filter,
  Download,
  Calendar,
  Check,
  X,
  Clock,
  Coffee,
} from 'lucide-react';

const attendanceData = [
  { id: 'MSS-22208', name: 'ASDAR', department: 'Operasional', checkIn: '07:45', checkOut: '17:00', status: 'present', workHours: '9h 15m' },
  { id: 'MSS-22105', name: 'Ahmad Rizki', department: 'Produksi', checkIn: '07:50', checkOut: '17:15', status: 'present', workHours: '9h 25m' },
  { id: 'MSS-22089', name: 'Siti Aminah', department: 'Admin', checkIn: '08:15', checkOut: '17:00', status: 'late', workHours: '8h 45m' },
  { id: 'MSS-22156', name: 'Budi Santoso', department: 'Logistik', checkIn: '07:30', checkOut: '17:00', status: 'present', workHours: '9h 30m' },
  { id: 'MSS-22178', name: 'Dewi Lestari', department: 'HRD', checkIn: '-', checkOut: '-', status: 'absent', workHours: '-' },
  { id: 'MSS-22190', name: 'Eko Prasetyo', department: 'Operasional', checkIn: '07:55', checkOut: '17:30', status: 'present', workHours: '9h 35m' },
  { id: 'MSS-22201', name: 'Fitri Handayani', department: 'Finance', checkIn: '-', checkOut: '-', status: 'leave', workHours: '-' },
  { id: 'MSS-22215', name: 'Gunawan', department: 'Produksi', checkIn: '08:05', checkOut: '17:00', status: 'late', workHours: '8h 55m' },
];

const statusConfig = {
  present: { label: 'Hadir', bg: 'bg-green-100 text-green-600', icon: Check },
  late: { label: 'Telat', bg: 'bg-yellow-100 text-yellow-600', icon: Clock },
  absent: { label: 'Absen', bg: 'bg-red-100 text-red-600', icon: X },
  leave: { label: 'Cuti', bg: 'bg-blue-100 text-blue-600', icon: Coffee },
};

export default function AbsensiAdminPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDate, setSelectedDate] = useState('2026-01-31');

  const filteredData = attendanceData.filter(
    (emp) =>
      emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = {
    present: attendanceData.filter((e) => e.status === 'present').length,
    late: attendanceData.filter((e) => e.status === 'late').length,
    absent: attendanceData.filter((e) => e.status === 'absent').length,
    leave: attendanceData.filter((e) => e.status === 'leave').length,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Rekap Absensi</h1>
          <p className="text-sm text-gray-500">Pantau kehadiran karyawan</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-xl">
            <Calendar className="w-4 h-4 text-gray-500" />
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="text-sm border-none focus:ring-0 p-0"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 cjtp-primary text-white rounded-xl font-medium hover-scale">
            <Download className="w-5 h-5" />
            Export
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
              <Check className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold">{stats.present}</p>
              <p className="text-xs text-gray-500">Hadir</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Clock className="w-5 h-5 text-yellow-600" />
            </div>
            <div>
              <p className="text-2xl font-bold">{stats.late}</p>
              <p className="text-xs text-gray-500">Telat</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
              <X className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <p className="text-2xl font-bold">{stats.absent}</p>
              <p className="text-xs text-gray-500">Absen</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
              <Coffee className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold">{stats.leave}</p>
              <p className="text-xs text-gray-500">Cuti</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Cari nama atau ID karyawan..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50">
            <Filter className="w-4 h-4" />
            Filter
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Karyawan</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Departemen</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Jam Masuk</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Jam Pulang</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Total Jam</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredData.map((emp) => {
                const config = statusConfig[emp.status as keyof typeof statusConfig];
                return (
                  <tr key={emp.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-blue-600">
                            {emp.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-medium">{emp.name}</p>
                          <p className="text-xs text-gray-500">{emp.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{emp.department}</td>
                    <td className="px-6 py-4 text-sm font-medium">{emp.checkIn}</td>
                    <td className="px-6 py-4 text-sm font-medium">{emp.checkOut}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{emp.workHours}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${config.bg}`}>
                        {config.label}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
