<template>
  <article>
    <div class="available-project-header">
      <h1 class="available-project-title">{{ availableproject.title }}</h1>
      <p class="available-project-description">
        {{ availableproject.description }}
      </p>
      <p class="author">
        <span>Project owner:</span> {{ availableproject.author }}
      </p>
      <!-- Render formatted project slug date/time data -->
      <p class="updatedAt">
        Project last updated: {{ formatDate(availableproject.updatedAt) }}
      </p>
    </div>
    <!-- display our content we are using the nuxt-content component by passing in the variable we returned into the document prop. -->
    <nuxt-content :document="availableproject" class="available-project-body" />
  </article>
</template>

<script>
export default {
  // Assign blog layout to blog home page
  layout: 'default',

  /* Fetch our available project content before the page has been rendered. Can have access to our content through the context by using the variable $content.
      - fetch a dynamic page we also need to know which article to fetch with params.slug which is available to us through the context. 
      - asyncData function we create a variable named article and fetch our content using the await followed by $content. 
      - need to pass into $content what we want to fetch, which in our case is the article folder followed by the slug, get from our URL parameters. 
      - hen chain the fetch method to the end and return the article which will contain the result of our fetch. */

  async asyncData({ $content, params }) {
    const availableproject = await $content(
      'availableprojects',
      params.slug
    ).fetch()

    return { availableproject }
  },

  methods: {
    // format this by creating a method that takes in a date and returns a new date with the options of year, month and day formatted to how we want
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>

<style>
.article {
  margin-left: 10px;
}
.available-project-header {
  background-color: #ff9d00;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23000' stroke-width='66.7' stroke-opacity='0.05' %3E%3Ccircle fill='%23ff9d00' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%23ec9800' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%23d99300' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%23c78d00' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%23b68704' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%23a68009' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%2396790f' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%23877213' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%237a6b17' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%236d6419' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%23605c1c' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%2355541e' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%234a4c1f' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%23414420' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%23383c20' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%23303420' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%23292c1f' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%2322241e' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  border-radius: 0.375rem;
  padding: 50px 20px;
}

.available-project-description {
  color: #a9b6cc;
}

.author {
  color: #bdcc94;
  font-size: 90%;
}
span {
  font-size: 90%;
}
.available-project-body {
  padding: 40px 0px;
}

.available-project-body h1 {
  padding: 30px 0px 20px 0px;
}

.available-project-body h2 {
  padding: 30px 0px 20px 0px;
}

.available-project-body h3 {
  padding: 10px 0px 20px 0px;
}

.available-project-body h4 {
  padding: 10px 0px 20px 0px;
}

.available-project-body p {
  color: #a9b6cc;
  padding-bottom: 30px;
  /* border-bottom: 2px solid #bdcc94; */
}

.available-project-body .text-block {
  color: #a9b6cc;
  padding-bottom: 10px;
}

.available-project-body .supervisor-block {
  border: 2px solid #bdcc94;
  padding: 25px;
  border-radius: 0.375rem;
}

.available-project-body .border-text-block {
  border: 5px solid #bdcc94;
  border-radius: 10px;
  color: #bdcc94;
  padding: 30px;
  margin: 50px;
}

.line-separate {
  border-bottom: 3px solid #2d3748;
  padding-bottom: 20px;
}
</style>
