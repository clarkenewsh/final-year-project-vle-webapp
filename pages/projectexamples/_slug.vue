<template>
  <article>
    <div class="project-example-header">
      <h1 class="project-example-title">{{ projectexample.title }}</h1>
      <p class="project-example-description">
        {{ projectexample.description }}
      </p>
      <p class="author"><span>Author:</span> {{ projectexample.author }}</p>
      <!-- Render formatted project slug date/time data -->
      <p class="updatedAt">
        Project last updated: {{ formatDate(projectexample.updatedAt) }}
      </p>
    </div>
    <!-- display our content we are using the nuxt-content component by passing in the variable we returned into the document prop. -->
    <nuxt-content :document="projectexample" class="project-example-body" />
  </article>
</template>

<script>
export default {
  // Assign blog layout to blog home page
  layout: 'default',

  /* Fetch our article content before the page has been rendered. Can have access to our content through the context by using the variable $content.
      - fetch a dynamic page we also need to know which article to fetch with params.slug which is available to us through the context. 
      - asyncData function we create a variable named article and fetch our content using the await followed by $content. 
      - need to pass into $content what we want to fetch, which in our case is the article folder followed by the slug, get from our URL parameters. 
      - hen chain the fetch method to the end and return the article which will contain the result of our fetch. */

  async asyncData({ $content, params }) {
    const projectexample = await $content(
      'projectexamples',
      params.slug
    ).fetch()

    return { projectexample }
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
.project-example-header {
  background-color: #2d3748;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 60'%3E%3Cg %3E%3Crect fill='%232d3748' width='11' height='11'/%3E%3Crect fill='%232d394a' x='10' width='11' height='11'/%3E%3Crect fill='%232e3a4b' y='10' width='11' height='11'/%3E%3Crect fill='%232e3c4d' x='20' width='11' height='11'/%3E%3Crect fill='%232f3e4f' x='10' y='10' width='11' height='11'/%3E%3Crect fill='%232f4050' y='20' width='11' height='11'/%3E%3Crect fill='%232f4152' x='30' width='11' height='11'/%3E%3Crect fill='%23304353' x='20' y='10' width='11' height='11'/%3E%3Crect fill='%23304555' x='10' y='20' width='11' height='11'/%3E%3Crect fill='%23314657' y='30' width='11' height='11'/%3E%3Crect fill='%23314858' x='40' width='11' height='11'/%3E%3Crect fill='%23324a59' x='30' y='10' width='11' height='11'/%3E%3Crect fill='%23324c5b' x='20' y='20' width='11' height='11'/%3E%3Crect fill='%23324d5c' x='10' y='30' width='11' height='11'/%3E%3Crect fill='%23334f5e' y='40' width='11' height='11'/%3E%3Crect fill='%2334515f' x='50' width='11' height='11'/%3E%3Crect fill='%23345360' x='40' y='10' width='11' height='11'/%3E%3Crect fill='%23355562' x='30' y='20' width='11' height='11'/%3E%3Crect fill='%23355663' x='20' y='30' width='11' height='11'/%3E%3Crect fill='%23365864' x='10' y='40' width='11' height='11'/%3E%3Crect fill='%23375a65' y='50' width='11' height='11'/%3E%3Crect fill='%23385c66' x='60' width='11' height='11'/%3E%3Crect fill='%23395d67' x='50' y='10' width='11' height='11'/%3E%3Crect fill='%233a5f69' x='40' y='20' width='11' height='11'/%3E%3Crect fill='%233b616a' x='30' y='30' width='11' height='11'/%3E%3Crect fill='%233c636b' x='20' y='40' width='11' height='11'/%3E%3Crect fill='%233d646c' x='10' y='50' width='11' height='11'/%3E%3Crect fill='%233e666d' x='70' width='11' height='11'/%3E%3Crect fill='%233f686d' x='60' y='10' width='11' height='11'/%3E%3Crect fill='%23406a6e' x='50' y='20' width='11' height='11'/%3E%3Crect fill='%23426c6f' x='40' y='30' width='11' height='11'/%3E%3Crect fill='%23436d70' x='30' y='40' width='11' height='11'/%3E%3Crect fill='%23456f71' x='20' y='50' width='11' height='11'/%3E%3Crect fill='%23467172' x='80' width='11' height='11'/%3E%3Crect fill='%23487372' x='70' y='10' width='11' height='11'/%3E%3Crect fill='%234a7473' x='60' y='20' width='11' height='11'/%3E%3Crect fill='%234b7674' x='50' y='30' width='11' height='11'/%3E%3Crect fill='%234d7875' x='40' y='40' width='11' height='11'/%3E%3Crect fill='%234f7a75' x='30' y='50' width='11' height='11'/%3E%3Crect fill='%23517b76' x='90' width='11' height='11'/%3E%3Crect fill='%23537d76' x='80' y='10' width='11' height='11'/%3E%3Crect fill='%23557f77' x='70' y='20' width='11' height='11'/%3E%3Crect fill='%23578078' x='60' y='30' width='11' height='11'/%3E%3Crect fill='%23598278' x='50' y='40' width='11' height='11'/%3E%3Crect fill='%235c8479' x='40' y='50' width='11' height='11'/%3E%3Crect fill='%235e8579' x='90' y='10' width='11' height='11'/%3E%3Crect fill='%2360877a' x='80' y='20' width='11' height='11'/%3E%3Crect fill='%2363897a' x='70' y='30' width='11' height='11'/%3E%3Crect fill='%23658a7b' x='60' y='40' width='11' height='11'/%3E%3Crect fill='%23688c7c' x='50' y='50' width='11' height='11'/%3E%3Crect fill='%236a8e7c' x='90' y='20' width='11' height='11'/%3E%3Crect fill='%236d8f7d' x='80' y='30' width='11' height='11'/%3E%3Crect fill='%236f917d' x='70' y='40' width='11' height='11'/%3E%3Crect fill='%2372937e' x='60' y='50' width='11' height='11'/%3E%3Crect fill='%2375947e' x='90' y='30' width='11' height='11'/%3E%3Crect fill='%2378967f' x='80' y='40' width='11' height='11'/%3E%3Crect fill='%237a977f' x='70' y='50' width='11' height='11'/%3E%3Crect fill='%237d9980' x='90' y='40' width='11' height='11'/%3E%3Crect fill='%23809a80' x='80' y='50' width='11' height='11'/%3E%3Crect fill='%23839c81' x='90' y='50' width='11' height='11'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  border-radius: 0.375rem;
  padding: 50px 20px;
}

.project-example-description {
  color: #a9b6cc;
}

.author {
  color: #bdcc94;
  font-size: 90%;
}
span {
  font-size: 90%;
}
.project-example-body {
  padding: 40px 0px;
}

.project-example-body h1 {
  padding: 30px 0px 20px 0px;
}

.project-example-body h2 {
  padding: 30px 0px 20px 0px;
}

.project-example-body h3 {
  padding: 10px 0px 20px 0px;
}

.project-example-body h4 {
  padding: 10px 0px 20px 0px;
}

.project-example-body p {
  color: #a9b6cc;
  padding-bottom: 30px;
  /* border-bottom: 2px solid #bdcc94; */
}

.project-example-body .text-block {
  color: #a9b6cc;
  padding-bottom: 10px;
}

.project-example-body .supervisor-block {
  border: 2px solid #bdcc94;
  padding: 25px;
  border-radius: 0.375rem;
}

.projec-example-body .border-text-block {
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
