<template>
  <JoinView v-if="isEmpty(username)" />
  <ChatRoom v-else />
</template>

<script>
import { isEmpty } from 'ramda'

import useUser from './composables/User'

import JoinView from './components/JoinView'
import ChatRoom from './components/ChatRoom'

export default {
  setup() {
    const { username } = useUser()

    return {
      username,
      isEmpty,
      JoinView,
      ChatRoom,
    }
  }
}
</script>

<style lang="scss">
* {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

.view {
	display: flex;
	justify-content: center;
	min-height: 100vh;
	background-color: #34495E;
}
</style>
