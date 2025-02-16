<script setup>
import ButtonApp from "@/components/app/buttonApp.vue";
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="flex flex-col items-center justify-center w-full desktop:px-[36px] tablet:px-[30px] px-[12px]
              desktop:mb-[17px] tablet:mb-[14px] mb-[60px]">
    <footer class="gradientLine flex flex-col justify-center items-center w-full max-w-[1569px] "
    >
      <div class="flex desktop:flex-row flex-col desktop:justify-end justify-center desktop:items-start
                  tablet:items-start items-center w-full desktop:mb-[230px] mb-10 pt-[93px]"
      >
        <div class="w-full tablet:w-full desktop:w-[803px] max-w-[803px] grid grid-cols-1 tablet:grid-cols-3
                    desktop:ml-auto desktop:mr-0 ml-auto mr-auto">

            <div class="min-w-[203px] mx-auto">
              <h5>Товары</h5>
              <hr class="gradientLine my-5"/>
              <h6>Флотомашины и Чаны</h6>
              <ul class="pl-[14px] pt-[13px] pb-[20px]">
                <li>МП</li>
                <li>ЧП</li>
                <li>ЧКЭ</li>
                <li>Нестандартное Lorem Ipsum</li>
              </ul>
              <h6>Автоматизация</h6>
              <ul class="pl-[14px] pt-[13px]">
                <li class="text-button">Локальные АСУ</li>
                <li>PYB</li>
                <li>SD</li>
                <li>SC</li>
                <li>SK</li>
                <li>SP</li>
              </ul>
              <ul class="pl-[14px] pt-[13px]">
                <li class="text-button">АСУТП</li>
              </ul>
              <ul class="pl-[14px] pt-[20px]">
                <li class="text-button">Интеллектуальные системы</li>
                <li>
                  <button class="text-white text-left pl-[10px] pb-[2px] w-[68px] bg-accent hover:bg-accentHover">
                    SC
                  </button>
                </li>
                <li>SV</li>
                <li>SP</li>
              </ul>
            </div>

            <div class="min-w-[203px] mx-auto desktop:mt-0 tablet:mt-0 mt-10">
              <h5>Услуги</h5>
              <hr class="gradientLine my-5 "/>
              <ul class="pb-[20px]">
                <li>Технологические исследования и аудит</li>
                <li>Проектирование</li>
                <li>Строительно-монтажные работы</li>
              </ul>
              <h6>Автоматизация</h6>
              <ul class="pl-[14px] pt-[13px] pb-[20px]">
                <li>Сервис</li>
                <li>Технологическая поддержка</li>
              </ul>
            </div>

            <div class="min-w-[203px] mx-auto desktop:mt-0 tablet:mt-0 mt-10">
              <h5>Компания</h5>
              <hr class="gradientLine my-5 "/>
              <ul class="pb-[20px]">
                <li>Проекты</li>
                <li>Карьера</li>
                <li>Отзывы заказчиков</li>
                <li>Документы</li>
              </ul>
              <h6>Контакты</h6>
            </div>
          </div>
        <div class="flex desktop:flex-col tablet:flex-row desktop:w-[406px] w-full desktop:mt-0 mt-[82px]
                    h-min px-[27px] pt-[37px] pb-[43px] bg-mainBlock tablet:items-center"
        >
            <div class="relative flex justify-center desktop:w-full w-full ">
              <a class="relative w-full desktop:h-[50px] h-[75px] font-pfdin font-normal text-[20px] leading-[25px]
                        text-button hover:opacity-65 duration-200 "
                 href="https://yandex.ru/maps/-/CHqzE-~m"
              >
                <img class="absolute left-0 top-0" src="@/assets/icons/address.svg" alt=""/>
                <span class="absolute left-[42px] top-0 desktop:w-full">
                  г. Санкт-Петербург, 119186, Большой проспект Васильевского острова, дом 7. Литера З
                </span>
              </a>
            </div>
            <div class="tablet:flex tablet:w-[365.5px]">
              <div class="flex desktop:flex-col tablet:flex-col w-full tablet:min-w-[163px] desktop:ml-[44px] tablet:ml-[38.5px]">
                <span class="desktop:pt-[13px] tablet:pt-[0px] pt-[13px] font-pfdin font-medium text-[20px] leading-[24px] text-button">
                  +7 (---) 5-5-05-11
                </span>
                <span class="pt-[13px] font-pfdin font-normal text-[20px] leading-[25px] text-button desktop:ml-0 tablet:ml-0 ml-3">
                  info@info.ru
                </span>
              </div>
            </div>
            <ButtonApp class="desktop:ml-[-44px] desktop:mt-[45px] tablet:mt-0 mt-[32px] tablet:min-w-[195px]" @open="router.push('#')"/>
        </div>
      </div>
      <p class="font-pfdin font-normal text-[16px] leading-[20.19px] text-darkHeader tablet:mt-[201px]">
        Сделано в <span class="text-accent">Creative Mind Bureau</span>
      </p>
    </footer>

  </div>
</template>

<style scoped>
.hDefault {
  @apply font-pfdin font-medium text-button tracking-wider uppercase
}
h5 {
  @apply hDefault text-[18px] leading-[21.6px]
}
h6 {
  @apply hDefault text-[14px] leading-[16.8px] cursor-pointer duration-200 hover:opacity-65
}
ul {
  @apply text-text
}
li {
  @apply font-pfdin font-normal text-[16px] leading-[20px] cursor-pointer duration-200 pt-0.5
}
li:hover:not(:has(button)) {
  opacity: 0.65;
}
.gradientLine {
  --bgColor: white;
  --borderGradient: linear-gradient(
   to right, rgba(235, 232, 229, 1), rgba(211, 200, 187, 1)
  );

  width: 100%;

  background:
  linear-gradient(
    var(--bgColor),
    var(--bgColor)
  ) padding-box,
  var(--borderGradient) border-box;
  border-top: 2px solid transparent;
}
</style>