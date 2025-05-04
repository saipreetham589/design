// src/components/CitationsList.jsx
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function CitationsList({ items }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* this wrapper lives *below* the bubble, not inside it */}
      <div className="mt-2 px-10 flex items-center text-xs text-gray-500 dark:text-gray-300 space-x-2">

        <button
          onClick={() => setOpen(o => !o)}
          className="flex items-center space-x-1"
        >
        <span>Resources</span>
          {open
            ? <FaChevronUp className="w-2 h-2" />
            : <FaChevronDown className="w-2 h-2" />
          }
          
        </button>
      </div>

     {/* only render the sections when open */}
     {open && (
       <div className="mt-2 px-10 text-xs text-gray-500 dark:text-gray-300 space-y-4">


         {/* Section 1 */}
         <div>
           <div className="font-semibold">For readings I would urge you to read my:</div>
           <ul className="mt-1 list-disc list-inside">
             {items.map((c, i) => (
               <li key={i}>{c}</li>
             ))}
           </ul>
         </div>

         {/* Section 2 */}
         <div>
           <div className="font-semibold">Current References from Today:</div>
           <ul className="mt-1 list-disc list-inside">
             <li>Ref 1</li>
             <li>Ref 2</li>
           </ul>
         </div>

         {/* Section 3 */}
         <div>
           <div className="font-semibold">Visit:</div>
           <ul className="mt-1 list-disc list-inside">
                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-300 hover:underline">
                    HGSSS.org 
                </a>
           </ul>
         </div>

         {/* Section 4 */}
         <div>
           <div className="font-semibold">Reach out to Experts:</div>
           <ul className="mt-1 list-disc list-inside">
             <li>Name: Edward Dodson</li>
             <li>Email: info@hgsss.org</li>
           </ul>
         </div>

       </div>
     )}
    </>
  );
}
