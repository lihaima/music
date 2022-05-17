<template>
  <div class='itemMusic'>
    <ItemMusicTop />
    <ItemMusicList />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import {useRoute} from 'vue-router'
import itemMusic from '../../store/itemMusic'

import ItemMusicTop from './children/ItemMusicTop.vue'
import ItemMusicList from './children/ItemMusicList.vue'

const state = itemMusic()
const route = useRoute()
onMounted(()=>{
  state.detail(route.query.id)
})

</script>

<style scoped lang='less'>

</style>