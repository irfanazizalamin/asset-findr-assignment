<script setup>
import Default from "./layout/Default.vue";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div>
    <default>
      <router-view v-slot="{ Component, route }">
        <transition
          :name="route.meta.transition || 'scroll-x-transition'"
          mode="out-in"
        >
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </default>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
