<template>
  <section class="text-gray-600 body-font">
    <div class="container mx-auto flex px-5 items-center justify-center flex-col">
      <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" :src="imageSrc" :alt="imageAlt">
      <div class="text-center lg:w-2/3 w-full">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{{ title }}</h1>
        <p class="mb-8 leading-relaxed">{{ description }}</p>
        <div class="flex justify-center">
          <a :href="buttonPrimaryLink">
            <button class="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg">{{
                buttonPrimaryText
              }}</button>
          </a>
          <a :href="buttonSecondaryLink">
            <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">{{
                buttonSecondaryText
              }}</button>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    imageSrc: String,
    imageAlt: String,
    buttonPrimaryText: String,
    buttonPrimaryLink: String,
    buttonSecondaryText: String,
    buttonSecondaryLink: String,
  },
};
</script>
