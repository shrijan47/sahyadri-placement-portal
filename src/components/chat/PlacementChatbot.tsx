import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MessageSquare,
  X,
  Send,
  RotateCcw,
  Sparkles,
  Bot,
  User,
  ArrowRight,
} from 'lucide-react';
import {
  queryKnowledgeBase,
} from '../../data/chatbotKnowledge';

export interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  suggestedPrompt?: string;
  references?: { label: string; path: string }[];
  isFallback?: boolean;
}

const INITIAL_GREETING: ChatMessage = {
  id: 'msg-welcome',
  sender: 'bot',
  text: `👋 Hello! I am the **Sahyadri Placement Prep Assistant**.

I provide comprehensive guidance covering:
• **Quantitative Aptitude & Shortcuts** (Work, Speed, Profit & Loss, Probability)
• **Logical Reasoning & Syllogisms**
• **Verbal Ability & Grammar Rules**
• **Data Structures & Algorithms Patterns**
• **DBMS, Normalization & SQL Queries**
• **Technical & HR Interview Tips (STAR Method)**
• **60-Day Placement Roadmap & Examination Rules**

How can I help you prepare today? Pick a suggested topic below or type your question.`,
  timestamp: 'Just now',
  references: [
    { label: 'Aptitude Test Board', path: '/test-board' },
    { label: 'Study Materials & Papers', path: '/study-materials' }
  ]
};

const SUGGESTED_QUICK_PROMPTS = [
  'Time and Work formulas and shortcuts',
  'Top DSA patterns for placements',
  'Explain SQL Joins and Normalization',
  'STAR method for HR interviews',
  'Speed, Time & Train formulas',
  'How to solve Syllogisms with Venn Diagrams',
  'TCS and Infosys exam patterns',
  'Examination rules and marking scheme',
  '60-day placement preparation plan',
  'Essential Verbal Ability rules'
];

