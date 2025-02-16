<script setup>
import ButtonCutBigApp from "@/components/app/buttonCutBigApp.vue";
import ButtonApp from "@/components/app/buttonApp.vue";
import MiniArticleLayout from "@/components/layouts/miniArticleLayout.vue";
import { useRouter } from "vue-router";
import FooterLayout from "@/components/layouts/footerLayout.vue";
import {onMounted, onUnmounted, ref} from "vue";
import DialogLayout from "@/components/layouts/dialogLayout.vue";
import FormLayout from "@/components/layouts/formLayout.vue";

const router = useRouter();
const screenWidth = ref(window.innerWidth)
const dialogTarget = ref()
const updateWidth = () => {
  screenWidth.value = window.innerWidth
}
const showDialog = () => {
  dialogTarget.value.show()

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
                tablet:px-[30px] px-[12px] overflow-hidden mt-[-1px]"
    >
      <video src="@/assets/videos/video1.mp4" muted autoplay loop
             width="100%"
             poster="@/assets/img/poster.png"
             preload="metadata"
             class="desktop:rounded-[4px] tablet:rounded-[4px]"
      ></video>
      <div class="absolute z-30 desktop:w-[353px] tablet:w-[260px] w-[232px] bottom-[-2px]
                  desktop:right-[36px] tablet:right-[30px] right-[12px] desktop:overflow-hidden tablet:overflow-hidden overflow-hidden">
        <ButtonCutBigApp class="desktop:ml-[33px] tablet:ml-[33px] ml-[40px]" @open="showDialog">
          <img src="@/assets/icons/rightArrow.svg"
               alt="перейти_к_форме"
               class="absolute desktop:top-[42px] tablet:top-[20px] top-[16px] skew-x-[15deg] desktop:left-[240px] tablet:left-[190px] left-[165px]"
          >
        </ButtonCutBigApp>
        <div v-if="screenWidth >= 868" class="bg-white desktop:ml-[16px] tablet:ml-[22px] -skew-x-[15deg] desktop:w-[343px] tablet:w-[243px] h-[37px]"/>
      </div>
    </div>

    <div class="bg-mainBlock w-full flex flex-col items-center desktop:mt-[130px] tablet:mt-[100px] mt-[80px]">
      <div class="w-full max-w-[1629px] h-full desktop:px-[36px] tablet:px-[30px] px-[12px] desktop:py-[101px] py-[40px]">
        <div class="flex items-center">
          <h2 class="min-w-max text-accent">
            Lorem ipsum,
          </h2>
          <hr class="flex flex-grow border-1 border-text desktop:ml-[180px] tablet:ml-[140px] ml-[80px] bg-text"/>
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

    <div class="relative flex flex-col w-full max-w-[1629px] desktop:h-[860px] bg-right-bottom tablet:h-[509px]
                h-[649px] justify-start items-start overflow-hidden desktop:mt-[130px] tablet:mt-[100px] mt-[80px]
                bg-bg1 desktop:pt-[67px] tablet:pt-[40px] pt-[60px] desktop:pl-[69px] tablet:pl-[40px] pl-[12px]"
    >
      <h1>SN</h1>
      <p class="paragraph desktop:max-w-[584px] tablet:max-w-[360px] max-w-[351px] text-white">Помогает повысить извлечение за счет поддержания оптимальных дозировок реагентов в ключевых точках процесса</p>
      <div class="absolute z-30 desktop:w-[373px] tablet:w-[225px] w-[200px] bottom-[-2px] right-0 overflow-hidden">
        <ButtonCutBigApp class="ml-[33px]" @open="router.push('#')" text="Подробнее">
          <img src="@/assets/icons/rightArrow.svg"
               alt="перейти_к_форме"
               class="absolute desktop:top-[42px] tablet:top-[20px] top-[16px] skew-x-[15deg] desktop:left-[240px] tablet:left-[155px] left-[120px]"
          >
        </ButtonCutBigApp>
        <div class="bg-white desktop:ml-[16px] tablet:ml-[22px] -skew-x-[15deg] desktop:w-[373px] tablet:w-[212px] desktop:h-[37px] tablet:h-[30px] h-0"/>
      </div>
    </div>

    <div class="w-full max-w-[1629px] desktop:px-[36px] tablet:px-[30px] px-0 desktop:my-[130px] tablet:my-[100px] my-[80px]">
      <div class="w-full bg-right-bottom desktop:bg-bg2 tablet:bg-bg2 bg-bg2desktop desktop:h-[383px] tablet:h-[383px]
                  h-[500px] rounded-[4px] desktop:pl-[73px] tablet:pl-[60px] pl-[12px] desktop:pt-[86px] tablet:pt-[60] pt-[40px]">
        <div class="w-[680px] h-[218px] flex flex-col items-start justify-start">
          <h3>Мы реализуем под ключ проекты любой сложности</h3>
          <ButtonApp class="desktop:mt-[37px] tablet:mt-[37px] mt-[24px]" @open="router.push('#')"/>
        </div>
      </div>
    </div>
  </div>
  <FooterLayout/>
  <dialogLayout ref="dialogTarget">
    <formLayout :dialog="dialogTarget" />
  </dialogLayout>
</template>
<style scoped>
.hDefault {
  @apply font-medium font-pfdin tracking-wider uppercase
}
h1 {
  @apply hDefault desktop:text-[80px] tablet:text-[47px] text-[40px] desktop:leading-[96px] tablet:leading-[56.4px] leading-[48px] text-white
}
h2 {
  @apply hDefault desktop:text-[66px] tablet:text-[47px] text-[40px] desktop:leading-[79px] tablet:leading-[56.4px] leading-[48px]
}
h3 {
  @apply hDefault desktop:text-[50px] tablet:text-[47px] text-[32px] desktop:leading-[60px] tablet:leading-[56.4px] leading-[38.4px] text-white
}
.paragraph {
  @apply desktop:pt-[40x] tablet:pt-5 pt-[60px] font-pfdin font-normal desktop:text-[28px] tablet:text-[16px] text-[20px] desktop:leading-[33.6px] tablet:leading-[20.19px] leading-[24px]
}
</style>

