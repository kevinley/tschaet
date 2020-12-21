<template>
  <div class="view chat">
    <header>
      <button class="exit" @click="exit">Exit</button>
      <h1>Welcome, {{ username }}</h1>
    </header>
    <section class="chat-box">
      <div
        v-for="message in messages"
        :key="message.key"
        :class="equals(message.username, username) ? 'message current-user' : 'message'"
      >
        <div class="message-inner">
          <div class="username">
            {{ message.username }}
          </div>
          <div class="content">
            {{ message.content }}
          </div>
        </div>
      </div>
    </section>
    <footer>
      <form @submit.prevent="[sendMessage(messageInput), messageInput = '']">
        <input type="text" placeholder="Write a message..." v-model="messageInput">
        <input type="submit" value="Send" :disabled="isEmpty(messageInput)">
      </form>
    </footer>
  </div>
</template>

<script>
import { ref } from 'vue'
import { equals, isEmpty } from 'ramda'

import useUser from '../composables/User'
import useMessages from '../composables/Messages'

export default {
  setup() {
    const { username, exit } = useUser()
    const { messages, sendMessage } = useMessages()

    const messageInput = ref('')

    return {
      exit,
      username,
      equals,
      sendMessage,
      messageInput,
      messages,
      isEmpty,
    }
  }
}
</script>

<style lang="scss">
.chat {
  flex-direction: column;

  header {
    position: relative;
    display: block;
    width: 100%;
    padding: 50px 30px 10px;

    .exit {
      position: absolute;
      top: 15px;
      right: 15px;
      appearance: none;
      border: none;
      outline: none;
      background: none;
      color: #FFF;
      font-size: 18px;
      margin-bottom: 10px;
      text-align: right;
    }

    h1 {
      color: #FFF;
    }
  }

  .chat-box {
    border-radius: 24px 24px 0px 0px;
    background-color: #FFF;
    box-shadow: 0px 0px 12px rgba(100, 100, 100, 0.2);
    flex: 1 1 100%;
    padding: 30px;

    .message {
      display: flex;
      margin-bottom: 15px;

      .message-inner {
        .username {
          color: #888;
          font-size: 16px;
          margin-bottom: 5px;
          padding-left: 15px;
          padding-right: 15px;
        }
        .content {
          display: inline-block;
          padding: 10px 20px;
          background-color: #F3F3F3;
          border-radius: 999px;
          color: #333;
          font-size: 18px;
          line-height: 1.2em;
          text-align: left;
        }
      }

      &.current-user {
        margin-top: 30px;
        justify-content: flex-end;
        text-align: right;

        .message-inner {
          max-width: 75%;

          .content {
            color: #FFF;
            font-weight: 600;
            background-color: #34495E;
          }
        }
      }
    }
  }

  footer {
    position: sticky;
    bottom: 0px;
    background-color: #FFF;
    padding: 30px;
    box-shadow: 0px 0px 12px rgba(100, 100, 100, 0.2);

    form {
      display: flex;

      input[type="text"] {
        flex: 1 1 100%;
        appearance: none;
        border: none;
        outline: none;
        background: none;
        display: block;
        width: 100%;
        padding: 10px 15px;
        border-radius: 8px 0px 0px 8px;
        color: #333;
        font-size: 18px;
        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
        background-color: #F3F3F3;
        transition: 0.4s;

        &::placeholder {
          color: #888;
          transition: 0.4s;
        }
      }

      input[type="submit"] {
        appearance: none;
        border: none;
        outline: none;
        background: none;
        display: block;
        padding: 10px 15px;
        border-radius: 0px 8px 8px 0px;
        background-color: #34495E;
        color: #FFF;
        font-size: 18px;
        font-weight: 700;
      }
    }
  }
}
</style>