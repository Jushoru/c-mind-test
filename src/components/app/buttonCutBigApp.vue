<script setup>
defineProps({
  text: {
    type: String,
    default: 'Связаться с нами'
  }
})
</script>
<template>
  <button class="bg-accent -skew-x-[15deg] desktop:w-[373px] mobile:w-[217px] w-[200px] desktop:h-[92px] mobile:h-[50px] h-[44px]
                 hover:bg-accentHover duration-200"
          @click="$emit('open')"
  >
    <span class="textFormat desktop:top-[38px] mobile:top-[18px] top-[13px] absolute skew-x-[15deg] desktop:left-[80px]
                 mobile:left-[60px] left-[45px]
                 ">
      {{ text }}
    </span>
    <img src="@/assets/icons/rightArrow.svg"
         alt="перейти_к_форме"
         class="absolute desktop:top-[42px] mobile:top-[20px] top-[16px] skew-x-[15deg] desktop:left-[220px] mobile:left-[140px] left-[120px]"
    >
  </button>
</template>

<style scoped>
.textFormat {
  @apply text-white desktop:text-[16px] mobile:text-[12px] text-[12px] font-pfdin font-medium desktop:leading-[19px] mobile:leading-[14.4px] leading-[14.4px] uppercase tracking-wider
}
</style>