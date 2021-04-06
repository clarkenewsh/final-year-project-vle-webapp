<template>
  <div>
    <div class="card">
      <div class="card-header">Blog Learning Center</div>
      <div class="card-body">
        <h5 class="card-title">Blog Learning Resources</h5>
        <p class="card-text">
          A collection of blog articles covering all things undergraduate
          projects
        </p>
        <NuxtLink to="/blog" class="btn btn-primary">View</NuxtLink>
      </div>
    </div>
    <div class="card">
      <div class="card-header">Student Project Dashboard</div>
      <div class="card-body">
        <h5 class="card-title">Student dashboard</h5>
        <p class="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <NuxtLink to="/studentdashboard" class="btn btn-primary">View</NuxtLink>
      </div>
    </div>
    <div class="card">
      <div class="card-header">Staff Project Dashboard</div>
      <div class="card-body">
        <h5 class="card-title">Staff dashboard</h5>
        <p class="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <NuxtLink to="/staffdashboard/" class="btn btn-primary">View</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // Assign blog layout to blog home
  layout: 'default',
  data() {
    return {
      title: 'Home Page',
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
div:first-of-type {
  grid-column: 2;
  display: flex;
}

.card {
  margin: 15px;
  border: 1px solid #2d3748;
}

.card-header {
  background: #2d3748;
}

@media only screen and (max-width: 1024px) {
  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }

  div:first-of-type {
    grid-column: 2;
    flex-direction: column;
  }
}
</style>
