import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'ghost';
  className?: string;
  external?: boolean;
}

export default function Button({
  href,
  children,
  variant = 'primary',
  className = '',
  external = false,
}: ButtonProps) {
  const base =
    'group/btn inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-display text-sm font-medium tracking-wide transition-colors duration-300';
  const styles =
    variant === 'primary'
      ? 'bg-blush text-ink hover:bg-blush-soft'
      : 'border border-white/15 text-white hover:border-blush/60 hover:text-blush';

  return (
    <motion.a
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 420, damping: 22 }}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </motion.a>
  );
}
