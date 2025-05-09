'use client';

import Button from '@/components/Button';
import Card from '@/components/Card';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <Card className="max-w-md w-full text-center p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to Finance Tracker</h1>
        <p className="text-gray-600 mb-6">
          Track your income, expenses, and budgets with ease.
        </p>
        <Button onClick={() => alert('Get Started clicked!')}>Get Started</Button>
      </Card>
    </main>
  );
}
