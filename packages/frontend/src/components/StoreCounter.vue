<script setup lang="ts">
// import { useCountStore } from '../stores/CountStore';

const countStore = useCountStore()
</script>

<template>
  <div>
    <button @click="countStore.count--">-</button>
    {{ countStore.count }}
    <button @click="countStore.count++">+</button>
  </div>
</template>