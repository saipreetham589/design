import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const contemporaries = [
  {
    name: 'Michael Davitt (1846–1906)',
    title: 'Irish Land League founder',
    description:
      'Distributed Progress and Poverty in Britain & Ireland; George’s on-the-ground reports of Irish tenant struggles informed his global reform strategy.',
  },
  {
    name: 'Rev. Edward McGlynn (1837–1900)',
    title: 'Catholic priest & reformer',
    description:
      'Excommunicated (1887–92) for preaching George’s single tax; his alliance showed Georgism’s moral force—and cost McGlynn his standing.',
  },
  {
    name: 'Leo Tolstoy (1828–1910)',
    title: 'Russian novelist & moral philosopher',
    description:
      'Called George’s work the next program for progressive liberals worldwide, helping introduce Georgism to Russia and continental Europe.',
  },
  {
    name: 'Tom L. Johnson (1854–1911)',
    title: 'Mayor of Cleveland',
    description:
      'Converted by Progress and Poverty in 1885, then carried Georgist land-tax practices into U.S. politics—proof that theory could inform real reforms.',
  },
  {
    name: 'Alfred Marshall (1842–1924)',
    title: 'Father of neoclassical economics',
    description:
      'Critiqued George’s originality but conceded land-value taxation was less distorting—forcing Georgists to ground their case in marginal-analysis debates.',
  },
  {
    name: 'H. M. Hyndman (1842–1921)',
    title: 'British socialist leader',
    description:
      'Debated George in London (1883), pitting socialism vs. single-tax; their clash helped refine each movement’s boundaries in late-Victorian Britain.',
  },
];

export default function LeftTopPanel() {
  const [index, setIndex] = useState(0);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setIndex((i) => Math.min(i + 1, contemporaries.length - 1)),
    onSwipedRight: () => setIndex((i) => Math.max(i - 1, 0)),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const person = contemporaries[index];

  return (
        
    <div
      {...swipeHandlers}
      className="rounded-3xl bg-white/80 dark:bg-black/20 backdrop-blur p-4 shadow-inner h-full flex flex-col"
    >
    {/* Scrollable content */}
    <div className="flex-1 overflow-y-auto px-2 flex items-center justify-center">
        {index === 0 ? (
            <div className="text-center">
                <h1 className="text-4xl font-heading font-bold">Peers</h1>
            </div>
        ) : (
            <div className="text-center">
                <h3 className="text-xl font-heading mb-2">{person.name}</h3>
                <p className="text-sm font-semibold mb-1">{person.title}</p>
                <p className="text-sm leading-relaxed">{person.description}</p>
            </div>
        )}
    </div>

    {/* Navigation */}
      <div className="mt-4 flex justify-center items-center space-x-4">
        <button
          onClick={() => setIndex((i) => Math.max(i - 1, 0))}
          disabled={index === 0}
          className={`p-1 rounded-full ${
            index === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-black/10'
          }`}
        >
          <ChevronLeft className="w-5 h-5 text-black dark:text-white" />
        </button>

        <div className="flex space-x-2">
          {contemporaries.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === index ? 'bg-ppYellow scale-110' : 'bg-black/30 dark:bg-white/30'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => setIndex((i) => Math.min(i + 1, contemporaries.length - 1))}
          disabled={index === contemporaries.length - 1}
          className={`p-1 rounded-full ${
            index === contemporaries.length - 1
              ? 'opacity-30 cursor-not-allowed'
              : 'hover:bg-black/10'
          }`}
        >
          <ChevronRight className="w-5 h-5 text-black dark:text-white" />
        </button>
      </div>
    </div>
  );
}
