import Sidebar from "@/components/sidebar";
import Header from "@/components/header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">

      <Sidebar />

      <div className="flex-1">

        <Header />

        <main className="p-8 bg-gray-100 min-h-screen">
          {children}
        </main>

      </div>

    </div>
  );
}