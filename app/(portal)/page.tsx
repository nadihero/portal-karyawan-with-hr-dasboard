import Header from '../components/Header';
import BalanceCard from '../components/BalanceCard';
import MonthlyCard from '../components/MonthlyCard';

const monthlyData = [
  { month: 'Januari', amount: 'Rp 5.200.000' },
  { month: 'Februari', amount: 'Rp 4.800.000' },
  { month: 'Maret', amount: 'Rp 5.500.000' },
  { month: 'April', amount: 'Rp 4.900.000' },
  { month: 'Mei', amount: 'Rp 5.100.000' },
  { month: 'Juni', amount: 'Rp 5.300.000' },
  { month: 'Juli', amount: 'Rp 5.400.000' },
  { month: 'Agustus', amount: 'Rp 5.600.000' },
  { month: 'September', amount: 'Rp 5.250.000' },
  { month: 'Oktober', amount: 'Rp 5.450.000' },
  { month: 'November', amount: 'Rp 5.350.000' },
  { month: 'Desember', amount: 'Rp 5.500.000' },
];

export default function Home() {
  return (
    <>
      <Header title="Selamat Pagi, ASDAR" />
      <main className="flex-1">
        <div className="bg-custom p-3 rounded-t-3xl">
          <BalanceCard
            month="Desember"
            amount="Rp 5.500.000"
            attendance={27}
            workHours="200 Jam"
          />
          <section className="bg-white p-4 mt-3 rounded-2xl">
            <div className="grid grid-cols-2 gap-4">
              {monthlyData.map((data) => (
                <MonthlyCard key={data.month} month={data.month} amount={data.amount} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
