<template>
  <button class="bg-accent -skew-x-[15deg] w-[333px] h-[92px] hover:bg-accentHover"
          @click="$emit('open')"
  >
    <span class="textFormat top-[38px] absolute skew-x-[15deg] left-[80px]">
          Связаться с нами
    </span>
    <img src="@/assets/icons/rightArrow.svg"
         alt="Перейти к форме"
         class="absolute top-[42px] skew-x-[15deg] left-[260px]">
  </button>
</template>

<style scoped>
.textFormat {
  @apply text-white text-[16px] font-pfdin font-medium leading-[19px] uppercase tracking-widest
}
</style>