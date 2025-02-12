<script setup>
import headerApp from "@/components/app/headerApp.vue";
</script>

<template>
  <div class="flex justify-center ">
    <div class="h-screen w-screen max-w-[2000px] overflow-x-hidden pt-[30px]">
      <headerApp/>
      <div class="relative w-full h-[80%]">
        <RouterView />
      </div>
    </div>
  </div>

</template>
