# NewsGPT - AI Chatbot for News

NewsGPT is a RAG-powered AI chatbot for news websites that answers user queries based on recent news articles. It features session-based interactions, in-memory history storage, and a streaming/chat-like experience.

![NewsGPT Screenshot](https://via.placeholder.com/800x450.png?text=NewsGPT+Screenshot)

## 🚀 Features

- **AI-Powered News Assistant**: Ask questions about recent news and get intelligent answers
- **Session-Based Interactions**: Maintains conversation context within a session
- **Responsive UI**: Clean, modern interface built with React 19 and Tailwind CSS
- **Streaming Responses**: Chat-like experience with typing indicators
- **Session Management**: Reset conversations and view chat history

## 🛠️ Tech Stack

### Frontend
- React 19 with TypeScript
- Tailwind CSS for styling
- shadcn/ui components
- Vite for fast development and building

### Backend
- Express.js with TypeScript
- Jina Embeddings for vector embeddings
- Chroma as vector database
- Google Gemini API for text generation
- Session management via x-session-id header

## 🏗️ Project Structure

```
src/
├── components/
│   ├── chat/
│   │   ├── chat-container.tsx   # Main chat container component
│   │   ├── chat-header.tsx      # Header with reset button
│   │   ├── chat-input.tsx       # Message input component
│   │   ├── message.tsx          # Individual message component
│   │   └── message-list.tsx     # List of messages
│   └── ui/                      # UI components (shadcn/ui)
├── lib/
│   ├── api.ts                   # API service for backend communication
│   └── utils.ts                 # Utility functions
├── types/
│   └── api.ts                   # TypeScript interfaces for API
├── App.tsx                      # Main application component
├── main.tsx                     # Application entry point
└── index.css                    # Global styles
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Backend API running (see backend repository)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/newsgpt-client.git
   cd newsgpt-client
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 🔌 API Integration

The frontend communicates with the backend API through the following endpoints:

- `POST /api/chat`: Send a user message and receive an AI response
- `GET /api/session/history`: Get chat history for the current session
- `POST /api/session/reset`: Reset the current chat session

Session management is handled via the `x-session-id` header, which is automatically managed by the API service.

## 🧩 Components

- **ChatContainer**: Main component that manages state and API calls
- **ChatHeader**: Header with title and reset button
- **MessageList**: Displays chat messages with auto-scroll
- **Message**: Individual message component with user/assistant styling
- **ChatInput**: Input field for sending messages

## 🛣️ Roadmap

- [ ] Add speech-to-text input
- [ ] Implement feedback buttons (👍/👎) for responses
- [ ] Add support for image uploads
- [ ] Implement response citations
- [ ] Add dark/light theme toggle

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Vite](https://vitejs.dev/)
- [Google Gemini API](https://ai.google.dev/)
