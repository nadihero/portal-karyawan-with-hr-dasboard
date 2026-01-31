import Header from '../../components/Header';
import { Plus, CalendarDays } from 'lucide-react';

const cutiHistory = [
  { type: 'Cuti Tahunan', date: '15 - 17 Desember 2025', days: '3 Hari', status: 'approved' },
  { type: 'Cuti Sakit', date: '5 November 2025', days: '1 Hari', status: 'approved' },
  { type: 'Cuti Tahunan', date: '20 - 22 Agustus 2025', days: '3 Hari', status: 'approved' },
  { type: 'Cuti Tahunan', date: '10 - 12 Januari 2026', days: '3 Hari', status: 'pending' },
  { type: 'Cuti Tahunan', date: '1 - 3 Juli 2025', days: '3 Hari', status: 'rejected' },
];

const statusStyles = {
  approved: 'bg-green-100 text-green-600',
  pending: 'bg-yellow-100 text-yellow-600',
  rejected: 'bg-red-100 text-red-600',
};

const statusLabels = {
  approved: 'Disetujui',
  pending: 'Menunggu',
  rejected: 'Ditolak',
};

export default function CutiPage() {
  return (
    <>
      <Header title="Pengajuan Cuti" />
      <main className="flex-1">
        <div className="bg-custom p-3 rounded-t-3xl min-h-full">
          {/* Summary Card */}
          <section className="bg-white p-5 rounded-2xl">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-md opacity-90 mb-1">Sisa Cuti Tahunan</p>
                <p className="text-3xl font-bold text-green-600">8 Hari</p>
              </div>
              <CalendarDays className="w-8 h-8 text-blue-500" />
            </div>
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="bg-blue-50 p-3 rounded-xl text-center">
                <p className="text-xs opacity-90 mb-1">Total</p>
                <p className="text-lg font-semibold text-blue-600">12</p>
              </div>
              <div className="bg-orange-50 p-3 rounded-xl text-center">
                <p className="text-xs opacity-90 mb-1">Terpakai</p>
                <p className="text-lg font-semibold text-orange-600">4</p>
              </div>
              <div className="bg-green-50 p-3 rounded-xl text-center">
                <p className="text-xs opacity-90 mb-1">Sisa</p>
                <p className="text-lg font-semibold text-green-600">8</p>
              </div>
            </div>
            <button className="w-full cjtp-accent text-white py-3 px-4 rounded-lg font-semibold hover-scale flex items-center justify-center">
              <Plus className="w-5 h-5 mr-2" />
              Ajukan Cuti Baru
            </button>
          </section>

          {/* Riwayat Cuti */}
          <section className="bg-white p-4 mt-3 rounded-2xl">
            <h3 className="text-md font-semibold mb-3">Riwayat Pengajuan Cuti</h3>
            <div className="space-y-3">
              {cutiHistory.map((cuti, index) => (
                <div key={index} className="border border-gray-100 p-3 rounded-xl">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="text-sm font-semibold">{cuti.type}</p>
                      <p className="text-xs text-gray-500">{cuti.date}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${statusStyles[cuti.status as keyof typeof statusStyles]}`}>
                      {statusLabels[cuti.status as keyof typeof statusLabels]}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">{cuti.days}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
