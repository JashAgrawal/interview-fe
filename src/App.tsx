import { Card } from '@/components/ui/card'
import { ChatContainer } from '@/components/chat/chat-container'

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted p-4">
      <Card className="flex h-[600px] w-full max-w-3xl flex-col overflow-hidden p-0">
        <ChatContainer />
      </Card>
    </div>
  )
}

export default App
