import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Send, Bot, User, Loader2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import clsx from 'clsx'; // Using clsx for cleaner conditional classes

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatterBox = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Welcome to CKR ChatterBox! 🚀 I'm your AI assistant powered by Gemini. I'm here to help with DHRC resources, engineering topics, DSA, career guidance, and much more. How can I assist you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null); // Ref for auto-growing textarea

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // useEffect for auto-growing textarea
  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto'; // Reset height to recalculate
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`; // Set to content height
    }
  }, [inputValue]);

  // --- Core sendMessage function remains unchanged ---
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
        text: data.response || "I apologize, but I couldn't process your request at the moment. Please try again.",
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error("ChatterBox Error:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm sorry, I'm having trouble connecting right now. Please check your internet connection and try again.",
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

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-gray-900 font-sans">
      
      {/* --- Top Notification --- */}
      <div className="bg-orange-100 dark:bg-orange-900/50 p-3 text-center text-sm text-orange-800 dark:text-orange-200">
        <p>
          To test the full potential of the ChatterBox, please{" "}
          <a href="https://dhrc-tools.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-semibold underline hover:text-orange-600 dark:hover:text-orange-300">
            log in
          </a>
          .
        </p>
      </div>

      {/* --- Header --- */}
      <header className="flex items-center p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 flex-shrink-0">
        <Link to="/" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
          <ArrowLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </Link>
        <div className="flex items-center gap-3 mx-auto">
            <img src="https://cdn-icons-png.flaticon.com/512/1055/1055672.png" alt="ChatterBox Icon" className="w-8 h-8"/>
            <h1 className="text-lg font-bold text-gray-800 dark:text-gray-100">CKR ChatterBox</h1>
        </div>
        <div className="w-9 h-9"></div> {/* Spacer to balance the back button */}
      </header>

      {/* --- Chat Messages Area --- */}
      <main className="flex-1 overflow-y-auto p-4 md:p-6">
        <div className="max-w-3xl mx-auto space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={clsx('flex items-start gap-3 w-full animate-fade-in', {
                'justify-end': !message.isBot,
              })}
            >
              {message.isBot && (
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                  <Bot size={20} className="text-white" />
                </div>
              )}
              <div
                className={clsx(
                  'max-w-[85%] px-4 py-3 rounded-2xl leading-relaxed break-words',
                  message.isBot
                    ? 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                    : 'bg-orange-500 text-white'
                )}
              >
                <p>{message.text}</p>
                <div className="text-xs opacity-70 mt-2 text-right">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex items-start gap-3 w-full animate-fade-in">
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                  <Bot size={20} className="text-white" />
                </div>
                <div className="px-4 py-3 rounded-2xl bg-gray-100 dark:bg-gray-700">
                    <Loader2 className="w-5 h-5 animate-spin text-orange-500" />
                </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </main>

      {/* --- Chat Input Form Area --- */}
      <footer className="p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-3xl mx-auto">
          <form
            onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
            className="relative flex items-center"
          >
            <textarea
              ref={textAreaRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask anything..."
              className="w-full border border-gray-300 dark:border-gray-600 rounded-2xl py-3 pl-4 pr-14 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none max-h-40"
              rows={1}
              disabled={isLoading}
            />
            <Button
              type="submit"
              size="icon"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full bg-orange-500 text-white disabled:bg-gray-400 dark:disabled:bg-gray-600 hover:bg-orange-600 transition-all"
              disabled={isLoading || !inputValue.trim()}
              aria-label="Send message"
            >
              {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
            </Button>
          </form>
        </div>
      </footer>
    </div>
  );
};

export default ChatterBox;