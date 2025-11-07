
import React from 'react';

export const Wave: React.FC = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 z-0">
      <div className="absolute bottom-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[200%] h-full animate-wave-motion">
          <div
            className="absolute bottom-0 left-0 w-1/2 h-full bg-no-repeat bg-bottom"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3e%3cpath d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z' style='fill: rgba(255, 228, 234, 0.5);'%3e%3c/path%3e%3c/svg%3e")`,
            }}
          ></div>
          <div
            className="absolute bottom-0 left-1/2 w-1/2 h-full bg-no-repeat bg-bottom"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3e%3cpath d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z' style='fill: rgba(255, 228, 234, 0.5);'%3e%3c/path%3e%3c/svg%3e")`,
            }}
          ></div>
        </div>
      </div>
       <div className="absolute bottom-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[200%] h-full animate-wave-motion" style={{animationDuration: '35s', animationDirection: 'reverse'}}>
          <div
            className="absolute bottom-0 left-0 w-1/2 h-full bg-no-repeat bg-bottom"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3e%3cpath d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.39-16.72-168.19-17.73-250.45-.39-58.2,11.48-114.16,30.13-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.83C1132.19,118.92,1055.71,111.31,985.66,92.83Z' style='fill: rgba(253, 230, 240, 0.7);'%3e%3c/path%3e%3c/svg%3e")`,
            }}
          ></div>
          <div
            className="absolute bottom-0 left-1/2 w-1/2 h-full bg-no-repeat bg-bottom"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3e%3cpath d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.39-16.72-168.19-17.73-250.45-.39-58.2,11.48-114.16,30.13-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.83C1132.19,118.92,1055.71,111.31,985.66,92.83Z' style='fill: rgba(253, 230, 240, 0.7);'%3e%3c/path%3e%3c/svg%3e")`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
