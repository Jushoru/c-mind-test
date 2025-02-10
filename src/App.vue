<script setup>
import headerApp from "@/components/app/headerApp.vue";
</script>

<template>
  <div class="relative h-screen w-screen pt-[30px]">
    <headerApp/>
    <div class="relative w-full h-[80%] pl-[30px] pr-[30px]">
      <RouterView />
    </div>
  </div>
</template>
