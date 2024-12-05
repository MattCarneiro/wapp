export default function ConversationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#efeae2]">
      {children}
    </div>
  )
}

