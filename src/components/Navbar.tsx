'use client';

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-semibold text-gray-800">
              Finance Tracker
            </Link>
            <div className="hidden md:block ml-10 space-x-4">
              <Link href="/dashboard" className="text-gray-600 hover:text-gray-800">
                Dashboard
              </Link>
              <Link href="/transactions" className="text-gray-600 hover:text-gray-800">
                Transactions
              </Link>
              <Link href="/budgets" className="text-gray-600 hover:text-gray-800">
                Budgets
              </Link>
            </div>
          </div>
          {/* You can add authentication links or user info here later */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;