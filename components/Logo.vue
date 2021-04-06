<template>
  <NuxtLink class="logo" to="/"> Project Learning Platform</NuxtLink>
</template>

<script>
export default {
  name: 'Logo',
}
</script>

<style scoped>
.logo {
  animation: 1s appear;
  margin-right: auto;
  font-weight: 700;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
