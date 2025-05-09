'use client';

import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'text';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  // Add other specific HTML button attributes you might need
}

const buttonVariants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  variant = 'primary',
  onClick,
  disabled,
  type = 'button',
  ...rest
}) => {
  const variantStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-300',
    text: 'text-blue-500 hover:text-blue-600 focus:outline-none focus:ring-blue-500 focus:ring-offset-2',
  };

  const baseStyles = 'font-semibold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-transform duration-150 ease-in-out';
  const combinedStyles = `${baseStyles} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  return (
    <motion.button
      className={combinedStyles}
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...rest} // Capture any other props
    >
      {children}
    </motion.button>
  );
};

export default Button;