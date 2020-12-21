<template>
  <div class="view join">
    <form class="join-form" @submit.prevent="() => join(usernameInput)">
      <div class="form-inner">
        <h1 class="welcome">Welcome to Tschaet</h1>
        <label for="username">Username</label>
        <input id="username" type="text" v-model="usernameInput" placeholder="Please enter your username...">
        <input type="submit" value="Join" :disabled="isEmpty(usernameInput)">
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { isEmpty } from 'ramda'

import useUser from '../composables/User'

export default {
  setup() {
    const { join } = useUser()

    const usernameInput = ref('')

    return {
      usernameInput,
      join,
      isEmpty,
    }
  }
}
</script>

<style lang="scss">
.join {
  align-items: center;

  .join-form {
    display: block;
    width: 100%;
    padding: 15px;

    .form-inner {
      display: block;
      background-color: #FFF;
      padding: 50px 15px;
      border-radius: 16px;
      box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);

      h1 {
        color: #34495E;
        font-size: 28px;
        margin-bottom: 30px;
        text-align: center;
      }

      label {
        display: block;
        margin-bottom: 5px;
        color: #AAA;
        font-size: 16px;
        transition: 0.4s;
      }

      input[type="text"] {
        appearance: none;
        border: none;
        outline: none;
        background: none;
        display: block;
        width: 100%;
        padding: 10px 15px;
        border-radius: 8px;
        margin-bottom: 15px;

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
        width: 100%;
        padding: 10px 15px;
        background-color: #34495E;
        border-radius: 8px;
        color: #FFF;
        font-size: 18px;
        font-weight: 700;
      }

      &:focus-within {
        label {
          color: #34495E;
        }

        input[type="text"] {
          background-color: #FFF;
          box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);

          &::placeholder {
            color: #666;
          }
        }
      }
    }
  }
}
</style>