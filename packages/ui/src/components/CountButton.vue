<script setup lang="ts">
import {ref } from "vue"

const count = ref(0)

</script>

<template>
  <button class="button" type="button" @click="count++">count is {{ count }}</button>
</template>

<style>
.button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #eee;
  cursor: pointer;
  transition: border-color 0.25s;
}
</style>