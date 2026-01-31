import {
  Users,
  CalendarCheck,
  ClipboardList,
  Wallet,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';

const statsCards = [
  {
    title: 'Total Karyawan',
    value: '156',
    change: '+12',
    changeType: 'increase',
    icon: Users,
    color: 'bg-blue-500',
  },
  {
    title: 'Hadir Hari Ini',
    value: '142',
    change: '91%',
    changeType: 'increase',
    icon: CalendarCheck,
    color: 'bg-green-500',
  },
  {
    title: 'Pengajuan Cuti',
    value: '8',
    change: '3 pending',
    changeType: 'neutral',
    icon: ClipboardList,
    color: 'bg-orange-500',
  },
  {
    title: 'Total Gaji Bulan Ini',
    value: 'Rp 856.5 Jt',
    change: '+5.2%',
    changeType: 'increase',
    icon: Wallet,
    color: 'bg-purple-500',
  },
];

const recentActivities = [
  { user: 'Ahmad Rizki', action: 'Mengajukan cuti', time: '5 menit lalu', type: 'cuti' },
  { user: 'Siti Aminah', action: 'Absen masuk', time: '15 menit lalu', type: 'absen' },
  { user: 'Budi Santoso', action: 'Cuti disetujui', time: '1 jam lalu', type: 'approved' },
  { user: 'Dewi Lestari', action: 'Update profil', time: '2 jam lalu', type: 'profile' },
  { user: 'Eko Prasetyo', action: 'Absen pulang', time: '3 jam lalu', type: 'absen' },
];

const topEmployees = [
  { name: 'ASDAR', department: 'Operasional', attendance: '100%', salary: 'Rp 5.500.000' },
  { name: 'Ahmad Rizki', department: 'Produksi', attendance: '98%', salary: 'Rp 5.200.000' },
  { name: 'Siti Aminah', department: 'Admin', attendance: '96%', salary: 'Rp 4.800.000' },
  { name: 'Budi Santoso', department: 'Logistik', attendance: '95%', salary: 'Rp 5.100.000' },
  { name: 'Dewi Lestari', department: 'HRD', attendance: '94%', salary: 'Rp 4.900.000' },
];

const pendingApprovals = [
  { name: 'Ahmad Rizki', type: 'Cuti Tahunan', date: '10-12 Feb 2026', days: 3 },
  { name: 'Eko Prasetyo', type: 'Cuti Sakit', date: '5 Feb 2026', days: 1 },
  { name: 'Siti Aminah', type: 'Cuti Tahunan', date: '15-17 Feb 2026', days: 3 },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-2xl p-5 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-500 mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <div className="flex items-center gap-1 mt-2">
                    {stat.changeType === 'increase' ? (
                      <ArrowUpRight className="w-4 h-4 text-green-500" />
                    ) : stat.changeType === 'decrease' ? (
                      <ArrowDownRight className="w-4 h-4 text-red-500" />
                    ) : null}
                    <span
                      className={`text-xs font-medium ${
                        stat.changeType === 'increase'
                          ? 'text-green-500'
                          : stat.changeType === 'decrease'
                          ? 'text-red-500'
                          : 'text-gray-500'
                      }`}
                    >
                      {stat.change}
                    </span>
                  </div>
                </div>
                <div className={`${stat.color} p-3 rounded-xl`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Attendance Chart Placeholder */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Statistik Kehadiran</h3>
            <select className="text-sm border border-gray-200 rounded-lg px-3 py-1">
              <option>7 Hari Terakhir</option>
              <option>30 Hari Terakhir</option>
              <option>Bulan Ini</option>
            </select>
          </div>
          <div className="h-48 flex items-end justify-between gap-2">
            {['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'].map((day, i) => {
              const heights = [85, 92, 88, 95, 90, 45, 30];
              return (
                <div key={day} className="flex-1 flex flex-col items-center gap-2">
                  <div
                    className="w-full bg-blue-500 rounded-t-lg transition-all"
                    style={{ height: `${heights[i]}%` }}
                  />
                  <span className="text-xs text-gray-500">{day}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Salary Distribution */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Distribusi Gaji per Departemen</h3>
          </div>
          <div className="space-y-4">
            {[
              { dept: 'Operasional', amount: 'Rp 320 Jt', percent: 37 },
              { dept: 'Produksi', amount: 'Rp 250 Jt', percent: 29 },
              { dept: 'Admin', amount: 'Rp 150 Jt', percent: 18 },
              { dept: 'Logistik', amount: 'Rp 136.5 Jt', percent: 16 },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{item.dept}</span>
                  <span className="font-medium">{item.amount}</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${item.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activities */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="font-semibold mb-4">Aktivitas Terbaru</h3>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start gap-3">
                <div
                  className={`w-2 h-2 rounded-full mt-2 ${
                    activity.type === 'cuti'
                      ? 'bg-orange-500'
                      : activity.type === 'approved'
                      ? 'bg-green-500'
                      : activity.type === 'absen'
                      ? 'bg-blue-500'
                      : 'bg-gray-400'
                  }`}
                />
                <div className="flex-1">
                  <p className="text-sm">
                    <span className="font-medium">{activity.user}</span>{' '}
                    <span className="text-gray-500">{activity.action}</span>
                  </p>
                  <p className="text-xs text-gray-400">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Employees */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="font-semibold mb-4">Karyawan Terbaik</h3>
          <div className="space-y-3">
            {topEmployees.map((emp, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{emp.name}</p>
                    <p className="text-xs text-gray-500">{emp.department}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-green-600">{emp.attendance}</p>
                  <p className="text-xs text-gray-500">{emp.salary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Approvals */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Menunggu Persetujuan</h3>
            <span className="px-2 py-1 bg-orange-100 text-orange-600 text-xs font-semibold rounded-full">
              {pendingApprovals.length} pending
            </span>
          </div>
          <div className="space-y-3">
            {pendingApprovals.map((item, index) => (
              <div key={index} className="border border-gray-100 rounded-xl p-3">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.type}</p>
                  </div>
                  <span className="text-xs text-gray-500">{item.days} hari</span>
                </div>
                <p className="text-xs text-gray-400 mb-3">{item.date}</p>
                <div className="flex gap-2">
                  <button className="flex-1 py-1.5 text-xs font-medium text-white bg-green-500 rounded-lg hover:bg-green-600">
                    Setujui
                  </button>
                  <button className="flex-1 py-1.5 text-xs font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100">
                    Tolak
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
