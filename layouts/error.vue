<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <!-- Throw error if page not found  -->
    <h1 v-else class="error-msg">Oops..An error occurred</h1>
    <!-- Return link to home to re-try request  -->
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
export default {
  layout: 'blog',
  props: ['error'], // you can set a custom layout for the error page
}
</script>
