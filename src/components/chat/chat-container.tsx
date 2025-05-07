import { useState, useEffect } from "react";
import { type ChatMessage } from "@/types/api";
import { apiService } from "@/lib/api";
import { ChatHeader } from "./chat-header";
import { MessageList } from "./message-list";
import { ChatInput } from "./chat-input";

/**
 * Main chat container component
 */
export function ChatContainer() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isResetting, setIsResetting] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);

  // Load chat history on initial render
  useEffect(() => {
    const loadChatHistory = async () => {
      try {
        setLoading(true);
        const response = await apiService.getChatHistory();
        setMessages(response.history);
        setError(null);
      } catch (err) {
        console.error("Failed to load chat history:", err);
        setError("Failed to load chat history. Please try again later.");
      } finally {
        setLoading(false);
        setInitialLoad(false);
      }
    };

    loadChatHistory();
  }, []);

  // Handle sending a new message
  const handleSendMessage = async (content: string) => {
    try {
      // Add user message to state immediately
      const userMessage: ChatMessage = {
        role: "user",
        content,
        timestamp: Date.now(),
      };
      
      setMessages((prev) => [...prev, userMessage]);
      setLoading(true);
      setError(null);

      // Send message to API
      const response = await apiService.sendChatMessage(content);
      
      // Add assistant response to state
      const assistantMessage: ChatMessage = {
        role: "assistant",
        content: response.response,
        timestamp: new Date(response.timestamp).getTime(),
      };
      
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      console.error("Failed to send message:", err);
      setError("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Handle resetting the chat
  const handleResetChat = async () => {
    try {
      setIsResetting(true);
      setError(null);
      await apiService.resetChatSession();
      setMessages([]);
    } catch (err) {
      console.error("Failed to reset chat:", err);
      setError("Failed to reset chat. Please try again later.");
    } finally {
      setIsResetting(false);
    }
  };

  return (
    <div className="flex h-full flex-col">
      <ChatHeader onReset={handleResetChat} isResetting={isResetting} />
      
      {error && (
        <div className="bg-destructive/10 text-destructive p-2 text-center text-sm">
          {error}
        </div>
      )}
      
      <MessageList messages={messages} loading={loading} />
      
      <ChatInput 
        onSendMessage={handleSendMessage} 
        disabled={loading || isResetting || initialLoad} 
      />
    </div>
  );
}
