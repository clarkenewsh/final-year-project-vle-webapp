<template>
  <div class="grid">
    <header>
      <!-- <NavBar /> -->
    </header>
    <main>
      <Nuxt />
    </main>
    <!-- <TheFooter /> -->
  </div>
</template>

<script>
// import NavBar from '~/components/NavBar.vue'
// import TheFooter from '~/components/TheFooter.vue'

export default {
  components: {},
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: #77838f;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  line-height: 1.6;
}

body {
}

/* Mobile first css grid styles */
.grid {
  display: grid;
  grid-template-columns: 1% 1fr 1%;
  grid-column-gap: 1rem;
  grid-row-gap: 3rem;
  margin: 0 auto;
}

main {
  /* min-height: 100vh; */
  grid-column: 2;
  padding: 60px 0px;
}

header,
main,
footer {
  grid-column: 2;
}

/*
put all heading variations and heading scaling here  */
h1 {
  font-weight: 700;
  color: #58a8a4;
}

h2 {
}

@media only screen and (min-width: 768px) {
  * {
    font-size: 20px;
    margin: 0;
  }
  .grid {
    grid-template-columns: 3% 1fr 3%;
    grid-gap: 20px;
  }

  h2 {
    font-size: 180%;
    font-weight: 700;
  }
}

@media only screen and (min-width: 1024px) {
  * {
    font-size: 22px;
  }
  .grid {
    grid-template-columns: 5% 1fr 5%;
  }
  h2 {
    font-size: 200%;
  }
}

@media only screen and (min-width: 1400px) {
  .grid {
    grid-template-columns: 12% 1fr 12%;
    grid-gap: 30px;
    margin: 0;
  }
}
</style>
