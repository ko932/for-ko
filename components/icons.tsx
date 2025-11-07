
import React from 'react';

interface IconProps {
  className?: string;
}

export const HeartIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

export const SparkleIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5L12 0z" />
  </svg>
);

export const PetalIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="currentColor">
        <path d="M50 0 C0 50, 50 100, 50 100 C50 100, 100 50, 50 0 Z"/>
    </svg>
);

export const TeddyBearIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 45C72.3858 45 50 67.3858 50 95V155H150V95C150 67.3858 127.614 45 100 45Z" fill="#FDE4CF"/>
    <circle cx="100" cy="110" r="35" fill="#FFEFE0"/>
    <circle cx="85" cy="105" r="5" fill="#5C3317"/>
    <circle cx="115" cy="105" r="5" fill="#5C3317"/>
    <path d="M100 118C103.314 118 106 115.314 106 112C106 108.686 103.314 106 100 106C96.6863 106 94 108.686 94 112C94 115.314 96.6863 118 100 118Z" fill="#7C4624"/>
    <path d="M93 125C93 125 96 128 100 128C104 128 107 125 107 125" stroke="#7C4624" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="60" cy="55" r="20" fill="#FDE4CF"/>
    <circle cx="140" cy="55" r="20" fill="#FDE4CF"/>
    <circle cx="60" cy="55" r="12" fill="#FFEFE0"/>
    <circle cx="140" cy="55" r="12" fill="#FFEFE0"/>
  </svg>
);
