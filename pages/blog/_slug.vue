<template>
  <article>
    <div class="article-header">
      <h1 class="article-title">{{ article.title }}</h1>
      <p class="article-description">{{ article.description }}</p>
    </div>
    <img :src="article.img" :alt="article.alt" />
    <p class="author">Author: {{ article.author }}</p>
    <p>Article last updated: {{ formatDate(article.updatedAt) }}</p>
    <!-- render the body copy blog content -->
    <nuxt-content :document="article" class="article-body" />
  </article>
</template>

<script>
export default {
  // Assign blog layout to blog home page
  layout: 'blog',
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    return { article }
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
.article-header {
  border: 5px solid #bdcc94;
  border-radius: 10px;
}
/* .nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content p {
  margin-bottom: 20px;
} */
</style>
