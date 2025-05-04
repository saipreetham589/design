import NavBar from './components/NavBar';
import LeftTopPanel from './components/LeftTopPanel';
import LeftBottomPanel from './components/LeftBottomPanel';
import RightPanel from './components/RightPanel';
import TimelinePanel from './components/TimelinePanel'; // ⬅️ Import your timeline
import { useState } from 'react';

function App() {
  const [showTimeline, setShowTimeline] = useState(false);
  const [personality, setPersonality] = useState('Henry George');

  return (
    <div className="w-screen h-screen overflow-hidden font-body bg-softBG dark:bg-darkBG text-black dark:text-white p-4">
      <NavBar
        showTimeline={showTimeline}
        toggleTimeline={() => setShowTimeline(prev => !prev)}
        personality={personality}
        setPersonality={setPersonality}
      />

      {/* TimelinePanel */}
      {showTimeline && (
        <div className="w-full mb-4">
          <TimelinePanel personality={personality} />
        </div>
      )}

      {/* Main 2x2 layout */}
      <div className="grid mt-20 grid-cols-[20%_80%] grid-rows-1 gap-4 h-[calc(100%-5rem)]">
        <div className="grid grid-rows-2 gap-4">
          <LeftTopPanel />
          <LeftBottomPanel />
        </div>
        <RightPanel />
      </div>
    </div>
  );
}

export default App;
