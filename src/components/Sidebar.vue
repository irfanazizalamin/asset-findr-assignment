<template>
  <aside class="sidebar">
    <img src="../assets/logo.png" alt="logo" class="mb-8" />

    <template v-for="(item, idx) in menuList" :key="idx">
      <router-link
        :to="item.route"
        class="sidebar-menu"
        :class="isActive(item.route) ? 'active' : ''"
      >
        <v-icon :icon="item.icon" size="large"></v-icon>
        <h6>{{ item.name }}</h6>
      </router-link>
    </template>
  </aside>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const { currentRoute } = useRouter();

const menuList = ref([
  {
    name: "Home",
    route: "/",
    icon: 'mdi-home-outline',
  },
  {
    name: "Manage Asset",
    route: "/asset",
    icon: 'mdi-wallet-outline',
  },
  {
    name: "Settings",
    route: "/settings",
    icon: 'mdi-cog-outline',
  },
]);

function isActive(route) {
  if (route === "/") return currentRoute.value.path === route;
  return currentRoute.value.path.includes(route);
}
</script>

<style scoped lang="scss">
.sidebar {
  @apply fixed top-0 left-0 bg-white h-screen z-40 transition-all
  hidden md:flex w-[256px] py-6 px-2 flex-col items-center border-r-2 border-r-tertiary;
}

.sidebar-menu {
  @apply px-4 py-2 cursor-pointer w-full flex items-center gap-6 mt-2
    hover:bg-primay-lighten transition-all font-medium;
}

.sidebar-menu.active {
  @apply bg-tertiary;
}
</style>
