import amqp from 'amqplib'

export async function setupRabbitMQ() {
  const connection = await amqp.connect(process.env.RABBITMQ_URL!)
  const channel = await connection.createChannel()
  
  await channel.prefetch(parseInt(process.env.RABBITMQ_PREFETCH || '10'))
  
  // Assume we have a queue named 'whatsapp_messages'
  await channel.assertQueue('whatsapp_messages', { durable: true })
  
  channel.consume('whatsapp_messages', async (msg) => {
    if (msg) {
      // Process the message here
      console.log('Received message:', msg.content.toString())
      
      // Acknowledge the message
      channel.ack(msg)
    }
  })
}

