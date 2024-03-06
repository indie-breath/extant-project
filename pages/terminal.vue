<script setup lang="ts">
  import { ref } from 'vue';

  const formInput = ref('');
  const formOutput = ref('');

  const submitForm = async () => {
    const { data: response } = await $fetch("/api/terminal", {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        input: formInput.value,
      },
    })

    if (response) {
      formOutput.value = formOutput.value + "root@extant-project:~ >> " + response + "\r\n";
      formInput.value = "";
    }
  }
</script>

<template>
  <div id="main">
    <textarea name="output" id="terminal_output" readonly>{{ formOutput }}</textarea>

    <form id="terminal" @submit.prevent="submitForm">
      <p>></p>
      <input type="text" v-model="formInput" name="input" id="terminal_input" autocomplete="off">
    </form>
  </div>
</template>

<style lang="postcss">
:root {
  --text_color: rgb(34, 180, 85);
}

#main {
  background-color: black;
  height: 100vh;
}

#terminal {
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: black;
  border-color: var(--text_color);
  border-width: 2px;
  border-top-style: solid;
  border-bottom-style: none;
  border-left-style: none;
  border-right-style: none;
}

#terminal_input {
  width: 90%;
  padding-left: 10px;
  background-color: black;
  outline: none;
  color: var(--text_color);
}

#terminal_output {
  height: 90%;
  width: 100%;
  padding-top: 20px;
  padding-left: 30px;
  background-color: black;
  outline: none;
  color: var(--text_color);
  resize: none;
}

#terminal_submit {
  color: var(--text_color);
  outline: none;
}

p {
  padding-left: 20px;
  color: var(--text_color);
  float: left;
}
</style>
