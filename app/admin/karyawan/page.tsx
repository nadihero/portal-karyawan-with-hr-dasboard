'use client';

import { useState } from 'react';
import {
  Search,
  Plus,
  Filter,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  Download,
} from 'lucide-react';

const employees = [
  { id: 'MSS-22208', name: 'ASDAR', department: 'Operasional', position: 'Operator Alat Berat', status: 'active', joinDate: '15 Jan 2020' },
  { id: 'MSS-22105', name: 'Ahmad Rizki', department: 'Produksi', position: 'Supervisor', status: 'active', joinDate: '20 Mar 2019' },
  { id: 'MSS-22089', name: 'Siti Aminah', department: 'Admin', position: 'Staff Admin', status: 'active', joinDate: '10 Jun 2021' },
  { id: 'MSS-22156', name: 'Budi Santoso', department: 'Logistik', position: 'Driver', status: 'active', joinDate: '05 Sep 2020' },
  { id: 'MSS-22178', name: 'Dewi Lestari', department: 'HRD', position: 'HR Staff', status: 'active', joinDate: '12 Feb 2022' },
  { id: 'MSS-22190', name: 'Eko Prasetyo', department: 'Operasional', position: 'Teknisi', status: 'inactive', joinDate: '08 Nov 2021' },
  { id: 'MSS-22201', name: 'Fitri Handayani', department: 'Finance', position: 'Accountant', status: 'active', joinDate: '25 Apr 2023' },
  { id: 'MSS-22215', name: 'Gunawan', department: 'Produksi', position: 'Operator Mesin', status: 'active', joinDate: '30 Jul 2022' },
];

export default function KaryawanPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEmployees = employees.filter(
    (emp) =>
      emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Manajemen Karyawan</h1>
          <p className="text-sm text-gray-500">Kelola data karyawan perusahaan</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 cjtp-primary text-white rounded-xl font-medium hover-scale">
          <Plus className="w-5 h-5" />
          Tambah Karyawan
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Cari nama, ID, atau departemen..."
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
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">ID Karyawan</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Nama</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Departemen</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Jabatan</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Status</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Tanggal Masuk</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredEmployees.map((emp) => (
                <tr key={emp.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium">{emp.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-blue-600">
                          {emp.name.charAt(0)}
                        </span>
                      </div>
                      <span className="text-sm font-medium">{emp.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{emp.department}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{emp.position}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        emp.status === 'active'
                          ? 'bg-green-100 text-green-600'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {emp.status === 'active' ? 'Aktif' : 'Nonaktif'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{emp.joinDate}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-1.5 hover:bg-gray-100 rounded-lg" title="Lihat">
                        <Eye className="w-4 h-4 text-gray-500" />
                      </button>
                      <button className="p-1.5 hover:bg-gray-100 rounded-lg" title="Edit">
                        <Edit className="w-4 h-4 text-blue-500" />
                      </button>
                      <button className="p-1.5 hover:bg-gray-100 rounded-lg" title="Hapus">
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
          <p className="text-sm text-gray-500">
            Menampilkan {filteredEmployees.length} dari {employees.length} karyawan
          </p>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 text-sm border border-gray-200 rounded-lg hover:bg-gray-50">
              Sebelumnya
            </button>
            <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded-lg">1</button>
            <button className="px-3 py-1 text-sm border border-gray-200 rounded-lg hover:bg-gray-50">
              2
            </button>
            <button className="px-3 py-1 text-sm border border-gray-200 rounded-lg hover:bg-gray-50">
              Selanjutnya
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
