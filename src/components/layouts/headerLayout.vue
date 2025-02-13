<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const RouterList = {
  "Товары": ["Флотомашины и чаны", "автоматизация", "SN"],
  "Услуги": ["Сервис обработки", "lorem"],
  "Компания": ["lorem1", "lorem2"]
}
const targetList = ref(RouterList['Товары'])
const showNav = ref(false)
const screenWidth = ref(window.innerWidth)

const navType = ( item ) => {
  if (JSON.stringify(targetList.value) === JSON.stringify(item) || showNav.value === false) {
    showNav.value = !showNav.value
  }
  targetList.value = item
 }

const updateWidth = () => {
  screenWidth.value = window.innerWidth
}

onMounted(() => {
      window.addEventListener('resize', updateWidth)
    }
)

const isOpen = ref(false);
const activeCategory = ref(null);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
  activeCategory.value = null;
};

const toggleCategory = (category) => {
  activeCategory.value = activeCategory.value === category ? null : category;
};
</script>

<template>
  <header class="sticky w-full px-[36px] top-[-1px] z-50 max-w-[1628px]">
    <nav class="h-full desktop:pl-[287px] miniPhone:pl-[167px] pl-[118px] flex-col textFormat overflow-x-hidden">
      <div class="flex bg-darkHeader -skew-x-[15deg] w-full ml-[14px]">
        <div v-if="screenWidth >= 868"
             class="flex"
        >
          <div v-for="(item, index) in RouterList"
               :key="index"
               class="flex justify-center items-center cursor-pointer desktop:w-[150px] w-[110px] bg-darkHeader duration-200"
               :class="JSON.stringify(item) === JSON.stringify(targetList) && showNav
                       ? 'bg-header text-textDark hover:text-textDark1/2'
                       : 'hover:opacity-70'"
               @click="navType(item)"
          >
            <p class="skew-x-[15deg]">
              {{ index }}
            </p>
          </div>
        </div>
        <div class="w-full bg-darkHeader pr-[35px]">
          <div class="flex justify-end items-center skew-x-[15deg] ml-[10px]">
            <button class="bg-button uppercase my-[5px] h-[43px] desktop:w-[201px] mobile:w-[158px] w-[106px] rounded hover:opacity-80 duration-200">
              Оставить заявку
            </button>
            <a v-if="screenWidth >= 868" class="uppercase pl-[28px]  hover:opacity-80 cursor-pointer duration-200">
              Контакты
            </a>
            <img src="../../assets/icons/search.svg"
                 alt="поиск"
                 class="cursor-pointer duration-200 hover:opacity-70 pl-[28px]"
                 @click="router.push('/search')"
            >
            <div v-if="screenWidth < 867"
                 class="relative ml-5">
              <button @click="toggleMenu" class="hover:opacity-70 h-7 w-7 pt-1">
                <img src="../../assets/icons/burger.svg" alt="Меню">
              </button>
            </div>
            <button v-if="screenWidth >= 868" class="pl-[28px] hover:opacity-70 cursor-pointer duration-200">
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

      <transition name="slide-fade">
        <div v-show="isOpen" class="absolute top-[52px] right-[36px] w-60 bg-darkHeader shadow-lg z-50">
          <ul class="flex flex-col textFormat">
            <li v-for="(items, category) in RouterList" :key="category">
              <button @click="toggleCategory(category)" class="w-full text-left p-3 hover:opacity-70 uppercase">
                {{ category }}
              </button>
              <ul v-if="activeCategory === category" class="pl-4">
                <li v-for="(item, index) in items" :key="index" class="p-2 hover:opacity-70">
                  <a href="#">{{ item }}</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
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