<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="h-full w-full flex flex-col justify-center items-center textFormat overflow-hidden">
    Это потенциальная страница поиска
    <button class="mt-6 bg-button uppercase my-[5px] py-[13px] px-[45.5px] rounded hover:opacity-80 text-white text-[14px] duration-200"
            @click="router.push('/')"
    >
      На главную
    </button>
  </div>
</template>

<style scoped>
.textFormat {
  @apply font-pfdin font-medium text-[28px] text-textDark leading-[16px] tracking-widest uppercase
}
</style>