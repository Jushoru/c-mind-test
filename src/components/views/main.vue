<script setup>
import ButtonCutBig from "@/components/app/buttonCutBig.vue";
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="">
    <div class="relative flex w-full justify-center items-center">
      <video src="@/assets/videos/video1.mp4" muted autoplay loop
             width="100%"
             poster="@/assets/img/poster.png"
             preload="metadata"

      ></video>
      <div class="absolute z-30 w-[353px] bottom-0 right-0 overflow-hidden">
        <ButtonCutBig class="ml-[33px]" @open="router.push('/form')" />
        <div class="bg-white ml-[16px] -skew-x-[15deg] w-[343px] h-[37px]"/>
      </div>


    </div>
  </div>
</template>
<style scoped>

</style>

