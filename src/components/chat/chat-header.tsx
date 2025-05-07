import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

interface ChatHeaderProps {
  onReset: () => void;
  isResetting?: boolean;
}

/**
 * Component for chat header with reset button
 */
export function ChatHeader({ onReset, isResetting = false }: ChatHeaderProps) {
  return (
    <div className="border-b bg-background p-4 sticky top-0 z-10 flex items-center justify-between">
      <div>
        <h1 className="text-xl font-bold">NewsGPT</h1>
        <p className="text-sm text-muted-foreground">
          Ask me anything about recent news
        </p>
      </div>
      <Button
        variant="outline"
        size="sm"
        onClick={onReset}
        disabled={isResetting}
      >
        <RefreshCw className={`h-4 w-4 mr-2 ${isResetting ? "animate-spin" : ""}`} />
        Reset Chat
      </Button>
    </div>
  );
}
