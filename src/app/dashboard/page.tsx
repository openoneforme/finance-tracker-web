'use client';

export default function DashboardPage() {
  return (
    <div className="p-4 sm:p-6 md:p-8">
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white shadow rounded-md p-4">Summary Card 1</div>
        <div className="bg-white shadow rounded-md p-4">Summary Card 2</div>
        <div className="bg-white shadow rounded-md p-4">Summary Card 3</div>
        <div className="bg-white shadow rounded-md p-4 md:col-span-2">Larger Card</div>
      </div>
    </div>
  );
}