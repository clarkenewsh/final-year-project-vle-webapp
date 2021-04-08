<template>
  <section>
    <h1>Available Projects</h1>
    <ul>
      <li
        v-for="availableproject of availableprojects"
        :key="availableproject.slug"
      >
        <NuxtLink
          :to="{
            name: 'availableprojects-slug',
            params: { slug: availableproject.slug },
          }"
        >
          <img :src="availableproject.img" />
          <div>
            <h2>{{ availableproject.title }}</h2>
            <p>Author: {{ article.author }}</p>
            <p>{{ availableproject.description }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  // Assign default layout to staff dashboard home
  layout: 'default',
  async asyncData({ $content, params }) {
    const availableprojects = await $content('availableprojects')
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      availableprojects,
    }
  },
  data() {
    return {
      title: 'Available Projects',
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
}
</script>

<style scoped>
section {
  grid-column: 2;
}

@media only screen and (min-width: 1024px) {
  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
}
</style>
