<script setup lang="ts">
import { CounterButton, MyButton, NamedButton } from "ui"
const message = ref("not clicked")
</script>

<template>
  <div>
    <MyButton variant="primary" size="large" label="ダミーボタン" />
  </div>
  <div>
    <CounterButton />
  </div>
  <div>
    <NamedButton name="My Library Component" @click="message = $event"/>
    <p>{{ message }}</p>
  </div>
  <NuxtWelcome />
</template>
