import { onMounted, ref } from 'vue'
import { isNil } from 'ramda'
import Firebase from '../services/Firebase'
import useUser from './User'

const messagesRef = Firebase.database().ref('messages')

const serializeMessages = snapshot => {
  const snapshotValue = snapshot.val()

  return !isNil(snapshotValue)
    ? Object.entries(snapshotValue).map(([key, data]) => ({ key, ...data }))
    : []
}

export default function useMessages() {
  const { username } = useUser()
  const messages = ref([])

  const sendMessage = (messageInput) => {
    messagesRef.push({
      username: username.value,
      content: messageInput
    })
  }

  onMounted(() => {
    messagesRef.on('value', snapshot => messages.value = serializeMessages(snapshot))
  })

  return {
    messages,
    sendMessage,
  }
}
