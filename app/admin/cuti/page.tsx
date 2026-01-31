'use client';

import { useState } from 'react';
import {
  Search,
  Filter,
  Check,
  X,
  Clock,
  Eye,
} from 'lucide-react';

const cutiRequests = [
  { id: 1, name: 'Ahmad Rizki', department: 'Produksi', type: 'Cuti Tahunan', startDate: '10 Feb 2026', endDate: '12 Feb 2026', days: 3, reason: 'Acara keluarga', status: 'pending', requestDate: '28 Jan 2026' },
  { id: 2, name: 'Eko Prasetyo', department: 'Operasional', type: 'Cuti Sakit', startDate: '5 Feb 2026', endDate: '5 Feb 2026', days: 1, reason: 'Sakit demam', status: 'pending', requestDate: '29 Jan 2026' },
  { id: 3, name: 'Siti Aminah', department: 'Admin', type: 'Cuti Tahunan', startDate: '15 Feb 2026', endDate: '17 Feb 2026', days: 3, reason: 'Liburan', status: 'pending', requestDate: '30 Jan 2026' },
  { id: 4, name: 'ASDAR', department: 'Operasional', type: 'Cuti Tahunan', startDate: '15 Des 2025', endDate: '17 Des 2025', days: 3, reason: 'Urusan pribadi', status: 'approved', requestDate: '10 Des 2025' },
  { id: 5, name: 'Budi Santoso', department: 'Logistik', type: 'Cuti Tahunan', startDate: '20 Nov 2025', endDate: '22 Nov 2025', days: 3, reason: 'Pernikahan saudara', status: 'approved', requestDate: '15 Nov 2025' },
  { id: 6, name: 'Dewi Lestari', department: 'HRD', type: 'Cuti Tahunan', startDate: '1 Jul 2025', endDate: '3 Jul 2025', days: 3, reason: 'Liburan keluarga', status: 'rejected', requestDate: '25 Jun 2025' },
];

const statusConfig = {
  pending: { label: 'Menunggu', bg: 'bg-yellow-100 text-yellow-600' },
  approved: { label: 'Disetujui', bg: 'bg-green-100 text-green-600' },
  rejected: { label: 'Ditolak', bg: 'bg-red-100 text-red-600' },
};

export default function CutiAdminPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredData = cutiRequests.filter((req) => {
    const matchSearch =
      req.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      req.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchStatus = filterStatus === 'all' || req.status === filterStatus;
    return matchSearch && matchStatus;
  });

  const stats = {
    pending: cutiRequests.filter((r) => r.status === 'pending').length,
    approved: cutiRequests.filter((r) => r.status === 'approved').length,
    rejected: cutiRequests.filter((r) => r.status === 'rejected').length,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Pengajuan Cuti</h1>
        <p className="text-sm text-gray-500">Kelola permohonan cuti karyawan</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Clock className="w-5 h-5 text-yellow-600" />
            </div>
            <div>
              <p className="text-2xl font-bold">{stats.pending}</p>
              <p className="text-xs text-gray-500">Menunggu</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
              <Check className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold">{stats.approved}</p>
              <p className="text-xs text-gray-500">Disetujui</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
              <X className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <p className="text-2xl font-bold">{stats.rejected}</p>
              <p className="text-xs text-gray-500">Ditolak</p>
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
              placeholder="Cari nama atau departemen..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="all">Semua Status</option>
            <option value="pending">Menunggu</option>
            <option value="approved">Disetujui</option>
            <option value="rejected">Ditolak</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Karyawan</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Jenis Cuti</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Tanggal</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Durasi</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Alasan</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Status</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredData.map((req) => {
                const config = statusConfig[req.status as keyof typeof statusConfig];
                return (
                  <tr key={req.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-blue-600">
                            {req.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-medium">{req.name}</p>
                          <p className="text-xs text-gray-500">{req.department}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm">{req.type}</td>
                    <td className="px-6 py-4">
                      <p className="text-sm">{req.startDate}</p>
                      {req.startDate !== req.endDate && (
                        <p className="text-xs text-gray-500">s/d {req.endDate}</p>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm">{req.days} hari</td>
                    <td className="px-6 py-4 text-sm text-gray-600 max-w-[150px] truncate">{req.reason}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${config.bg}`}>
                        {config.label}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {req.status === 'pending' ? (
                        <div className="flex items-center gap-2">
                          <button className="p-1.5 bg-green-500 text-white rounded-lg hover:bg-green-600" title="Setujui">
                            <Check className="w-4 h-4" />
                          </button>
                          <button className="p-1.5 bg-red-500 text-white rounded-lg hover:bg-red-600" title="Tolak">
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <button className="p-1.5 hover:bg-gray-100 rounded-lg" title="Lihat Detail">
                          <Eye className="w-4 h-4 text-gray-500" />
                        </button>
                      )}
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
