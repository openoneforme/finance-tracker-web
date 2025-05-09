'use client';

import Button from '@/components/Button';
import Card from '@/components/Card';
import { useState } from 'react';
import Modal from '@/components/Modal';
import Input from '@/components/Input';
import { useThemeStore } from '@/store/theme';
import { useEffect } from 'react';

export default function Home() {
  const [isModalOpen, setIsOpen] = useState(false);
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  // Just for demonstration in the console on initial load
  useEffect(() => {
    console.log('Current theme:', theme);
    // Let's simulate a theme change after a short delay
    setTimeout(() => {
      setTheme('dark');
      console.log('Theme changed to dark');
    }, 3000);
  }, [theme, setTheme]);

  return (
    <div className={`p-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'} min-h-screen flex flex-col items-center justify-center`}>
      <Card className="max-w-md w-full mb-6">
        <h1 className="text-3xl font-bold mb-4">Welcome to Your Finance Tracker!</h1>
        <p className="text-gray-600 dark:text-gray-400">Start managing your finances effectively.</p>
        <div className="mt-4 space-x-2">
          <Button onClick={() => alert('Get Started Clicked')}>Get Started</Button>
          <Button variant="secondary">Learn More</Button>
        </div>
      </Card>

      <Card className="max-w-sm w-full text-center">
        <p className="text-sm text-gray-500 dark:text-gray-300">More features coming soon...</p>
      </Card>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h3 className="text-lg font-semibold mb-4">Example Modal</h3>
        <p>This is an example of the modal you created.</p>
        <Input type="text" placeholder="Enter something here" className="mb-4" />
        <div className="flex justify-end">
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
          <Button className="ml-2">Submit</Button>
        </div>
      </Modal>

      <div className="fixed bottom-4 right-4">
        <Button onClick={handleOpenModal} variant="text">Open Example Modal</Button>
      </div>
    </div>
  );
}