
import React from 'react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { SectionCard } from './components/SectionCard';
import { Wave } from './components/Wave';
import { TeddyBearIcon } from './components/icons';

const romanticQuotes = [
  "Your smile rewires my whole day.",
  "You’re dangerously cute, and it’s unfair.",
  "You’re not a person… you’re a feeling.",
  "I like your rude tone because it feels like home.",
  "Your presence feels like warm pink sunlight.",
];

const fromHimLines = [
  "I’m your biggest supporter — not today, but always.",
  "I believe in your dreams fiercely.",
  "Whatever you face, you face with me behind you.",
];

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-rose-100 via-pink-100 to-lavender-200 text-rose-800 antialiased overflow-hidden">
      <AnimatedBackground />

      <main className="relative z-10 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 min-h-screen text-center">
        <header className="mb-12 mt-20">
          <h1 className="font-dancing-script text-4xl sm:text-5xl md:text-7xl font-bold text-pink-500 animate-text-glow">
            Happy Birthday, Dr. Personal… my sweet Sonpariii.
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-rose-600 italic">
            Komal, you’re the softest magic in my life.
          </p>
        </header>

        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <SectionCard title="You should know..." color="bg-rose-50/70 border-rose-200">
            {romanticQuotes.map((quote, index) => (
              <p key={index} className="mb-2 italic">“{quote}”</p>
            ))}
          </SectionCard>
          
          <SectionCard title="To my Sonpariii" color="bg-pink-50/70 border-pink-200" titleClassName="text-pink-600">
            <p className="mb-2">You make life sweeter just by being here.</p>
            <p className="font-bold">Every birthday of yours is my favourite day.</p>
          </SectionCard>

          <SectionCard title="For Your NEET Dream" color="bg-peach-50/70 border-peach-200" titleClassName="text-orange-500" style={{'--tw-bg-opacity': '0.7', backgroundColor: 'rgba(255, 237, 213, var(--tw-bg-opacity))', borderColor: '#fed7aa'}}>
            <p className="mb-2 font-semibold">Komal, NEET will bow down to your dedication.</p>
            <p className="mb-2">Your focus, your fire, your courage — unbeatable.</p>
            <p>You’re not giving this exam alone. My support walks with you.</p>
          </SectionCard>

          <SectionCard title="For Your NDA Quest" color="bg-rose-100/70 border-rose-300" titleClassName="text-rose-700">
            <p className="mb-2 font-semibold">You have the warrior’s heart and the queen’s discipline.</p>
            <p className="mb-2">NDA is your destination — go take it.</p>
            <p className="font-bold">You’re fire, Komal. Beautiful, controlled, unstoppable.</p>
          </SectionCard>
          
          <SectionCard title="From Him" color="bg-lavender-100/70 border-lavender-300" titleClassName="text-purple-600" style={{'--tw-bg-opacity': '0.7', backgroundColor: 'rgba(237, 233, 254, var(--tw-bg-opacity))', borderColor: '#ddd6fe'}}>
            {fromHimLines.map((line, index) => (
              <p key={index} className="mb-2 font-semibold">“{line}”</p>
            ))}
          </SectionCard>
        </div>

        <footer className="mt-16 mb-24 text-center">
          <p className="text-xl md:text-2xl text-rose-700 font-dancing-script font-bold">
            “You’re not just someone I love… you’re someone I admire beyond words.”
          </p>
        </footer>
      </main>

      <div className="absolute bottom-10 right-10 z-20 w-24 h-24 md:w-32 md:h-32 animate-teddy-bounce">
        <TeddyBearIcon />
      </div>

      <Wave />
    </div>
  );
};

export default App;
