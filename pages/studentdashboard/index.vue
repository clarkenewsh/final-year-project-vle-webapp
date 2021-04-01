<template>
  <section>
    <h1>Student Dashbaord Login page</h1>
    <p>Login form to go ghere to redirect to the student dashbaord</p>
  </section>
</template>

<script>
export default {
  // Assign blog layout to blog home
  layout: 'blog',
  data() {
    return {
      title: 'Student Login',
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
