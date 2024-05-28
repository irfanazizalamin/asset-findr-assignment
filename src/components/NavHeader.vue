<template>
  <nav class="fixed top-0 left-0 z-30 w-full md:pl-[256px]">
    <div class="flex justify-between bg-tertiary-lighten shadow-sm p-6">
      <h3 class="text-xl font-semibold">{{ pageTitle }}</h3>
      <div class="flex items-center gap-4">
        <div class="relative hover:cursor-pointer">
          <v-icon icon="mdi-bell-outline" size="small"> </v-icon>
          <div class="absolute top-[0.5px] right-[0.5px] h-[10px] w-[10px] bg-red-600 rounded-full"></div>
        </div>
        <img
          src="../assets/avatar.png"
          alt=""
          class="h-8 w-8 rounded-full bg-orange-300 cursor-pointer"
        />
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
