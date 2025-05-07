import { useEffect, useRef } from "react";
import { type ChatMessage } from "@/types/api";
import { Message } from "./message";

interface MessageListProps {
  messages: ChatMessage[];
  loading?: boolean;
}

/**
 * Component for displaying a list of chat messages
 */
export function MessageList({ messages, loading = false }: MessageListProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4">
      {messages.length === 0 && !loading ? (
        <div className="flex h-full flex-col items-center justify-center">
          <div className="text-center">
            <h3 className="text-lg font-semibold">Welcome to NewsGPT!</h3>
            <p className="text-muted-foreground mt-2">
              Ask me anything about recent news and I'll try to help.
            </p>
          </div>
        </div>
      ) : (
        <>
          {messages.map((message, index) => (
            <Message key={index} message={message} />
          ))}
          {loading && (
            <div className="flex items-center gap-2 self-start rounded-lg bg-secondary p-4 text-secondary-foreground">
              <div className="flex space-x-1">
                <div className="h-2 w-2 animate-bounce rounded-full bg-current"></div>
                <div className="h-2 w-2 animate-bounce rounded-full bg-current [animation-delay:0.2s]"></div>
                <div className="h-2 w-2 animate-bounce rounded-full bg-current [animation-delay:0.4s]"></div>
              </div>
              <span className="text-sm">NewsGPT is thinking...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </>
      )}
    </div>
  );
}
