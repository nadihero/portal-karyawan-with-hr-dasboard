import Header from '../../components/Header';
import { Clock, Download, Check, Coffee } from 'lucide-react';

const attendanceHistory = [
  { date: 'Jumat, 31 Jan 2026', time: 'Masuk: 07:45 | Pulang: 17:00', status: 'present' },
  { date: 'Kamis, 30 Jan 2026', time: 'Masuk: 07:50 | Pulang: 17:15', status: 'present' },
  { date: 'Rabu, 29 Jan 2026', time: 'Masuk: 08:15 | Pulang: 17:00', status: 'late' },
  { date: 'Selasa, 28 Jan 2026', time: 'Masuk: 07:30 | Pulang: 17:00', status: 'present' },
  { date: 'Senin, 27 Jan 2026', time: 'Masuk: 07:55 | Pulang: 17:30', status: 'present' },
  { date: 'Minggu, 26 Jan 2026', time: 'Hari Libur', status: 'holiday' },
  { date: 'Sabtu, 25 Jan 2026', time: 'Hari Libur', status: 'holiday' },
];

const monthlyStats = [
  { month: 'Desember 2025', days: '27 Hari', percentage: '100%', color: 'text-green-600' },
  { month: 'November 2025', days: '25 Hari', percentage: '96%', color: 'text-green-600' },
  { month: 'Oktober 2025', days: '26 Hari', percentage: '100%', color: 'text-green-600' },
  { month: 'September 2025', days: '24 Hari', percentage: '92%', color: 'text-yellow-600' },
  { month: 'Agustus 2025', days: '23 Hari', percentage: '100%', color: 'text-green-600' },
  { month: 'Juli 2025', days: '26 Hari', percentage: '100%', color: 'text-green-600' },
];

const statusConfig = {
  present: { icon: Check, bg: 'bg-green-100', iconColor: 'text-green-600', label: 'Hadir', labelBg: 'bg-green-100 text-green-600' },
  late: { icon: Clock, bg: 'bg-yellow-100', iconColor: 'text-yellow-600', label: 'Telat', labelBg: 'bg-yellow-100 text-yellow-600' },
  holiday: { icon: Coffee, bg: 'bg-gray-100', iconColor: 'text-gray-500', label: 'Libur', labelBg: 'bg-gray-100 text-gray-500' },
};

export default function AbsensiPage() {
  return (
    <>
      <Header title="Rekap Absensi" />
      <main className="flex-1">
        <div className="bg-custom p-3 rounded-t-3xl min-h-full">
          {/* Summary Card */}
          <section className="bg-white p-5 rounded-2xl">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-md opacity-90 mb-1">Bulan Ini (Januari 2026)</p>
                <p className="text-3xl font-bold text-green-600">95%</p>
                <p className="text-xs text-gray-500">Tingkat Kehadiran</p>
              </div>
              <Clock className="w-8 h-8 text-blue-500" />
            </div>
            <div className="grid grid-cols-4 gap-2 mb-4">
              <div className="bg-green-50 p-2 rounded-xl text-center">
                <p className="text-xs opacity-90 mb-1">Hadir</p>
                <p className="text-lg font-semibold text-green-600">19</p>
              </div>
              <div className="bg-red-50 p-2 rounded-xl text-center">
                <p className="text-xs opacity-90 mb-1">Absen</p>
                <p className="text-lg font-semibold text-red-600">1</p>
              </div>
              <div className="bg-yellow-50 p-2 rounded-xl text-center">
                <p className="text-xs opacity-90 mb-1">Telat</p>
                <p className="text-lg font-semibold text-yellow-600">2</p>
              </div>
              <div className="bg-blue-50 p-2 rounded-xl text-center">
                <p className="text-xs opacity-90 mb-1">Cuti</p>
                <p className="text-lg font-semibold text-blue-600">0</p>
              </div>
            </div>
            <button className="w-full cjtp-accent text-white py-3 px-4 rounded-lg font-semibold hover-scale flex items-center justify-center">
              <Download className="w-5 h-5 mr-2" />
              Download Rekap
            </button>
          </section>

          {/* Riwayat Absensi Harian */}
          <section className="bg-white p-4 mt-3 rounded-2xl">
            <h3 className="text-md font-semibold mb-3">Riwayat Absensi (7 Hari Terakhir)</h3>
            <div className="space-y-2">
              {attendanceHistory.map((item, index) => {
                const config = statusConfig[item.status as keyof typeof statusConfig];
                const Icon = config.icon;
                return (
                  <div key={index} className={`flex items-center justify-between ${index < attendanceHistory.length - 1 ? 'border-b border-gray-50 pb-2' : ''}`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 ${config.bg} rounded-full flex items-center justify-center`}>
                        <Icon className={`w-5 h-5 ${config.iconColor}`} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{item.date}</p>
                        <p className="text-xs text-gray-500">{item.time}</p>
                      </div>
                    </div>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${config.labelBg}`}>
                      {config.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Statistik Bulanan */}
          <section className="bg-white p-4 mt-3 rounded-2xl">
            <h3 className="text-md font-semibold mb-3">Statistik 6 Bulan Terakhir</h3>
            <div className="grid grid-cols-2 gap-3">
              {monthlyStats.map((stat, index) => (
                <div key={index} className="border border-gray-100 p-3 rounded-xl">
                  <p className="text-xs text-gray-500 mb-1">{stat.month}</p>
                  <p className="text-lg font-semibold">{stat.days}</p>
                  <p className={`text-xs ${stat.color}`}>{stat.percentage} Kehadiran</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
