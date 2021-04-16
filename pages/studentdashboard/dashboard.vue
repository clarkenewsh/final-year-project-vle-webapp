<template>
  <section>
    <div class="card">
      <div class="card-header">Project Examples</div>
      <div class="card-body">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-stack"
          viewBox="0 0 16 16"
        >
          <path
            d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z"
          />
          <path
            d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z"
          />
        </svg>
        <h5 class="card-title">Project Examples</h5>
        <p class="card-text">A respository of project examples</p>
        <NuxtLink to="/projectexamples/" class="btn btn-primary">View</NuxtLink>
      </div>
    </div>
    <div class="card">
      <div class="card-header">Available Projects</div>
      <div class="card-body">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-stack"
          viewBox="0 0 16 16"
        >
          <path
            d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z"
          />
          <path
            d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z"
          />
        </svg>
        <h5 class="card-title">Available Projects</h5>
        <p class="card-text">A respository of available projects</p>
        <NuxtLink to="/availableprojects/" class="btn btn-primary"
          >View</NuxtLink
        >
      </div>
    </div>
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
      title: 'Student Dashboard',
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
  margin-top: 50px;
}

.card {
  margin: 15px;
  background-color: #1a202c;
  border: 1px solid #2d3748;
}

.card-header {
  background: #2d3748;
  font-weight: 500;
}

svg {
  margin-bottom: 10px;
  background: none;
  fill: #bdcc94;
}

p {
  color: #a9b6cc;
}

.btn {
  background: #2d3748;
  border: none;
  transition: all 0.2s ease;
}

.btn:hover {
  transform: translateY(4px);
}

@media only screen and (min-width: 1024px) {
  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
}
</style>
