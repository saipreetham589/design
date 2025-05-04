import React, { useState, useEffect } from 'react';
import ChatBubble from './ChatBubble';
import { FaMicrophone, FaPaperPlane, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { sendMessageToLLM, initChat } from '../services/api';
import CollapsibleList from './CollapsibleList';

export default function ChatView() {
  const [messages, setMessages] = useState([]);
  const [followUps, setFollowUps] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);

  // 🟡 1. Initialize chat on mount
  useEffect(() => {
    initChat()
      .then(data => {
        setMessages([{ type: 'assistant', text: data.welcome, citations: [] }]);
        setFollowUps(data.follow_up_questions || []);
      })
      .catch(err => {
        console.error('Init failed', err);
        setMessages([{ type: 'assistant', text: '⚠️ Could not load welcome.', citations: [] }]);
      });
  }, []);

  // 🟡 2. Send message or follow-up
  const handleSend = async (overrideMessage) => {
    const raw = (overrideMessage ?? input).trim();
    if (!raw) return;

    setMessages(ms => [
      ...ms,
      { type: 'user', text: raw, citations: [] },
      { type: 'assistant', text: 'Typing…', citations: [], placeholder: true },
    ]);
    setInput('');
    setLoading(true);
    setFollowUps([]);

    try {
      const res = await sendMessageToLLM(raw);

      let cleaned = res.response.replace(/\[\d+(?:,\s*\d+)*\]/g, '');
      cleaned = cleaned.replace(/\s+([.!?])/g, '$1').trim();

      const citationStrings = (res.citations || []).map(c => {
        let s = c.book;
        if (c.chapter) s += `, ${c.chapter}`;
        if (c.chapter_title) s += `: ${c.chapter_title}`;
        if (c.pages) s += ` (${c.pages})`;
        return s;
      });

      setMessages(ms =>
        ms.map(m =>
          m.placeholder
            ? { type: 'assistant', text: cleaned, citations: citationStrings }
            : m
        )
      );

      setFollowUps((res.follow_up_questions || []).slice(0, 3));
    } catch (err) {
      console.error('chat send failed', err);
      setMessages(ms =>
        ms.map(m =>
          m.placeholder
            ? { type: 'assistant', text: '⚠️ Server error. Please try again.', citations: [] }
            : m
        )
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Chat history */}
      <div className="flex-1 overflow-y-auto p-3 flex flex-col-reverse">
        {[...messages].reverse().map((msg, i) => (
          <div key={i} className="mb-2">
            <ChatBubble type={msg.type} text={msg.text} />
            {msg.citations?.length > 0 && (
              <CollapsibleList items={msg.citations} />
            )}
          </div>
        ))}
      </div>

      {/* Follow-up suggestions */}
      {followUps.length > 0 && !loading && (
        <div className="border-t border-gray-500/30">
          <button
            onClick={() => setShowSuggestions(v => !v)}
            className="w-full flex items-center justify-between px-2 py-1 text-sm hover:text-gray-200 text-black dark:text-white"
          >
            <span className="font-bold">Suggested Questions</span>
            {showSuggestions ? <FaChevronDown className="w-4 h-4" /> : <FaChevronUp className="w-4 h-4" />}
          </button>

          {showSuggestions && (
            <div className="p-2 flex flex-wrap gap-2">
              {followUps.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(q)}
                  className="px-3 py-1 bg-white shadow-md text-black dark:bg-gray-200 dark:text-black rounded-full text-xs hover:bg-softBG"
                >
                  {q}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Input area */}
      <div className="pt-4">
        <div className="flex items-center gap-2">
          <button className="text-ppYellow text-xl" aria-label="Voice">
            <FaMicrophone />
          </button>
          <input
            type="text"
            placeholder="Type a message"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
            className="flex-1 px-4 py-2 rounded-full bg-white shadow-md text-black dark:bg-gray-100 dark:text-black placeholder-gray-500 outline-none text-sm"
          />
          <button
            onClick={() => handleSend()}
            disabled={loading}
            className="text-black dark:text-white text-lg"
            aria-label="Send"
          >
            <FaPaperPlane />
          </button>
        </div>
        <div className="px-2 mt-2 text-center text-xs text-black/50 dark:text-white/70">
          Disclaimer: PastPort is for educational/informational use only. Always double-check any important facts.
        </div>
      </div>
    </div>
  );
}