export const PlacementChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_GREETING]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isTyping]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  /**
   * Extensible Resolver:
   * Currently queries the offline knowledge base.
   * Can be configured to route to an external AI API endpoint in production.
   */
  const resolveAssistantResponse = async (query: string): Promise<ChatMessage> => {
    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const match = queryKnowledgeBase(query);

    if (match) {
      return {
        id: `msg-${Date.now()}-${Math.random()}`,
        sender: 'bot',
        text: match.item.answer,
        timestamp: timeStr,
        references: match.item.references
      };
    }

    // Graceful offline fallback
    return {
      id: `msg-${Date.now()}-${Math.random()}`,
      sender: 'bot',
      isFallback: true,
      text: `I couldn't find a direct pre-configured match for **"${query}"** in the offline demo knowledge base.

Here are topics with verified answers available right now:
• **Aptitude**: *"Time & work"*, *"Speed distance"*, *"Percentages"*, *"Probability"*
• **Logic**: *"Syllogisms"*, *"Blood relations"*, *"Seating arrangements"*
• **Verbal**: *"Subject-verb agreement"*, *"Grammar rules"*
• **Tech**: *"Top DSA patterns"*, *"SQL Joins"*, *"DBMS Normalization"*
• **Interviews**: *"STAR method for HR"*, *"Project walkthrough"*
• **Recruiters**: *"TCS NQT"*, *"Infosys"*, *"Accenture patterns"*
• **Portal**: *"Exam rules"*, *"Marking scheme"*, *"60-day roadmap"*

For specific offline queries, please consult the **Sahyadri Department of Placement & Training** at \`placement@sahyadri.edu.in\`.`,
      timestamp: timeStr,
      references: [
        { label: 'Browse Study Materials', path: '/study-materials' },
        { label: 'View Available Tests', path: '/test-board' },
        { label: 'Recruitment Opportunities', path: '/jobs' }
      ]
    };
  };

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text || isTyping) return;

    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: timeStr
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Realistic brief typing delay (300ms) for natural feel
    setTimeout(async () => {
      const response = await resolveAssistantResponse(text);
      setMessages(prev => [...prev, response]);
      setIsTyping(false);
    }, 350);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleReset = () => {
    setMessages([INITIAL_GREETING]);
  };

  const handleNavigateReference = (path: string) => {
    navigate(path);
  };

  return (
    <>
      {/* Floating Toggle Button (Always visible bottom-right) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 bg-[#205A40] hover:bg-[#184632] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl flex items-center gap-2.5 transition-all transform hover:scale-105 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-[#205A40]/30"
          aria-label="Open Placement Assistant Chatbot"
          title="Sahyadri Placement Assistant (Offline Demo)"
        >
          <div className="relative">
            <MessageSquare className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full" />
          </div>
          <span className="hidden sm:inline font-semibold text-sm tracking-wide">
            Placement Assistant
          </span>
          <span className="hidden sm:inline text-[10px] uppercase font-bold bg-white/20 px-1.5 py-0.5 rounded text-emerald-100">
            Offline Demo
          </span>
        </button>
      )}

      {/* Expanded Chat Drawer / Modal */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-32px)] sm:w-[440px] h-[640px] max-h-[calc(100vh-40px)] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="bg-[#205A40] text-white px-4 py-3.5 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
                <Bot className="w-5 h-5 text-emerald-300" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-sm tracking-tight leading-tight">
                    Sahyadri Placement Assistant
                  </h3>
                  <span className="bg-emerald-500/30 text-emerald-200 text-[10px] font-semibold px-1.5 py-0.2 rounded border border-emerald-400/30">
                    Offline Demo
                  </span>
                </div>
                <p className="text-[11px] text-emerald-100/80">
                  Instant aptitude, technical & interview answers
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleReset}
                className="p-1.5 rounded-lg text-emerald-100 hover:text-white hover:bg-white/10 transition-colors"
                title="Reset conversation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-emerald-100 hover:text-white hover:bg-white/10 transition-colors"
                title="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Offline Notice Banner */}
          <div className="bg-emerald-50 border-b border-emerald-100 px-3.5 py-2 flex items-center justify-between text-[11px] text-[#205A40]">
            <div className="flex items-center gap-1.5 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-[#205A40] shrink-0" />
              <span>Offline Assistant &bull; Pre-configured local knowledge base</span>
            </div>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-lg bg-[#205A40] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs leading-relaxed shadow-sm ${
                    msg.sender === 'user'
                      ? 'bg-[#205A40] text-white rounded-tr-none'
                      : 'bg-white text-slate-800 border border-slate-200/80 rounded-tl-none'
                  }`}
                >
                  {/* Message formatted display */}
                  <div className="whitespace-pre-wrap space-y-2">
                    {msg.text.split('\n\n').map((paragraph, pIdx) => (
                      <p key={pIdx}>
                        {paragraph.split('**').map((segment, sIdx) =>
                          sIdx % 2 === 1 ? (
                            <strong key={sIdx} className="font-semibold text-inherit">
                              {segment}
                            </strong>
                          ) : (
                            <span key={sIdx}>{segment}</span>
                          )
                        )}
                      </p>
                    ))}
                  </div>

                  {/* References & Links */}
                  {msg.references && msg.references.length > 0 && (
                    <div className="mt-3 pt-2.5 border-t border-slate-100 flex flex-wrap gap-1.5">
                      <span className="text-[10px] text-slate-400 w-full font-medium">
                        Quick portal shortcuts:
                      </span>
                      {msg.references.map((ref, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleNavigateReference(ref.path)}
                          className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#205A40] bg-emerald-50 hover:bg-emerald-100 px-2.5 py-1 rounded-lg border border-emerald-200/60 transition-colors"
                        >
                          <span>{ref.label}</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      ))}
                    </div>
                  )}

                  <div
                    className={`mt-1.5 text-[9px] text-right ${
                      msg.sender === 'user' ? 'text-emerald-100/70' : 'text-slate-400'
                    }`}
                  >
                    {msg.timestamp}
                  </div>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-7 h-7 rounded-lg bg-slate-300 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-2.5 items-center">
                <div className="w-7 h-7 rounded-lg bg-[#205A40] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-none px-4 py-2.5 text-xs text-slate-400 flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggested Prompts Horizontal Bar */}
          <div className="bg-white border-t border-slate-100 px-3 py-2">
            <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-semibold mb-1.5">
              <Sparkles className="w-3 h-3 text-[#205A40]" />
              <span>Suggested questions:</span>
            </div>
            <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-slate-200">
              {SUGGESTED_QUICK_PROMPTS.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(prompt)}
                  disabled={isTyping}
                  className="shrink-0 text-[11px] font-medium bg-slate-100 hover:bg-emerald-50 hover:text-[#205A40] hover:border-emerald-200 text-slate-700 px-2.5 py-1 rounded-full border border-slate-200 transition-colors whitespace-nowrap disabled:opacity-50"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Input Bar */}
          <div className="p-3 bg-white border-t border-slate-200">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask aptitude, DSA, SQL, HR, or rules..."
                className="flex-1 text-xs border border-slate-300 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#205A40] focus:border-transparent"
                disabled={isTyping}
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim() || isTyping}
                className="bg-[#205A40] hover:bg-[#184632] disabled:opacity-40 text-white p-2.5 rounded-xl transition-colors shadow-sm focus:outline-none"
                title="Send question"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <div className="mt-1.5 text-center text-[10px] text-slate-400">
              Sahyadri SCEM Offline Placement Demo &bull; No external AI API connected
            </div>
          </div>
        </div>
      )}
    </>
  );
};
