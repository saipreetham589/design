import RightMainContent from './RightMainContent';
import RightSidebar from './RightSidebar';

export default function RightPanel() {
return (
    <div className="rounded-l-3xl bg-white/80 dark:bg-black/20 backdrop-blur p-4 shadow-inner h-full flex">
        {/* Left 70% */}
        <div className="w-[70%] pr-4">
            <RightMainContent />
        </div>

        {/* Divider + Right 30% */}
        <div className="w-[30%] border-l border-black/10 dark:border-white/20 pl-4">
            <RightSidebar />
        </div>
    </div>
);
}
