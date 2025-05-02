import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SECTIONS = [

  {
    title: 'Political Climate',
    items: [
      'Gilded Age era of great inequality',
      'Rapid industrialization',
      'Civil War aftermath',
      'Presidents: Grant, Hayes, Garfield, Arthur, Cleveland, Harrison',
    ],
  },
  {
    title: 'Living Conditions',
    items: [
      'Often lacked indoor plumbing',
      'Oil lamps for lighting',
      'Wood or coal heating',
      'Crowded tenement housing in cities',
      'Victorian-style furniture for the wealthy',
    ],
  },
  {
    title: 'Economic Conditions',
    items: [
      'Average annual income: $400–$500 (≈$13,000–$16,000 today)',
      '12-hour workdays, 6-day workweeks common',
      'No minimum wage laws',
      'Child labor widespread',
      'Limited worker protections',
      'Extreme wealth concentration',
    ],
  },
  {
    title: 'Art & Literature',
    items: [
      `Mark Twain's "Adventures of Huckleberry Finn"`,
      `Walt Whitman's "Leaves of Grass"`,
      `Emily Dickinson's poetry`,
      `Gilbert & Sullivan musicals`,
      `John Philip Sousa marches`,
    ],
  },
  {
    title: 'Foods & Drinks',
    items: [
      'Heavy on meat and starches',
      'Local, seasonal produce',
      'Limited refrigeration',
      'Food preservation through canning, smoking, salting',
      'Avg. daily calories: 3,000–4,000 (vs. 2,000–2,500 today)',
    ],
  },
];

export default function LeftBottomPanel() {
  const [index, setIndex] = useState(0);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setIndex((i) => Math.min(i + 1, SECTIONS.length - 1)),
    onSwipedRight: () => setIndex((i) => Math.max(i - 1, 0)),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const section = SECTIONS[index];

  return (
    <div
      {...swipeHandlers}
      className="rounded-3xl bg-white/80 dark:bg-black/20 backdrop-blur p-4 shadow-inner h-full flex flex-col"
    >
    {/* Scrollable content area */}
    <div className="flex-1 overflow-y-auto flex justify-center items-center px-2">
        <div className="text-center max-w-[90%]">
            {index === 0 ? (
                <div className="flex flex-col justify-center items-center h-full">
                    <h1 className="text-4xl font-heading font-bold">Environment</h1>
                </div>
            ) : (
                <div className="flex flex-col justify-center items-center">
                    <h3 className="text-2xl font-heading font-bold mb-4">{section.title}</h3>
                    <ul className="space-y-3 text-sm font-semibold text-left">
                        {section.items.map((item, i) => (
                            <li key={i} className="ml-5 pl-2 -indent-0 list-disc">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    </div>

    {/* Fixed nav */}
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
          {SECTIONS.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === index ? 'bg-ppYellow scale-110' : 'bg-black/30 dark:bg-white/30'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => setIndex((i) => Math.min(i + 1, SECTIONS.length - 1))}
          disabled={index === SECTIONS.length - 1}
          className={`p-1 rounded-full ${
            index === SECTIONS.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-black/10'
          }`}
        >
          <ChevronRight className="w-5 h-5 text-black dark:text-white" />
        </button>
      </div>
    </div>
  );
}
