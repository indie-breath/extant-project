<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})
</script>

<template>
  <div class="flex justify-center bg-[#7A7A7A]">
	  <img src="./public/Extant_Tasc_2.png" alt="404" width="400px">
  </div>
</template>

