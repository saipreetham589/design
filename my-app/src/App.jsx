import NavBar from './components/NavBar';
import LeftTopPanel from './components/LeftTopPanel';
import LeftBottomPanel from './components/LeftBottomPanel';
import RightPanel from './components/RightPanel';

function App() {
  return (
    <div className="w-screen h-screen p-4 font-body bg-softBG dark:bg-darkBG text-black dark:text-white overflow-hidden">
      <NavBar />

      <div className="mt-20 h-[calc(100%-5rem)] grid grid-cols-[25%_75%] grid-rows-1 gap-4">
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
