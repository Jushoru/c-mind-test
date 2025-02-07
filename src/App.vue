<script setup>
import headerApp from "@/components/app/headerApp.vue";
</script>

<template>
  <headerApp/>
  <div class="w-screen h-screen mb-[30px] pl-[30px] pr-[30px]">
    <div class="w-auto h-auto bg-black overflow-y-scroll">
      <div class="w-screen h-screen flex flex-col items-center overflow-hidden">
        <RouterView />
      </div>
    </div>
  </div>
</template>
