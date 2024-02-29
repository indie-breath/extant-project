<script setup lang="ts">
  import { ref } from 'vue';

  const isApiRespond = ref(false);
  const formInput = ref('');
  const formOutput = ref('');

  const submitForm = async () => {
    console.log("Got to submit " + JSON.stringify(formInput) + " ... " + formInput._value);
    const { data: response } = await $fetch("/api/terminal_handler", {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        input: formInput.value,
      },
    })

    if (response) {
      //TODO: figure out how to newline this shit
      formOutput.value = formOutput.value + response;
    }
  }
</script>

<template>
  <div id="main">
    <div id="terminal_output">{{ formOutput }}</div>

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
