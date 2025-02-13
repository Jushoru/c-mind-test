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
<div class="flex w-full mt-[89px]"
     :class="isTextRight ? '' : 'flex-row-reverse'"
>
  <div class="relative min-w-[56.8%] h-min overflow-x-hidden">
    <slot/>
    <div class="absolute z-30 bottom-[15px] -right-2">
      <ButtonCutApp @open="router.push('#')"/>
    </div>
  </div>
  <div class="flex flex-col flex-grow"
       :class="isTextRight ? 'ml-[40px]' : 'mr-[40px]'"
  >
    <h4>{{ title }}</h4>
    <p class="mt-[16px]">
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