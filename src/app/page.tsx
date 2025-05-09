'use client';

import Button from '@/components/Button';
import Card from '@/components/Card';
import { useThemeStore } from '@/store/themeStore';

export default function Home() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <main
      className={`min-h-screen flex items-center justify-center p-6 transition-all duration-300 ${
        theme === 'light' ? 'bg-gray-100' : 'bg-gray-900 text-white'
      }`}
    >
      <Card className="max-w-md w-full text-center p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to Finance Tracker</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Track your income, expenses, and budgets with ease.
        </p>
        <div className="flex flex-col gap-4 items-center">
          <Button onClick={() => alert('Get Started clicked!')}>
            Get Started
          </Button>
          <Button onClick={toggleTheme}>
            Toggle to {theme === 'light' ? 'Dark' : 'Light'} Mode
          </Button>
        </div>
      </Card>
    </main>
  );
}
