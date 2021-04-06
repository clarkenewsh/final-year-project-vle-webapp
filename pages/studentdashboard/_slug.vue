<template>
  <article>
    <h1 class="project-example-title">{{ projectexample.title }}</h1>
    <p>{{ projectexample.description }}</p>
    <img :src="projectexample.img" :alt="projectexample.alt" />
    <p>Project last updated: {{ formatDate(projectexample.updatedAt) }}</p>

    <nuxt-content :document="projectexample" />
  </article>
</template>

<script>
export default {
  // Assign blog layout to blog home page
  layout: 'default',
  async asyncData({ $content, params }) {
    const projectexample = await $content(
      'projectexamples',
      params.slug
    ).fetch()

    return { projectexample }
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
