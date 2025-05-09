'use client';

import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  const baseStyles = 'bg-white shadow rounded-md p-4';
  const combinedStyles = `${baseStyles} ${className}`;

  return (
    <div className={combinedStyles}>
      {children}
    </div>
  );
};

export default Card;