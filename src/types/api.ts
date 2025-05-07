/**
 * Represents a chat message in the system
 */
export interface ChatMessage {
  /** The role of the message sender (user or assistant) */
  role: "user" | "assistant";
  
  /** The content of the message */
  content: string;
  
  /** Unix timestamp in milliseconds */
  timestamp: number;
}

/**
 * Response from the chat API
 */
export interface ChatResponse {
  /** The session ID */
  sessionId: string;
  
  /** The assistant's response */
  response: string;
  
  /** ISO timestamp string */
  timestamp: string;
}

/**
 * Response from the session history API
 */
export interface SessionHistoryResponse {
  /** The session ID */
  sessionId: string;
  
  /** Array of chat messages */
  history: ChatMessage[];
  
  /** ISO timestamp string */
  timestamp: string;
}

/**
 * Response from the session reset API
 */
export interface SessionResetResponse {
  /** The session ID */
  sessionId: string;
  
  /** Success message */
  message: string;
  
  /** ISO timestamp string */
  timestamp: string;
}

/**
 * Error response from the API
 */
export interface ErrorResponse {
  /** Error message */
  error: string;
}
