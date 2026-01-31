import BottomNav from "../components/BottomNav";

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-md mx-auto cjtp-primary relative flex flex-col min-h-screen">
      {children}
      <BottomNav />
    </div>
  );
}
