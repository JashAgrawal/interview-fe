import axios, { type AxiosInstance, type AxiosResponse } from 'axios';
import type { ChatResponse, SessionHistoryResponse, SessionResetResponse } from '@/types/api';

// Base URL for API
const API_BASE_URL = 'http://localhost:3000/api';

// Session ID storage key
const SESSION_ID_KEY = 'newsGptSessionId';

/**
 * API client for the NewsGPT backend
 */
class ApiService {
  private api: AxiosInstance;
  private sessionId: string | null;

  constructor() {
    // Get session ID from localStorage if available
    this.sessionId = localStorage.getItem(SESSION_ID_KEY);

    // Create axios instance with default config
    this.api = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Add session ID to requests
    this.api.interceptors.request.use((config) => {
      if (this.sessionId) {
        config.headers['x-session-id'] = this.sessionId;
      }
      return config;
    });

    // Save session ID from responses
    this.api.interceptors.response.use((response) => {
      if (response.data.sessionId) {
        this.sessionId = response.data.sessionId;
        if (this.sessionId) {
          localStorage.setItem(SESSION_ID_KEY, this.sessionId);
        }
      }
      return response;
    });
  }

  /**
   * Send a chat message to the API
   * @param query The user's query
   * @returns Promise with the chat response
   */
  async sendChatMessage(query: string): Promise<ChatResponse> {
    try {
      const response: AxiosResponse<ChatResponse> = await this.api.post('/chat', { query });
      return response.data;
    } catch (error) {
      console.error('Error sending chat message:', error);
      throw error;
    }
  }

  /**
   * Get chat history for the current session
   * @returns Promise with the session history
   */
  async getChatHistory(): Promise<SessionHistoryResponse> {
    try {
      const response: AxiosResponse<SessionHistoryResponse> = await this.api.get('/session/history');
      return response.data;
    } catch (error) {
      console.error('Error getting chat history:', error);
      throw error;
    }
  }

  /**
   * Reset the current chat session
   * @returns Promise with the reset response
   */
  async resetChatSession(): Promise<SessionResetResponse> {
    try {
      const response: AxiosResponse<SessionResetResponse> = await this.api.post('/session/reset');
      return response.data;
    } catch (error) {
      console.error('Error resetting chat session:', error);
      throw error;
    }
  }

  /**
   * Get the current session ID
   * @returns The session ID or null if not set
   */
  getSessionId(): string | null {
    return this.sessionId;
  }
}

// Export a singleton instance
export const apiService = new ApiService();
