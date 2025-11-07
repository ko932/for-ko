
import React, { useMemo } from 'react';
import { HeartIcon, PetalIcon, SparkleIcon } from './icons';

interface FloatingElementProps {
  count: number;
  children: React.ReactNode;
  animationClass: string;
}

const FloatingElements: React.FC<FloatingElementProps> = ({ count, children, animationClass }) => {
  const elements = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const style: React.CSSProperties = {
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 10}s`,
        animationDuration: `${5 + Math.random() * 10}s`,
        transform: `scale(${0.5 + Math.random() * 0.8})`,
      };
      return (
        <div key={i} className={`absolute top-[-10%] ${animationClass}`} style={style}>
          {children}
        </div>
      );
    });
  }, [count, children, animationClass]);

  return <>{elements}</>;
};

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
      <FloatingElements count={15} animationClass="animate-[float_ease-in-out_infinite]">
        <HeartIcon className="w-8 h-8 text-pink-300" />
      </FloatingElements>
      <FloatingElements count={20} animationClass="animate-[fall_linear_infinite]">
        <PetalIcon className="w-6 h-6 text-rose-200" />
      </FloatingElements>
       <FloatingElements count={25} animationClass="animate-[float_ease-in-out_infinite]">
        <SparkleIcon className="w-4 h-4 text-yellow-200" />
      </FloatingElements>
    </div>
  );
};
