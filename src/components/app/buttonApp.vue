<template>
  <button class="desktop:w-[249px] w-[185px] desktop:h-[61px] h-[44px] bg-accent hover:bg-accentHover duration-200 -skew-x-[15deg]"
          @click="$emit('open')"
  >
    <span class="absolute textFormat skew-x-[15deg] desktop:left-[60px] left-[30px] desktop:top-[24px] top-[15px]">
          Оставить заявку
    </span>
    <img src="@/assets/icons/rightArrow.svg"
         alt="перейти_к_форме"
         class="absolute desktop:top-[27px] top-[17px] skew-x-[15deg] desktop:left-[205px] left-[145px]"
    >
  </button>
</template>

<style scoped>
.textFormat {
  @apply text-white font-pfdin font-medium uppercase tracking-wider desktop:text-[14px] text-[12px] desktop:leading-[16.8px] leading-[14.4px]
}
</style>