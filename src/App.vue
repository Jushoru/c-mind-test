<script setup>
import HeaderLayout from "@/components/layouts/headerLayout.vue";
</script>


<template>
  <div class="w-screen pt-[30px]">
    <HeaderLayout/>
    <div class="w-screen h-screen">
      <div class="relative w-full h-[80%]">
        <RouterView />
      </div>
    </div>
  </div>
</template>
