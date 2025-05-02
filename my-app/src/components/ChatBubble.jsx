import React from 'react';
import { FaUserGraduate } from 'react-icons/fa';

export default function ChatBubble({ type = 'assistant', text }) {
  const isUser = type === 'user';

  // Format *bold* in text content
  const renderWithBold = (str) => {
    const parts = str.split(/(\*[^*]+\*)/g); // split on *bold*
    return parts.map((part, i) => {
      if (part.startsWith('*') && part.endsWith('*')) {
        return <strong key={i}>{part.slice(1, -1)}</strong>;
      }
      return <React.Fragment key={i}>{part}</React.Fragment>;
    });
  };

  return (
    <div className={`flex items-end mb-2 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {/* Avatar */}
      {!isUser && (
        <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
          <img
            src="/henry_george.jpg"
            alt="Bot"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Bubble */}
      <div
        className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm leading-relaxed ${
            isUser
            ? 'bg-softBG text-black dark:bg-gray-200 dark:text-black rounded-br-none'
            : 'bg-ppYellow text-black rounded-bl-none'
        }`}
      >
        {renderWithBold(text)}
      </div>

      {/* User avatar */}
      {isUser && (
        <div className="w-8 h-8 rounded-full overflow-hidden ml-2">
          <img
            src="https://i.pravatar.cc/40?img=12"
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
}
