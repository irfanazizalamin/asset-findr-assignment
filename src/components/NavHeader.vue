<template>
  <nav class="fixed top-0 left-0 z-30 w-full md:pl-[256px]">
    <div class="flex justify-between bg-tertiary-lighten shadow-sm p-6">
      <h3 class="text-xl font-semibold">{{ pageTitle }}</h3>
      <div class="flex gap-4">
        <div>notif</div>
        <div>avatar</div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const pageTitle = computed(() => route.meta.title ?? "");
</script>
