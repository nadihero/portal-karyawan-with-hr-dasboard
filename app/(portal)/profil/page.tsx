'use client';

import Image from 'next/image';
import Header from '../../components/Header';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Building2,
  Briefcase,
  Calendar,
  Bell,
  Lock,
  LogOut,
  ChevronRight,
  Moon,
  Globe
} from 'lucide-react';

const profileData = {
  name: 'ASDAR',
  email: 'asdar@tawaharu.id',
  phone: '+62 812 3456 7890',
  address: 'Jl. Sudirman No. 123, Jakarta',
  department: 'Operasional',
  position: 'Operator Alat Berat',
  joinDate: '15 Januari 2020',
  idCard: 'MSS-22208',
};

const menuItems = [
  { icon: User, label: 'Edit Profil', href: '#' },
  { icon: Lock, label: 'Ubah Password', href: '#' },
  { icon: Bell, label: 'Notifikasi', href: '#', badge: '3' },
  { icon: Moon, label: 'Mode Gelap', href: '#', toggle: true },
  { icon: Globe, label: 'Bahasa', href: '#', value: 'Indonesia' },
];

export default function ProfilPage() {
  return (
    <>
      <Header title="Profil & Pengaturan" />
      <main className="flex-1">
        <div className="bg-custom p-3 rounded-t-3xl min-h-full">
          {/* Profile Card */}
          <section className="bg-white p-5 rounded-2xl">
            <div className="flex flex-col items-center mb-6">
              <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center mb-3 ring-4 ring-blue-100">
                <Image
                  src="/img/user.jpeg"
                  alt="Profile"
                  width={96}
                  height={96}
                  className="w-24 h-24 rounded-full object-cover"
                />
              </div>
              <h2 className="text-xl font-bold">{profileData.name}</h2>
              <p className="text-sm text-gray-500">{profileData.idCard}</p>
              <span className="mt-2 px-3 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full">
                {profileData.position}
              </span>
            </div>

            {/* Info Grid */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="text-sm font-medium">{profileData.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Telepon</p>
                  <p className="text-sm font-medium">{profileData.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Alamat</p>
                  <p className="text-sm font-medium">{profileData.address}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Departemen</p>
                  <p className="text-sm font-medium">{profileData.department}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Jabatan</p>
                  <p className="text-sm font-medium">{profileData.position}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-pink-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Tanggal Bergabung</p>
                  <p className="text-sm font-medium">{profileData.joinDate}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Settings Menu */}
          <section className="bg-white p-4 mt-3 rounded-2xl">
            <h3 className="text-md font-semibold mb-3">Pengaturan</h3>
            <div className="space-y-1">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    key={index}
                    className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-gray-500" />
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {item.badge && (
                        <span className="px-2 py-0.5 bg-red-500 text-white text-xs font-semibold rounded-full">
                          {item.badge}
                        </span>
                      )}
                      {item.value && (
                        <span className="text-xs text-gray-500">{item.value}</span>
                      )}
                      {item.toggle ? (
                        <div className="w-10 h-6 bg-gray-200 rounded-full relative">
                          <div className="w-4 h-4 bg-white rounded-full absolute top-1 left-1 shadow"></div>
                        </div>
                      ) : (
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Logout Button */}
          <section className="mt-3 mb-4">
            <button className="w-full flex items-center justify-center gap-2 p-4 bg-red-50 text-red-600 rounded-2xl font-semibold hover:bg-red-100 transition-colors">
              <LogOut className="w-5 h-5" />
              Keluar
            </button>
          </section>

          {/* App Version */}
          <p className="text-center text-xs text-gray-400 mb-4">
            Portal Karyawan v1.0.0
          </p>
        </div>
      </main>
    </>
  );
}
