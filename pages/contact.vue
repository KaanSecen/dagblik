<template>
  <div>
    <Contact
        title="Contact Us"
        description="Have a question, feedback, or just want to get in touch with us?
        Our Contact Us page is the perfect place to reach out.
        Send us a message, and we'll get back to you promptly.
        We're here to assist you in making the most of your DagBlik experience."
        buttonPrimaryText="Send"
    />
  </div>
</template>

<script>
import Contact from '~/components/Contact.vue'

export default {
  components: {
    Contact,
  },
};
</script>
