<template>
  <div>
    <div class="blog-home-header">
      <h1>Blog Articles</h1>
    </div>
    <ul>
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          <img :src="article.img" />
          <div>
            <h2>{{ article.title }}</h2>
            <p>{{ article.description }}</p>
            <p class="author">By: {{ article.author }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // Assign blog layout to blog home
  layout: 'blog',
  async asyncData({ $content, params }) {
    const articles = await $content('articles')
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles,
    }
  },
  data() {
    return {
      title: 'Blog Home Page',
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
div {
  grid-column: 2;
}

.blog-home-header {
  background: khaki;
}

h1 {
  padding: 15px;
  color: #a9b6cc;
  font-size: 280%;
}

h2:hover {
  color: #bdcc94;
}

p {
  color: #a9b6cc;
}

ul {
  display: grid;
  grid-template-columns: 1fr 1fr;
  list-style: none;
  grid-gap: 25px;
  padding: 0;
}

a {
  text-decoration: #f2f2f2;
}

li {
  flex-basis: 20%;
  margin: 20px;
  transition: all 0.2s ease;
  text-decoration: none;
}

li:hover {
  transform: translateY(4px);
  color: #a9b6cc;
}

.author {
  color: #bdcc94;
  font-size: 80%;
}

@media only screen and (min-width: 1024px) {
  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
}
</style>
