<script setup>
defineProps({
  text: {
    type: String,
    default: 'Связаться с нами'
  }
})
</script>
<template>
  <button class="bg-accent -skew-x-[15deg] desktop:w-[373px] tablet:w-[235px] w-[200px] desktop:h-[92px] tablet:h-[50px] h-[44px]
                 hover:bg-accentHover duration-200 overflow-hidden"
          @click="$emit('open')"
  >
    <span class="textFormat desktop:top-[38px] tablet:top-[18px] top-[13px] absolute skew-x-[15deg] desktop:left-[80px]
                 tablet:left-[68px] left-[49px]"
    >
      {{ text }}
    </span>
    <slot/>
  </button>
</template>

<style scoped>
.textFormat {
  @apply text-white desktop:text-[16px] tablet:text-[12px] text-[12px] font-pfdin font-medium desktop:leading-[19px] tablet:leading-[14.4px] leading-[14.4px] uppercase tracking-wider
}
</style>