import { Suspense } from 'react'
import { fetchMessages } from '@/lib/fetchMessages'
import ConversationViewer from '@/components/ConversationViewer'
import LoadingScreen from '@/components/LoadingScreen'
import InstanceNotFound from '@/components/InstanceNotFound'
import NoMessagesFound from '@/components/NoMessagesFound'

export default async function ConversationPage({ params }: { params: { name: string; phoneNumber: string } }) {
  try {
    const messages = await fetchMessages(params.name, params.phoneNumber)

    if (messages === null) {
      return <InstanceNotFound name={params.name} />
    }

    if (messages.length === 0) {
      return <NoMessagesFound name={params.name} phoneNumber={params.phoneNumber} />
    }

    return (
      <Suspense fallback={<LoadingScreen />}>
        <ConversationViewer name={params.name} phoneNumber={params.phoneNumber} messages={messages} />
      </Suspense>
    )
  } catch (error) {
    console.error('Error fetching messages:', error)
    return <InstanceNotFound name={params.name} />
  }
}

