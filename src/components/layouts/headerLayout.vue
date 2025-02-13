<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const RouterList = {
  "Товары": ["Флотмашины и чаны", "автоматизация", "SN"],
  "Услуги": ["Сервис обработки", "lorem"],
  "Компания": ["lorem1", "lorem2"]
}
const targetList = ref(RouterList['Товары'])
const showNav = ref(false)

const navType = ( item ) => {
  if (JSON.stringify(targetList.value) === JSON.stringify(item) || showNav.value === false) {
    showNav.value = !showNav.value
  }
  targetList.value = item
 }
</script>

<template>
  <header class="sticky w-full px-[30px] top-0 z-50">
    <nav class="h-full pl-[20%] flex-col textFormat overflow-x-hidden">
      <div class="flex bg-darkHeader -skew-x-[15deg] w-full ml-[14px]">
        <div class="flex">
          <div v-for="(item, index) in RouterList"
               :key="index"
               class="flex justify-center items-center cursor-pointer w-[150px] bg-darkHeader duration-200"
               :class="JSON.stringify(item) === JSON.stringify(targetList) && showNav
                       ? 'bg-header text-textDark hover:text-textDark1/2'
                       : 'hover:opacity-50'"
               @click="navType(item)"
          >
            <p class="skew-x-[15deg]">
              {{ index }}
            </p>
          </div>
        </div>
        <div class="w-full bg-darkHeader pr-[3%]">
          <div class="flex justify-end items-center skew-x-[15deg]">
            <button class="bg-button uppercase my-[5px] py-[13px] px-[43px] rounded hover:opacity-80 duration-200">
              Оставить заявку
            </button>
            <a class="uppercase pl-[37px] pr-[28px] hover:opacity-80 cursor-pointer duration-200">
              Контакты
            </a>
            <img src="../../assets/icons/search.svg"
                 alt="поиск"
                 class="cursor-pointer duration-200 hover:opacity-50"
                 @click="router.push('/search')"
            >
            <button class="pl-[28px] hover:opacity-50 cursor-pointer duration-200">
              EN
            </button>
          </div>
        </div>
      </div>

      <transition name="fade-slide">
        <ul v-show="showNav"
            class="flex items-center w-[101%] bg-header -skew-x-[15deg]"
        >
          <li v-for="(item, index) in targetList"
              :key="index"
              :class="item === 'SN'
                ? 'redBtn bg-accent text-white hover:bg-accentHover w-[126px] pl-[32px] ml-[43px] py-[8px]'
                : 'redBtn pl-[43px] h-[53px] bg-header text-textDark hover:opacity-50'"
          >
            <a href="#">
              <p class="skew-x-[15deg] ">
                {{ item }}
              </p>
            </a>
          </li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<style scoped>
.textFormat {
  @apply font-pfdin font-medium text-[14px] text-white leading-[16px] tracking-wider uppercase
}

.redBtn {
  @apply flex items-center justify-start cursor-pointer duration-200
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  @apply transition-all duration-200;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  @apply opacity-0;
}

</style>