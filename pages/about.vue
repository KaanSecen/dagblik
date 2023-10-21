<template>
  <div>
    <Hero
        title="Your Daily Guide To Effortless Planning"
        description="DagBlik is an innovative web-based daily planner designed to simplify your day.
        It offers a user-friendly interface with an interactive timeline displaying every hour of the day, complete with a real-time indicator.
        Easily add and organize your daily activities, with sorting by time. Stay on top of your appointments with timely notifications.
        DagBlik is your hassle-free solution for efficient and organized daily planning, inspired by the needs of various user groups"
        imageSrc="/img/calendar.png"
        imageAlt="Hero Image"
        buttonPrimaryText="Get Started"
        buttonPrimaryLink="/"
        buttonSecondaryText="Creator"
        buttonSecondaryLink="https://github.com/KaanSecen"
    />
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue'

export default {
  components: {
    Hero,
  },
};
</script>
