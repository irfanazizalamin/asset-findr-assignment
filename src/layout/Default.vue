<template>
  <div>
    <sidebar />
    <nav-header />
    <div class="md:ml-[280px] pb-32">
      <div class="px-4 mt-20 md:px-6 md:mt-28">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "../components/Sidebar.vue";
import NavHeader from "../components/NavHeader.vue";
</script>
