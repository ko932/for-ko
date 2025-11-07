
import React from 'react';

interface SectionCardProps {
  title: string;
  children: React.ReactNode;
  color?: string;
  titleClassName?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const SectionCard: React.FC<SectionCardProps> = ({ title, children, color = 'bg-pink-50/70 border-pink-200', titleClassName = 'text-pink-600', className = '', style }) => {
  return (
    <div 
      className={`p-6 border-2 rounded-2xl shadow-lg backdrop-blur-sm transition-transform hover:scale-105 hover:shadow-xl ${color} ${className} min-h-[200px] flex flex-col justify-center`}
      style={style}
      >
      <h2 className={`font-dancing-script text-3xl font-bold mb-4 ${titleClassName}`}>
        {title}
      </h2>
      <div className="text-md text-rose-700">
        {children}
      </div>
    </div>
  );
};
