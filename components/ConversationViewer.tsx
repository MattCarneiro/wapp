import MessageList from '@/components/MessageList'
import Header from '@/components/Header'

export default function ConversationViewer({ name, phoneNumber, messages }: { name: string; phoneNumber: string; messages: any[] }) {
  return (
    <div className="flex flex-col h-screen bg-[#efeae2]">
      <Header phoneNumber={phoneNumber} />
      <div className="flex-1 overflow-y-auto">
        <MessageList messages={messages} />
      </div>
    </div>
  )
}

