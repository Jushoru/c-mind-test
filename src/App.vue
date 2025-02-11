<script setup>
import headerApp from "@/components/app/headerApp.vue";
</script>

<template>
  <div class="flex justify-center">
    <div class="h-screen w-screen max-w-[2000px] pt-[30px] overflow-x-hidden">
      <headerApp/>
      <div class="relative w-full h-[80%] pl-[30px] pr-[30px]">
        <RouterView />
      </div>
    </div>
  </div>

</template>
