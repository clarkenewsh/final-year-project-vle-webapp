<template>
  <section>
    <h1>Staff Dashbaord Home Page</h1>
  </section>
</template>

<script>
export default {
  // Assign blog layout to blog home
  layout: 'default',
  data() {
    return {
      title: 'Staff Dashboard',
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
