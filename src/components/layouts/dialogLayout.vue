<script setup>
import {ref, onMounted, onUnmounted} from "vue";

const dialogRef = ref(null);

const showDialog = () => {
  if (dialogRef.value) {
    const scrollY = window.scrollY;
    const body = document.body;
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    dialogRef.value.showModal();
  }
};

const closeDialog = () => {
  if (dialogRef.value) {
    dialogRef.value.close();
  }
  const body = document.body;
  const scrollY = parseInt(body.style.top || '0') * -1;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, scrollY);
};

defineExpose ({
  show: showDialog,
  close: closeDialog,
});

const updateScrollY = () => {
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
};

const closeFromEvent = (e) => {
  if (e.currentTarget === e.target) {
    closeDialog();
  }
};

onMounted(() => {
  window.addEventListener('scroll', updateScrollY);
  dialogRef.value.addEventListener('cancel', closeDialog);
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollY);
  dialogRef.value.removeEventListener('cancel')
});
</script>

<template>
  <dialog class="relative desktop:min-h-min tablet:min-h-min min-h-screen text-text desktop:m-auto tablet:m-auto m-0
                 desktop:max-w-[595px] tablet:max-w-[595px] max-w-[100vw] desktop:rounded-[4px] tablet:rounded-[4px]
                 desktop:max-h-auto tablet:max-h-auto max-h-[100vh] rounded-0 overflow-visible"
          ref="dialogRef"
          @click="closeFromEvent"
  >
    <button
        class="absolute w-6 h-6 desktop:-right-6 tablet:-right-6 -right-4 desktop:-top-6 tablet:-top-0 top-4"
        @click="closeDialog"
    >
      <img class="stroke-black" src="@/assets/icons/x.svg" alt="закрыть_модальное_окно">
    </button>
    <slot/>
  </dialog>
</template>

<style>
dialog::before,
dialog::after {
  content: none;
  padding: 0;
}
</style>
