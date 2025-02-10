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
  <header class="sticky w-full px-[30px] top-0 z-50 ">
    <nav class="h-full w-full flex-col textFormat overflow-hidden">
      <div class="flex w-[75%] ml-[26%]">
        <div class="flex w-[450px] ">
          <div v-for="(item, index) in RouterList"
               :key="index"
               class="flex justify-center items-center cursor-pointer w-[150px] h-full bg-darkHeader -skew-x-[15deg]"
               :class="JSON.stringify(item) === JSON.stringify(targetList) && showNav
                       ? 'bg-header text-darkText hover:text-darkText1/2'
                       : 'hover:opacity-50'"
               @click="navType(item)"
          >
            <p class="skew-x-[15deg]">
              {{ index }}
            </p>
          </div>
        </div>
        <div class="w-full bg-darkHeader pr-[35px]">
          <div class="flex justify-end items-center">
            <button class="bg-button uppercase my-[5px] py-[13px] px-[45.5px] rounded hover:opacity-80">
              Оставить заявку
            </button>
            <a class="uppercase pl-[37px] pr-[28px] hover:opacity-80 cursor-pointer">
              Контакты
            </a>
            <img src="@/assets/icons/search.svg" alt="search" class="cursor-pointer  hover:opacity-50" @click="router.push('/search')">
            <button class="pl-[28px] hover:opacity-50 cursor-pointer">
              EN
            </button>
          </div>
        </div>
      </div>

      <ul v-if="showNav"
          class="bg-header navLine -skew-x-[15deg] right-[28px] before:absolute before:inset-0 before:-right-[28px]
                 before:left-2 before:bg-header before:skew-x-[15deg] "
      >
          <li v-for="(item, index) in targetList"
              :key="index"
              :class="item === 'SN' ? 'flex items-center justify-start bg-accent text-white my-[12px] relative hover:opacity-75 w-[126px] pl-[32px] ml-[20px]'
              : 'navItem text-darkText hover:opacity-50'"
          >
            <a href="#">
              <p class="py-[10px] skew-x-[15deg]">
                {{ item }}
              </p>
            </a>
          </li>
        </ul>

    </nav>
  </header>
</template>

<style scoped>
.textFormat {
  @apply font-pfdin font-medium text-[14px] text-white leading-[16px] tracking-widest uppercase
}

.navLine {
  @apply relative flex ml-auto w-[75%] mr-[30px]
}

.navItem {
  @apply px-[30px] py-[12px] relative cursor-pointer
}

</style>