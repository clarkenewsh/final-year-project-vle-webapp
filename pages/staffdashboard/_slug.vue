<template>
  <article>
    <h1 class="available-project-title">{{ availableproject.title }}</h1>
    <p class="available-project-description">
      {{ availableproject.description }}
    </p>
    <img :src="availableproject.img" :alt="availableproject.alt" />
    <p>Project last updated: {{ formatDate(availableproject.updatedAt) }}</p>

    <nuxt-content :document="availableproject" />
  </article>
</template>

<script>
export default {
  // Assign blog layout to blog home page
  layout: 'default',
  async asyncData({ $content, params }) {
    const availableproject = await $content(
      'availableprojects',
      params.slug
    ).fetch()

    return { availableproject }
  },

  methods: {
    formatDate(date) {
      // format date method for date created, updated varibles for blog slug
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>

<style>
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content p {
  margin-bottom: 20px;
}
</style>
