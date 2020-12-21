import { ref, onMounted } from 'vue'
import { isNil } from 'ramda'

const username = ref('')

export default function useUser() {
  const join = usernameInput => {
    username.value = usernameInput
    localStorage.username = usernameInput
  }

  const exit = () => {
    username.value = ''
    localStorage.username = ''
  }

  onMounted(() => {
    if (!isNil(localStorage.username)) {
      username.value = localStorage.username
    }
  })

  return {
    join,
    exit,
    username,
  }
}
