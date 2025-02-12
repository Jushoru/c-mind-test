<template>
  <button class="w-[249px] h-[61px] bg-accent hover:bg-accentHover duration-200"
          @click="$emit('open')"
  >
    <span class="textFormat flex justify-center items-center skew-x-[15deg] left-[80px]">
          Оставить заявку
    </span>
    <img src="@/assets/icons/rightArrow.svg"
         alt="перейти_к_форме"
         class="absolute top-[42px] skew-x-[15deg] left-[260px]"
    >
  </button>
</template>

<style scoped>
.textFormat {
  @apply text-white font-pfdin font-medium uppercase tracking-widest text-[16px] leading-[19px]
}
</style>