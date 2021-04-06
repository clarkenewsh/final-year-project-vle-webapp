<template>
  <footer>
    <Logo id="logo" />
    <NuxtLink to="/">return home</NuxtLink>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
}
</script>

<style scoped>
footer {
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #2d3748;
  padding: 30px 20px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 15px;
}

ul li:first-child {
  padding-bottom: 10px;
}

footer a {
  color: #e2e8f0;
}

@media only screen and (max-width: 1024px) {
  footer {
    flex-direction: column;
    text-align: center;
  }
}
</style>
