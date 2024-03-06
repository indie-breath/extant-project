<script setup lang="ts">
  import { ref } from 'vue';

  const isApiRespond = ref(false);
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
      formOutput.value = formOutput.value + response + "\r\n";
      formInput.value = "";
    }
  }
</script>

<template>
  <div id="main">
    <textarea name="output" id="terminal_output" cols="100" rows="25">{{ formOutput }}</textarea>

    <form id="terminal" @submit.prevent="submitForm">
      <input type="text" v-model="formInput" name="input" id="terminal_input">
      <input type="submit" id="terminal_submit" value="Enter">
    </form>
  </div>
</template>

<style>
#terminal {
  border-style: solid;
  border-color: black;
  border-width: 2px;
}

#terminal_input {
  border-style: solid;
  border-color: black;
  border-width: 2px;
}

#terminal_output {
  border-style: solid;
  border-color: black;
  border-width: 2px;
}
</style>
