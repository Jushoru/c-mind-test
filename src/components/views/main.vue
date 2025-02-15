<script setup>
import ButtonCutBigApp from "@/components/app/buttonCutBigApp.vue";
import ButtonApp from "@/components/app/buttonApp.vue";
import MiniArticleLayout from "@/components/layouts/miniArticleLayout.vue";
import { useRouter } from "vue-router";
import FooterLayout from "@/components/layouts/footerLayout.vue";
import {onMounted, onUnmounted, ref} from "vue";

const router = useRouter();
const screenWidth = ref(window.innerWidth)
const updateWidth = () => {
  screenWidth.value = window.innerWidth
}
onMounted(() => {
  window.addEventListener('resize', updateWidth);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateWidth);
});
</script>

<template>
  <div class="flex flex-col items-center w-full overflow-x-hidden">
    <div class="relative flex w-full max-w-[1629px] max-h-[860px] justify-center items-center desktop:px-[36px]
                mobile:px-[30px] px-[12px] overflow-hidden mt-[-1px]"
    >
      <video src="@/assets/videos/video1.mp4" muted autoplay loop
             width="100%"
             poster="@/assets/img/poster.png"
             preload="metadata"
             class="desktop:rounded-[4px] mobile:rounded-[4px]"
      ></video>
      <div class="absolute z-30 desktop:w-[353px] mobile:w-[260px] w-[232px] bottom-[-2px]
                  desktop:right-[36px] mobile:right-[30px] right-[12px] desktop:overflow-hidden mobile:overflow-hidden overflow-hidden">
        <ButtonCutBigApp class="desktop:ml-[33px] mobile:ml-[33px] ml-[40px]" @open="router.push('/form')">
          <img src="@/assets/icons/rightArrow.svg"
               alt="перейти_к_форме"
               class="absolute desktop:top-[42px] mobile:top-[20px] top-[16px] skew-x-[15deg] desktop:left-[240px] mobile:left-[190px] left-[165px]"
          >
        </ButtonCutBigApp>
        <div v-if="screenWidth >= 868" class="bg-white desktop:ml-[16px] mobile:ml-[22px] -skew-x-[15deg] desktop:w-[343px] mobile:w-[243px] h-[37px]"/>
      </div>
    </div>

    <div class="bg-mainBlock w-full flex flex-col items-center desktop:mt-[130px] mobile:mt-[100px] mt-[80px]">
      <div class="w-full max-w-[1629px] h-full desktop:px-[36px] mobile:px-[30px] px-[12px] desktop:py-[101px] py-[40px]">
        <div class="flex items-center">
          <h2 class="min-w-max text-accent">
            Lorem ipsum,
          </h2>
          <hr class="flex flex-grow border-1 border-text desktop:ml-[180px] mobile:ml-[140px] ml-[80px] bg-text"/>
        </div>
        <h2 class="text-darkHeader">
          Lorem ipsum Lorem ipsum
        </h2>
        <p class="paragraph max-w-[1167px] text-text">
          Lorem Ipsum компании  разработано с учётом анализа передовых технологий, использованием лучших решений и их качественной модернизации под потребности конкретного заказчика. Успешная реализация проектов на ведущих предприятиях горно-обогатительной промышленности базируется на многолетнем опыте и высоких компетенциях наших сотрудников.
        </p>
        <MiniArticleLayout>
          <picture>
            <source srcset="@/assets/img/article1mobile.png" media="(max-width: 868px)">
            <source srcset="@/assets/img/article1desktop.png" media="(max-width: 1280px)">
            <img src="@/assets/img/article1.png" alt="картинка_статьи_1" width="926" height="475">
          </picture>
        </MiniArticleLayout>

        <MiniArticleLayout :is-text-right="false">
          <picture>
            <source srcset="@/assets/img/article2mobile.png" media="(max-width: 868px)">
            <source srcset="@/assets/img/article2desktop.png" media="(max-width: 1280px)">
            <img src="@/assets/img/article2.png" alt="картинка_статьи_2" width="926" height="475">
          </picture>
        </MiniArticleLayout>
      </div>
    </div>

    <div class="relative flex flex-col w-full max-w-[1629px] desktop:h-[860px] bg-right-bottom mobile:h-[509px]
                h-[649px] justify-start items-start overflow-hidden desktop:mt-[130px] mobile:mt-[100px] mt-[80px]
                bg-bg1 desktop:pt-[67px] mobile:pt-[40px] pt-[60px] desktop:pl-[69px] mobile:pl-[40px] pl-[12px]"
    >
      <h1>SN</h1>
      <p class="paragraph desktop:max-w-[584px] mobile:max-w-[360px] max-w-[351px] text-white">Помогает повысить извлечение за счет поддержания оптимальных дозировок реагентов в ключевых точках процесса</p>
      <div class="absolute z-30 desktop:w-[373px] mobile:w-[225px] w-[200px] bottom-[-2px] right-0 overflow-hidden">
        <ButtonCutBigApp class="ml-[33px]" @open="router.push('#')" text="Подробнее">
          <img src="@/assets/icons/rightArrow.svg"
               alt="перейти_к_форме"
               class="absolute desktop:top-[42px] mobile:top-[20px] top-[16px] skew-x-[15deg] desktop:left-[240px] mobile:left-[155px] left-[120px]"
          >
        </ButtonCutBigApp>
        <div class="bg-white desktop:ml-[16px] mobile:ml-[22px] -skew-x-[15deg] desktop:w-[373px] mobile:w-[212px] desktop:h-[37px] mobile:h-[30px] h-0"/>
      </div>
    </div>

    <div class="w-full max-w-[1629px] desktop:px-[36px] mobile:px-[30px] px-0 desktop:my-[130px] mobile:my-[100px] my-[80px]">
      <div class="w-full bg-right-bottom desktop:bg-bg2 mobile:bg-bg2 bg-bg2desktop desktop:h-[383px] mobile:h-[383px]
                  h-[500px] rounded-[4px] desktop:pl-[73px] mobile:pl-[60px] pl-[12px] desktop:pt-[86px] mobile:pt-[60] pt-[40px]">
        <div class="w-[680px] h-[218px] flex flex-col items-start justify-start">
          <h3>Мы реализуем под ключ проекты любой сложности</h3>
          <ButtonApp class="desktop:mt-[37px] mobile:mt-[37px] mt-[24px]" @open="router.push('#')"/>
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
  @apply hDefault desktop:text-[80px] mobile:text-[47px] text-[40px] desktop:leading-[96px] mobile:leading-[56.4px] leading-[48px] text-white
}
h2 {
  @apply hDefault desktop:text-[66px] mobile:text-[47px] text-[40px] desktop:leading-[79px] mobile:leading-[56.4px] leading-[48px]
}
h3 {
  @apply hDefault desktop:text-[50px] mobile:text-[47px] text-[32px] desktop:leading-[60px] mobile:leading-[56.4px] leading-[38.4px] text-white
}
.paragraph {
  @apply desktop:pt-[40x] mobile:pt-5 pt-[60px] font-pfdin font-normal desktop:text-[28px] mobile:text-[16px] text-[20px] desktop:leading-[33.6px] mobile:leading-[20.19px] leading-[24px]
}
</style>

