import { ReactNode } from 'react';

interface GridContainerProps {
  children: ReactNode;
  className?: string;
}

export default function GridContainer({ children, className = '' }: GridContainerProps) {
  return (
    <div className={`max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}
