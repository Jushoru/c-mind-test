<script setup>
import ButtonCutBigApp from "@/components/app/buttonCutBigApp.vue";
import ButtonApp from "@/components/app/buttonApp.vue";
import MiniArticleLayout from "@/components/layouts/miniArticleLayout.vue";
import { useRouter } from "vue-router";
import FooterLayout from "@/components/layouts/footerLayout.vue";

const router = useRouter();
</script>

<template>
  <div class="flex flex-col items-center w-full">
    <div class="relative flex w-full max-w-[1629px] max-h-[860px] justify-center items-center desktop:px-[36px] px-[12px] overflow-hidden">
      <video src="@/assets/videos/video1.mp4" muted autoplay loop
             width="100%"
             poster="@/assets/img/poster.png"
             preload="metadata"
             class="rounded-[4px]"
      ></video>
      <div class="absolute z-30 w-[353px] bottom-[-2px] desktop:right-[36px] mobile:right-[30px] right-[12px] overflow-hidden">
        <ButtonCutBigApp class="ml-[33px]" @open="router.push('/form')" />
        <div class="bg-white ml-[16px] -skew-x-[15deg] w-[343px] h-[37px]"/>
      </div>
    </div>

    <div class="bg-mainBlock w-full flex flex-col items-center mt-[130px]">
      <div class="w-full max-w-[1629px] h-full desktop:px-[36px] mobile:px-[30px] px-[12px] py-[101px] ">
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
        <MiniArticleLayout>

          <img src="@/assets/img/article1.png"
               alt="картинка_статьи_1"
               width="926" height="475"
          />
        </MiniArticleLayout>
        <MiniArticleLayout :is-text-right="false">
          <img src="@/assets/img/article2.png"
               alt="картинка_статьи_1"
               width="926" height="475"
          />
        </MiniArticleLayout>
      </div>
    </div>

    <div class="relative flex flex-col w-full desktop:max-w-[1629px] mobile:max-w-[1023px] max-w-[375px] desktop:h-[860px]
                mobile:h-[509px] h-[649px] justify-start items-start overflow-hidden mt-[130px] desktop:bg-bg1 mobile:bg-bg1desktop bg-bg1mobile pt-[67px] pl-[69px]">
      <h1>SN</h1>
      <p class="paragraph max-w-[584px] text-white">Помогает повысить извлечение за счет поддержания оптимальных дозировок реагентов в ключевых точках процесса</p>
      <div class="absolute z-30 w-[353px] bottom-[-2px] right-0 overflow-hidden">
        <ButtonCutBigApp class="ml-[33px]" @open="router.push('#')"/>
        <div class="bg-white ml-[16px] -skew-x-[15deg] w-[343px] h-[37px]"/>
      </div>
    </div>

    <div class="w-full max-w-[1629px] desktop:px-[36px] mobile:px-[30px] px-[12px] my-[130px]">
      <div class="w-full bg-bg2 h-[383px] rounded-[4px] flex items-center pl-[73px]">
        <div class="w-[680px] h-[218px] flex flex-col items-start justify-start">
          <h3>Мы реализуем под ключ проекты любой сложности</h3>
          <ButtonApp class="mt-[37px]"@open="router.push('#')"/>
        </div>
      </div>
    </div>
  </div>
  <FooterLayout/>
</template>
<style scoped>
.hDefault {
  @apply font-medium font-pfdin tracking-wider uppercase
}
h1 {
  @apply hDefault text-[80px] leading-[96px] text-white
}
h2 {
  @apply hDefault text-[66px] leading-[79px]
}
h3 {
  @apply hDefault text-[50px] leading-[60px] text-white
}
.paragraph {
  @apply pt-[39px] font-pfdin font-normal text-[28px] leading-[33.6px]
}
</style>

