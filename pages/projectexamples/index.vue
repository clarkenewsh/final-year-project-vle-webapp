<template>
  <section>
    <h1>Project examples</h1>
    <ul>
      <li v-for="projectexample of projectexamples" :key="projectexample.slug">
        <NuxtLink
          :to="{
            name: 'projectexamples-slug',
            params: { slug: projectexample.slug },
          }"
        >
          <img :src="projectexample.img" />
          <div>
            <h2>{{ projectexample.title }}</h2>
            <p>Author: {{ article.author }}</p>
            <p>{{ projectexample.description }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  // Assign blog layout to blog home
  layout: 'default',
  async asyncData({ $content, params }) {
    const projectexamples = await $content('projectexamples')
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      projectexamples,
    }
  },
  data() {
    return {
      title: 'Project examples',
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
