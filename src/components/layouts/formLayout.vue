<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  dialog: Object,
});

const name = ref('');
const email = ref('');
const phone = ref('');
const description = ref('');
const files = ref([]);
const fileError = ref('');
const fileAdded = ref(false)

const errors = ref({
  name: '',
  email: '',
  phone: '',
  description: '',
});

const validateForm = () => {
  errors.value = { name: '', email: '', phone: '', description: '' };
  let hasError = false;

  if (!name.value.trim()) {
    errors.value.name = 'Введите имя';
    hasError = true;
  }

  if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    errors.value.email = 'Введите корректный email';
    hasError = true;
  }

  if (!phone.value.trim() || !/^\+?\d{10,15}$/.test(phone.value)) {
    errors.value.phone = 'Введите корректный номер телефона';
    hasError = true;
  }

  if (!description.value.trim()) {
    errors.value.description = 'Введите описание';
    hasError = true;
  }

  return !hasError;
};

const isFormValid = computed(() => validateForm());

const handleSubmit = () => {
  if (isFormValid.value && !fileError.value) {
    console.log({
      name: name.value,
      email: email.value,
      phone: phone.value,
      description: description.value,
      files: files.value,
    });
    name.value = '';
    email.value = '';
    phone.value = '';
    description.value = '';
    files.value = [];
    fileAdded.value = false;
    fileError.value = '';
    props.dialog.close();
  }
};

const handleFileChange = (event) => {
  const selectedFiles = Array.from(event.target.files);

  if (selectedFiles.length > 3) {
    fileAdded.value = false
    fileError.value = 'Можно прикрепить не более 3 файлов';
    files.value = [];
    return;
  }

  for (const file of selectedFiles) {
    if (file.size > 5 * 1024 * 1024) {
      fileAdded.value = false
      fileError.value = 'Размер файла не должен превышать 5 МБ';
      files.value = [];
      return;
    }

    if (file.type !== 'application/pdf') {
      fileAdded.value = false
      fileError.value = 'Разрешены только файлы в формате PDF';
      files.value = [];
      return;
    }
  }

  fileAdded.value = true
  fileError.value = '';
  files.value = selectedFiles;
};

const fileLabel = computed(() => {
  if (fileError.value) return fileError.value;
  if (files.value.length === 0) return 'Приложить файлы (до трех файлов)';
  return `${files.value.length === 1 ? 'Загружен' : 'Загружено'} ${files.value.length} ${files.value.length === 1 ? 'файл' : 'файла'}`;
});
</script>

<template>
  <form class="flex flex-col p-10" @submit.prevent="handleSubmit">
    <p class="mb-10">
      Успех начинается с правильных решений. Оставьте здесь свои контакты, и мы свяжемся с вами, чтобы предложить
      оптимальную технологию по увеличению процента извлекаемости полезного в конечный продукт на вашем предприятии.
    </p>

    <input v-model="name" type="text" class="form-input" :class="{ 'border-red-500': errors.name }" placeholder="Имя*" />
    <input v-model="email" type="email" class="form-input" :class="{ 'border-red-500': errors.email }" placeholder="E-Mail*" />
    <input v-model="phone" type="text" class="form-input" :class="{ 'border-red-500': errors.phone }" placeholder="Телефон*" />
    <textarea v-model="description" class="form-input resize-none h-[39.7333px]" :class="{ 'border-red-500': errors.description }" placeholder="Описание проекта*"></textarea>

    <label
        class="relative cursor-pointer border-t-0 border-x-0 border-b desktop:w-[515px] tablet:w-[515px] w-full pb-[15px] mb-10"
        :class="fileError ? 'border-b-accent' : 'border-b-darkHeader'"
    >
      <img
          v-if="!fileError && files.length > 0"
          src="@/assets/icons/file.svg"
          alt="файл(-ы)_загружены"
          class="absolute left-0 top-0"
      />
      <span
          class="absolute font-pfdin font-normal text-[20px] leading-[23.67px] tracking-wider"
          :class="fileError ? 'text-accent' : 'text-darkHeader'"
          :style="!fileError && files.length > 0 ? { paddingLeft: '35px' } : {}"
      >
        {{ fileLabel }}
      </span>
      <input
          type="file"
          multiple
          @change="handleFileChange"
          class="invisible"
          :class="{ 'border-red-500': fileError }"
      />
      <img v-if="!fileError" src="@/assets/icons/paperclip.svg" alt="" class="absolute right-2 top-0" />
      <img v-else src="@/assets/icons/paperclipError.svg" alt="" class="absolute right-2 top-0" />
    </label>

    <label class="mb-4">
      Отправляя эту форму, я принимаю
      <a class="underline underline-offset-[3.11px] hover:cursor-pointer" href="https://for-ma.studio/privacy-policy"
      >политику конфиденциальности</a
      >
      этого сайта.
    </label>

    <button
        class="w-[155px] h-[44px] duration-200 -skew-x-[15deg]"
        :class="isFormValid && fileAdded ? 'bg-accent hover:bg-accentHover' : 'bg-buttonDisabled cursor-not-allowed'"
        type="submit"
    >
      <span
          class="absolute desktop:left-[50px] tablet:left-[50px] left-[50px] skew-x-[15deg] desktop:top-[15px] tablet:top-[15px] top-[15px] submit-btn-text"
      >
        Отправить
      </span>
    </button>
  </form>
</template>

<style scoped>
.form-input {
  @apply border-t-0 border-x-0 border-b-[1px] border-b-darkHeader desktop:w-[515px] tablet:w-[515px] w-full pb-[15px] mb-10;
}

.submit-btn-text {
  @apply font-pfdin font-normal text-[14px] leading-[16.8px] tracking-wider text-white uppercase;
}

input::placeholder,
textarea::placeholder,
input,
textarea {
  @apply font-pfdin font-normal text-[20px] leading-[23.67px] tracking-wider text-darkHeader;
}

p {
  @apply font-pfdin font-normal text-[20px] leading-[25.44px] text-button text-pretty;
}

label {
  @apply font-pfdin font-normal text-[16px] leading-[21px] text-button text-pretty;
}

button:disabled {
  @apply bg-buttonDisabled text-white;
}
</style>