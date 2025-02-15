<script setup>
import HeaderLayout from "@/components/layouts/headerLayout.vue";
</script>


<template>
  <div class="w-screen pt-[30px]">
      <div class="flex flex-col items-center justify-center w-full h-[80%] ">
        <HeaderLayout/>
        <RouterView />
      </div>
  </div>
</template>
