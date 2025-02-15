<script setup>
import ButtonCutApp from "@/components/app/buttonCutApp.vue";
import { useRouter } from "vue-router";

const router = useRouter();

defineProps({
  isTextRight: {
    type: Boolean,
    default: true
  },
  title: {
    type: String,
    default: 'Lorem Ipsum',
  },
  text: {
    type: String,
    default: 'Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь. Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки, скрытой в середине абзаца. Также все другие известные генераторы Lorem Ipsum используют один и тот же текст, который они просто повторяют, пока не достигнут нужный объём. Это делает предлагаемый здесь генератор единственным настоящим Lorem Ipsum генератором. Он использует словарь из более чем 200 латинских слов, а также набор моделей предложений. В результате сгенерированный Lorem Ipsum выглядит правдоподобно, не имеет повторяющихся абзацей или "невозможных" слов.',
  }
})
</script>

<template>
<div class="flex w-full desktop:mt-[89px] mobile:mt-[40px] mt-[40px] desktop:flex-row mobile:flex-row flex-col-reverse"
     :class="isTextRight ? '' : 'desktop:flex-row-reverse mobile:flex-row-reverse'"
>
  <div class="relative min-w-[56.8%] h-min overflow-x-hidden">
    <slot/>
    <div class="absolute z-30 desktop:bottom-[42px] mobile:bottom-[15px] bottom-0 -right-2">
      <ButtonCutApp @open="router.push('#')"/>
    </div>
  </div>
  <div class="flex flex-col flex-grow"
       :class="isTextRight ? 'desktop:ml-[40px] mobile:ml-[40px] ml-0' : 'desktop:mr-40px] mobile:mr-[40px] mr-0'"
  >
    <h4>{{ title }}</h4>
    <p class="mt-[16px] desktop:mb-0 mobile:mb-0 mb-5">
      {{ text }}
    </p>
  </div>
</div>
</template>
<style scoped>
h4 {
  @apply text-[28px] font-medium leading-[34px] font-pfdin tracking-wider uppercase text-textDarkest
}

p {
  @apply text-[16px] font-normal leading-[20px] font-pfdin text-textArticle
}
</style>