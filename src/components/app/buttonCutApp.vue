<template>
  <button class="bg-accent -skew-x-[15deg] w-[278px] h-[61px] hover:bg-accentHover duration-200"
          @click="$emit('open')"
  >
    <span class="textFormat top-[21px] absolute skew-x-[15deg] left-[80px]">
          Подробнее
    </span>
    <img src="@/assets/icons/rightArrow.svg"
         alt="перейти_к_форме"
         class="absolute top-[25px] skew-x-[15deg] left-[220px]"
    >
  </button>
</template>

<style scoped>
.textFormat {
  @apply text-white text-[16px] font-pfdin font-medium leading-[19px] uppercase tracking-widest
}
</style>