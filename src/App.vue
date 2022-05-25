<template>
 <router-view />
 <div class="di" v-if="itemMusicStore().playList.length">

 </div>
  <FlooterMusic />
</template>

<script setup>
import FlooterMusic from './components/FlooterMusic.vue'
import itemMusicStore from './store/itemMusic'
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
.di{
  height: 50rem;
  width: 100%;
}
</style>
