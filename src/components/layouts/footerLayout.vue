<script setup>
import ButtonApp from "@/components/app/buttonApp.vue";
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="flex flex-col items-center justify-center w-full px-[30px]">
    <footer class="gradientLine h-[870px] flex flex-col justify-center items-center w-full max-w-[1569px] ">
      <div class="flex justify-end w-full h-[822px] pt-[93px]">
        <div class="flex justify-between w-[1311px] ">
          <div class="w-[803px] grid grid-cols-3">
            <div class="max-w-[203px]">
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

            <div class="max-w-[203px]">
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

            <div class="max-w-[203px]">
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
          <div class="flex flex-col w-[406px] h-min px-[27px] pt-[37px] pb-[43px] bg-mainBlock">
            <div class="relative flex w-full items-start">
              <a class="relative w-full h-[50px] font-pfdin font-normal text-[20px] leading-[25px] text-button hover:opacity-65 duration-200" href="https://yandex.ru/maps/-/CHqzE-~m">
                <img class="absolute left-0 top-0" src="@/assets/icons/address.svg" alt=""/>
                <span class="absolute left-[42px] top-0 w-full">
                г. Санкт-Петербург, 119186, Большой проспект Васильевского острова, дом 7. Литера З
              </span>
              </a>
            </div>
            <span class="pl-[44px] pt-[13px] font-pfdin font-medium text-[20px] leading-[24px] text-button">
            +7 (---) 5-5-05-11
          </span>
            <span class="pl-[44px] pt-[13px] font-pfdin font-normal text-[20px] leading-[25px] text-button">
            info@info.ru
          </span>
            <ButtonApp class="ml-[44px] mt-[45px]" @open="router.push('#')"/>
          </div>
        </div>
      </div>
      <p class="font-pfdin font-normal text-[16px] leading-[20.19px] text-darkHeader">
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