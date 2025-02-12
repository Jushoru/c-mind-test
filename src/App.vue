<script setup>
import headerApp from "@/components/app/headerApp.vue";
</script>

<template>
  <div class="w-screen pt-[30px]">
    <headerApp/>
    <div class="w-screen">
      <div class="relative w-full h-[80%]">
        <RouterView />
      </div>
    </div>
  </div>

</template>
