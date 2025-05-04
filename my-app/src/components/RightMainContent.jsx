import ChatView from './ChatView';
import { FaPlus, FaUser } from 'react-icons/fa';

const chats = [
  { id: 'henry', name: 'Henry George', avatarUrl: '/henry_george.jpg' },
  { id: 'einstein', name: 'Albert Einstein', avatarUrl: '/albert_einstein.jpg' },
];

export default function RightMainContent() {
  const activeChat = 'henry'; // static for now
  const setActiveChat = (id) => console.log('Set active chat to:', id);
  const onAddChat = () => console.log('New chat clicked');

  return (
    <div className="h-full relative overflow-hidden">
      {/* 🔝 Glassy pinned header with chat selector */}
      <div className="absolute top-0 left-0 w-full z-10">
        <div className="flex items-center justify-between px-4 py-2">
          
          {/* Left: Add New Chat */}
          <button
            onClick={onAddChat}
            className="w-9 h-9 flex items-center justify-center bg-ppYellow text-black rounded-full hover:bg-yellow-500 shadow-md"
          >
            <FaPlus className="w-4 h-4" />
          </button>

          {/* Center: Chat avatars */}
          <div className="flex space-x-3">
            
            {chats.map((chat) => (
              
              <button
                key={chat.id}
                onClick={() => setActiveChat(chat.id)}
                className={`w-9 h-9 rounded-full overflow-hidden flex items-center justify-center transition-transform hover:scale-105 shadow ${
                  activeChat === chat.id
                    ? 'bg-ppYellow text-black'
                    : 'bg-white/20 dark:bg-white/20 text-white'
                }`}
              >
                {chat.avatarUrl ? (
                  <img
                    src={chat.avatarUrl}
                    alt={chat.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  <FaUserCircle className="w-5 h-5" />
                )}
              </button>
            ))}
          </div>

          {/* Right: Placeholder for future profile/settings */}
          <div className="w-9 h-9" /> {/* Space filler for symmetry */}
        </div>
      </div>

      {/* 📜 Chat area below pinned header */}
      <div className="absolute inset-0 pt-[3.5rem] overflow-hidden">
        <ChatView />
      </div>
    </div>
  );
}
