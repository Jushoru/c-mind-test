<script setup>
import ButtonCutBigApp from "@/components/app/buttonCutBigApp.vue";
import MiniArticle from "@/components/layouts/miniArticle.vue";
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="flex flex-col items-center w-full">
    <div class="relative flex w-full max-w-[1629px] max-h-[860px] justify-center items-center px-[30px] overflow-hidden">
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

    <div class="bg-mainBlock w-full flex flex-col items-center mt-[130px] ">
      <div class="w-full max-w-[1629px] h-full px-[30px] py-[101px] ">
        <div class="flex items-center">
          <h2 class="min-w-max text-accent">
            Lorem ipsum,
          </h2>
          <hr class="flex flex-grow border-1 border-text ml-[180px] bg-text"/>
        </div>
        <h2 class="text-darkHeader">
          Lorem ipsum Lorem ipsum
        </h2>
        <p class="paragraph max-w-[1167px] text-text">
          Lorem Ipsum компании  разработано с учётом анализа передовых технологий, использованием лучших решений и их качественной модернизации под потребности конкретного заказчика. Успешная реализация проектов на ведущих предприятиях горно-обогатительной промышленности базируется на многолетнем опыте и высоких компетенциях наших сотрудников.
        </p>
        <MiniArticle>
          <img src="@/assets/img/article1.png"
               alt="картинка_статьи_1"
               width="926" height="475"
          />
        </MiniArticle>
        <MiniArticle :is-text-right="false">
          <img src="@/assets/img/article2.png"
               alt="картинка_статьи_1"
               width="926" height="475"
          />
        </MiniArticle>
      </div>
    </div>

    <div class="relative flex flex-col w-full max-w-[1629px] h-[860px] justify-start items-start overflow-hidden mt-[130px] bg-bg1 pt-[67px] pl-[69px]">
      <h1>SN</h1>
      <p class="paragraph max-w-[584px] text-white">Помогает повысить извлечение за счет поддержания оптимальных дозировок реагентов в ключевых точках процесса</p>
      <div class="absolute z-30 w-[353px] bottom-[-2px] right-0 overflow-hidden">
        <ButtonCutBigApp class="ml-[33px]"/>
        <div class="bg-white ml-[16px] -skew-x-[15deg] w-[343px] h-[37px]"/>
      </div>
    </div>


  </div>
</template>
<style scoped>
h1 {
  @apply text-[80px] font-medium leading-[96px] font-pfdin tracking-widest uppercase text-white
}
h2 {
  @apply text-[66px] font-medium leading-[79px] font-pfdin tracking-widest uppercase
}
.paragraph {
  @apply pt-[39px] font-pfdin font-normal text-[28px] leading-[33.6px]
}
</style>

