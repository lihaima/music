<template>
 <router-view />
 <FlooterMusic />
</template>

<script setup>
import FlooterMusic from './components/FlooterMusic.vue'
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.icon {
  width: 25rem;
  height: 25rem;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
