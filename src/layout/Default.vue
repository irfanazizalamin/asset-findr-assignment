<template>
  <div>
    <sidebar />
    <nav-header />
    <div class="md:ml-[256px] pb-32 bg-gray-100">
      <div class="mt-[76px] p-6">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "../components/Sidebar.vue";
import NavHeader from "../components/NavHeader.vue";
</script>
