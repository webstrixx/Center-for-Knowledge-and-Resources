import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Send, Bot, X, Loader2, MessageSquare } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import clsx from 'clsx'; // A tiny utility for conditional classnames

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your CKR AI assistant. Feel free to ask me anything about our resources, projects, or career guidance.",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  // --- Core functionality remains identical ---

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);
  
  // Auto-resize textarea
  useEffect(() => {
    if (textAreaRef.current) {
        textAreaRef.current.style.height = 'auto';
        textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, [inputValue]);


  const sendMessage = async (messageText: string) => {
    if (!messageText.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('gemini-chat', {
        body: { message: messageText }
      });

      if (error) throw error;

      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response || "I apologize, but I couldn't process your request.",
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);

    } catch (error) {
      console.error('Error calling Gemini chat:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm having trouble connecting right now. Please try again in a moment.",
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = async () => {
    const message = inputValue.trim();
    if (!message) return;
    setInputValue('');
    await sendMessage(message);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // --- JSX with Enhanced Styling ---
  return (
    <>
      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes slideOut {
          from { opacity: 1; transform: translateY(0) scale(1); }
          to { opacity: 0; transform: translateY(20px) scale(0.95); }
        }
        .animate-slide-in { animation: slideIn 0.3s ease-out forwards; }
        .animate-slide-out { animation: slideOut 0.3s ease-out forwards; }
      `}</style>

      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className={clsx(
            "rounded-full w-16 h-16 bg-orange-500 text-white shadow-lg flex items-center justify-center transition-transform duration-300 ease-in-out hover:bg-orange-600",
            { 'rotate-90': isOpen }
          )}
          size="icon"
        >
          {isOpen ? <X className="w-7 h-7" /> : <MessageSquare className="w-7 h-7" />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-28 right-6 w-[440px] max-w-[90vw] h-[70vh] max-h-[600px] z-40 origin-bottom-right animate-slide-in">
          <div className="flex flex-col h-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700">
            
            {/* Header */}
            <header className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
              <div className='flex items-center gap-3'>
                <div className="relative">
                    <Bot className="w-8 h-8 text-orange-500" />
                    <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-white dark:border-gray-800" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 dark:text-gray-100">CKR AI Assistant</h3>
                  <p className="text-xs text-green-600 dark:text-green-400">Online</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <X className="w-5 h-5"/>
              </Button>
            </header>
            
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-5">
              {messages.map((message) => (
                <div key={message.id} className={clsx('flex items-end gap-2', { 'justify-end': !message.isBot })}>
                  {message.isBot && (
                    <div className="w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                      <Bot size={18} className="text-white" />
                    </div>
                  )}
                  <div className={clsx(
                      'max-w-[85%] p-3 rounded-lg leading-relaxed',
                      message.isBot 
                        ? 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none'
                        : 'bg-orange-500 text-white rounded-br-none'
                  )}>
                    <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex items-end gap-2">
                    <div className="w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                        <Bot size={18} className="text-white" />
                    </div>
                    <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700 rounded-bl-none">
                        <Loader2 className="w-5 h-5 animate-spin text-orange-500" />
                    </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-gray-200 dark:border-gray-700 p-3 bg-white dark:bg-gray-800">
              <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 rounded-full p-1.5">
                <textarea
                  ref={textAreaRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Ask anything..."
                  className="flex-1 bg-transparent text-sm text-gray-900 dark:text-gray-100 px-3 py-2 focus:outline-none resize-none max-h-24"
                  rows={1}
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  onClick={handleSendMessage}
                  size="icon"
                  className={clsx(
                    "rounded-full w-9 h-9 flex-shrink-0 transition-colors",
                    inputValue.trim()
                        ? 'bg-orange-500 text-white hover:bg-orange-600'
                        : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400'
                  )}
                  disabled={isLoading || !inputValue.trim()}
                >
                  {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;