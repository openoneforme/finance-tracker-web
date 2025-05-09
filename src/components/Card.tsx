'use client';

import { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
    <div className="bg-white shadow rounded p-4 border border-gray-100">
      {children}
    </div>
  );
}
