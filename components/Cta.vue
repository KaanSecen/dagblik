<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
        <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">{{ title }}</h1>
        <a :href="buttonPrimaryLink">
          <button class="flex-shrink-0 text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg mt-10 sm:mt-0">
            {{ buttonPrimaryText }}</button>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: String,
    buttonPrimaryText: String,
    buttonPrimaryLink: String,
  },
};
</script>
