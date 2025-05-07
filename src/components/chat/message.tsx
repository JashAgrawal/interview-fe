import { type ChatMessage } from "@/types/api";
import { cn, formatTimestamp } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Bot, User } from "lucide-react";

interface MessageProps {
  message: ChatMessage;
}

/**
 * Component for displaying a chat message
 */
export function Message({ message }: MessageProps) {
  const isUser = message.role === "user";
  
  return (
    <div className={`flex gap-3 ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`flex max-w-[80%] flex-col gap-2 rounded-lg p-4 ${
          isUser
            ? "bg-primary text-primary-foreground"
            : "bg-secondary text-secondary-foreground"
        }`}
      >
        <div className="flex items-center gap-2">
          <Badge variant={isUser ? "secondary" : "secondary"} className={cn(isUser ? "bg-background/90" : "bg-black text-white")}>
            {isUser ? (
              <>
                <User className="h-3 w-3" />
                <span>You</span>
              </>
            ) : (
              <>
                <Bot className="h-3 w-3" />
                <span>NewsGPT</span>
              </>
            )}
          </Badge>
          <span className="text-xs opacity-70">
            {formatTimestamp(message.timestamp)}
          </span>
        </div>
        <div className="text-sm">{message.content}</div>
      </div>
    </div>
  );
}
