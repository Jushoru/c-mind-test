
<script setup>
const navList = ["Товары", "Услуги", "Компания"]
</script>
<template>
  <div class="sticky top-0 mt-[30px]">
    <nav class="ml-auto max-w-[75%] mr-[30px] py-[18px] bg-header headerSkew textFormat">
      <div class="ml-auto flex items-center space-x-4">
      <ul class="flex space-x-6 px-4">
        <li v-for="(item, index) in navList" :key="index">
          <a href="#" class="px-[30px]">
            {{ item }}
          </a>
        </li>
      </ul>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.textFormat {
  @apply font-pfdin font-medium text-[14px] text-white leading-[16px] tracking-widest uppercase hover:text-gray-300
}

.headerSkew {
  @apply before:ml-auto before:w-[75%] before:mr-[38px] before:absolute  before:z-[-1] before:inset-0 before:bg-header
         before:-skew-x-[15deg]
}
</style>