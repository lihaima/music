<template>
  <div class="home">
    <Navigation />
    <Swipe />
    <HomeList />
    <SongList />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import Navigation from "../../components/Navigation.vue";
import Swipe from "./children/Swipe.vue";
import HomeList from "./children/HomeList.vue";
import SongList from "./children/SongList.vue";
import homeStore from "../../store/home";
const state = homeStore();
onMounted(() => {
  state.getHomeInitialize();
});
</script>

<style scoped lang="less">
.home {
  padding: 20rem;
  height: 100vh;
}
</style>