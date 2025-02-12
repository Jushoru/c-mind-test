<script setup>
import ButtonCutBigApp from "@/components/app/buttonCutBigApp.vue";
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="">
    <div class="relative flex w-full justify-center items-center px-[30px]">
      <video src="@/assets/videos/video1.mp4" muted autoplay loop
             width="100%"
             poster="@/assets/img/poster.png"
             preload="metadata"

      ></video>
      <div class="absolute z-30 w-[353px] bottom-[-2px] right-[30px] overflow-hidden">
        <ButtonCutBigApp class="ml-[33px]" @open="router.push('/form')" />
        <div class="bg-white ml-[16px] -skew-x-[15deg] w-[343px] h-[37px]"/>
      </div>
    </div>

    <div class="relative flex flex-col items-start h-[1620px] bg-mainBlock mt-[130px] px-[30px]">
      <hr class="absolute w-[65%] h-[2px] bg-text top-[137px] right-[31px]"/>
      <div class="mt-[101px] text-[66px] font-medium leading-[79px] font-pfdin tracking-widest uppercase">
        <h1 class="text-accent">
          Lorem ipsum,
        </h1>
        <h1 class="text-darkHeader">
          Lorem ipsum Lorem ipsum
        </h1>
      </div>
      <p class="w-[72.03%] pt-[39px] font-pfdin font-normal text-[28px] leading-[33.6px] text-left text-text tracking-normal">
        Lorem Ipsum компании  разработано с учётом анализа передовых технологий, использованием лучших решений и их качественной модернизации под потребности конкретного заказчика. Успешная реализация проектов на ведущих предприятиях горно-обогатительной промышленности базируется на многолетнем опыте и высоких компетенциях наших сотрудников.
      </p>

    </div>
  </div>
</template>
<style scoped>
.mainBlock {
  @apply relative flex w-full justify-center items-center
}
</style>

