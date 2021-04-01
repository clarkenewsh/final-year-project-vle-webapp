<template>
  <div>
    <div class="card">
      <div class="card-header">Blog Learning Center</div>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <NuxtLink to="/studentdashbaord" class="btn btn-primary">View</NuxtLink>
      </div>
    </div>
    <div class="card">
      <div class="card-header">Student Project Dashboard</div>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <NuxtLink to="/studentdashbaord" class="btn btn-primary">View</NuxtLink>
      </div>
    </div>
    <div class="card">
      <div class="card-header">Staff Project Dashboard</div>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <NuxtLink to="/staffdashbaord" class="btn btn-primary">View</NuxtLink>
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
section {
  grid-column: 2;
}

.card-block {
  display: flex;
  flex-wrap: wrap;
}

@media only screen and (min-width: 1024px) {
  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
}
</style>
