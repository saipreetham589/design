// src/widgets/TimelinePanel.jsx
import React from 'react';

export default function TimelinePanel({ personality }) {
  const timelines = {
    'Henry George': [
      {
        date: '1839',
        title: 'Birth in Philadelphia',
        description:
          'Born into a modest Episcopalian family at 413 S. 10th St., Philadelphia.',
      },
      {
        date: '1855',
        title: 'Voyage to Calcutta',
        description:
          'At age 16 George works aboard a merchant ship to India and witnesses extreme destitution.',
      },
      {
        date: '1861',
        title: 'Marriage & Journalism',
        description:
          'Marries Annie Corsina Fox in California and co-founds the San Francisco Evening Journal.',
      },
      {
        date: '1869',
        title: 'Economic Epiphany',
        description:
          'Discovers that rising land value, not labor, drives poverty while resting by a San Francisco hill.',
      },
      {
        date: '1879',
        title: 'Publishes Progress and Poverty',
        description:
          'Issues his landmark treatise explaining why wealth and want grow together—and proposes the “single tax.”',
      },
      {
        date: '1886',
        title: 'NYC Mayoral Race',
        description:
          'Wins 31% of the vote as United Labor candidate—outruns Theodore Roosevelt and champions labor rights.',
      },
      {
        date: '1890',
        title: 'Global Lecture Tours',
        description:
          'Travels to Britain, Ireland, Australia, and New Zealand, debating socialists and inspiring land-reform leagues.',
      },
      {
        date: '1897',
        title: 'Death in New York',
        description:
          'Stricken by a final stroke on the campaign trail, George dies at 58 and tens of thousands attend his funeral.',
      },
    ],
    // …other personalities
  };

  const events = timelines[personality] || [];

  return (
    <div className="relative w-full overflow-visible backdrop-blur-md rounded-3xl p-4 mb-0">
      {/* Horizontal line */}
      <div className="absolute inset-x-4 top-1/2 h-px bg-white/30 z-0"/>
    <div className="relative flex justify-between items-center h-20 px-4">
    {events.map((evt, i) => {
      const first = i === 0;
      const last = i === events.length - 1;

      // clamp positioning for tooltips
      const clampClass = first
        ? 'left-0 -translate-x-0'
        : last
        ? 'right-0 translate-x-0'
        : 'left-1/2 -translate-x-1/2';

      // clamp positioning for title under dot (slightly inset)
      const titleClamp = first
        ? 'left-0 -translate-x-0'
        : last
        ? 'right-0 translate-x-0'
        : 'left-1/2 -translate-x-1/2';

      return (
        <div key={evt.date} className="relative flex-shrink-0 group">
          {/* date above the dot */}
          <div
            className={
              `absolute -top-6 left-1/2 -translate-x-1/2 text-white text-xs whitespace-nowrap`
            }
          >
            {evt.date}
          </div>

          {/* the dot itself, centered on the line */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-ppYellow rounded-full z-10"
          />

          {/* permanent title below the dot, inset for edges */}
          <div
            className={
              `absolute top-full mt-2 ${titleClamp} text-white text-xs text-center whitespace-nowrap`
            }
          >
            {evt.title}
          </div>

          {/* description tooltip below */}
          <div
            className={
              `absolute top-full mt-6 ${clampClass} w-40 bg-black/50 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity z-20`
            }
          >
            {evt.description}
          </div>
        </div>
      );
    })}
  </div>
  </div>
  );
}
