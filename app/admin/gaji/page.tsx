'use client';

import { useState } from 'react';
import {
  Search,
  Filter,
  Download,
  Calendar,
  Eye,
  FileText,
  Wallet,
  TrendingUp,
  Users,
} from 'lucide-react';

const salaryData = [
  { id: 'MSS-22208', name: 'ASDAR', department: 'Operasional', position: 'Operator Alat Berat', baseSalary: 4500000, allowance: 500000, overtime: 500000, deduction: 0, total: 5500000, status: 'paid' },
  { id: 'MSS-22105', name: 'Ahmad Rizki', department: 'Produksi', position: 'Supervisor', baseSalary: 4200000, allowance: 500000, overtime: 500000, deduction: 0, total: 5200000, status: 'paid' },
  { id: 'MSS-22089', name: 'Siti Aminah', department: 'Admin', position: 'Staff Admin', baseSalary: 3800000, allowance: 500000, overtime: 500000, deduction: 0, total: 4800000, status: 'paid' },
  { id: 'MSS-22156', name: 'Budi Santoso', department: 'Logistik', position: 'Driver', baseSalary: 4000000, allowance: 500000, overtime: 600000, deduction: 0, total: 5100000, status: 'pending' },
  { id: 'MSS-22178', name: 'Dewi Lestari', department: 'HRD', position: 'HR Staff', baseSalary: 3900000, allowance: 500000, overtime: 500000, deduction: 0, total: 4900000, status: 'pending' },
  { id: 'MSS-22190', name: 'Eko Prasetyo', department: 'Operasional', position: 'Teknisi', baseSalary: 4100000, allowance: 500000, overtime: 700000, deduction: 0, total: 5300000, status: 'pending' },
];

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount);
};

export default function GajiPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('2026-01');

  const filteredData = salaryData.filter(
    (emp) =>
      emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalSalary = salaryData.reduce((sum, emp) => sum + emp.total, 0);
  const paidCount = salaryData.filter((e) => e.status === 'paid').length;
  const pendingCount = salaryData.filter((e) => e.status === 'pending').length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Penggajian</h1>
          <p className="text-sm text-gray-500">Kelola gaji karyawan</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-xl">
            <Calendar className="w-4 h-4 text-gray-500" />
            <input
              type="month"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="text-sm border-none focus:ring-0 p-0"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 cjtp-primary text-white rounded-xl font-medium hover-scale">
            <FileText className="w-5 h-5" />
            Generate Slip
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Total Gaji</p>
              <p className="text-xl font-bold">{formatCurrency(totalSalary)}</p>
            </div>
            <div className="bg-purple-500 p-3 rounded-xl">
              <Wallet className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Karyawan</p>
              <p className="text-xl font-bold">{salaryData.length}</p>
            </div>
            <div className="bg-blue-500 p-3 rounded-xl">
              <Users className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Sudah Dibayar</p>
              <p className="text-xl font-bold text-green-600">{paidCount}</p>
            </div>
            <div className="bg-green-500 p-3 rounded-xl">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Belum Dibayar</p>
              <p className="text-xl font-bold text-orange-600">{pendingCount}</p>
            </div>
            <div className="bg-orange-500 p-3 rounded-xl">
              <Wallet className="w-5 h-5 text-white" />
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
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50">
              <Filter className="w-4 h-4" />
              Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50">
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Karyawan</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Jabatan</th>
                <th className="text-right px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Gaji Pokok</th>
                <th className="text-right px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Tunjangan</th>
                <th className="text-right px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Lembur</th>
                <th className="text-right px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Total</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Status</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredData.map((emp) => (
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
                  <td className="px-6 py-4">
                    <p className="text-sm">{emp.position}</p>
                    <p className="text-xs text-gray-500">{emp.department}</p>
                  </td>
                  <td className="px-6 py-4 text-sm text-right">{formatCurrency(emp.baseSalary)}</td>
                  <td className="px-6 py-4 text-sm text-right text-green-600">+{formatCurrency(emp.allowance)}</td>
                  <td className="px-6 py-4 text-sm text-right text-blue-600">+{formatCurrency(emp.overtime)}</td>
                  <td className="px-6 py-4 text-sm text-right font-bold">{formatCurrency(emp.total)}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        emp.status === 'paid'
                          ? 'bg-green-100 text-green-600'
                          : 'bg-yellow-100 text-yellow-600'
                      }`}
                    >
                      {emp.status === 'paid' ? 'Dibayar' : 'Pending'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-1.5 hover:bg-gray-100 rounded-lg" title="Lihat Slip">
                        <Eye className="w-4 h-4 text-gray-500" />
                      </button>
                      <button className="p-1.5 hover:bg-gray-100 rounded-lg" title="Download">
                        <Download className="w-4 h-4 text-blue-500" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
