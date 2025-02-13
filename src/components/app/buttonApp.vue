<template>
  <button class="w-[249px] h-[61px] bg-accent hover:bg-accentHover duration-200 -skew-x-[15deg]"
          @click="$emit('open')"
  >
    <span class="absolute textFormat skew-x-[15deg] left-[60px] top-[24px]">
          Оставить заявку
    </span>
    <img src="@/assets/icons/rightArrow.svg"
         alt="перейти_к_форме"
         class="absolute top-[27px] skew-x-[15deg] left-[205px]"
    >
  </button>
</template>

<style scoped>
.textFormat {
  @apply text-white font-pfdin font-medium uppercase tracking-wider text-[14px] leading-[16.8px]
}
</style>