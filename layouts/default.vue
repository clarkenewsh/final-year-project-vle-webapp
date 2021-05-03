<!-- Blog layout to be initiliase on all blog related pages -->
<template>
  <!-- start of grid layout -->
  <div class="grid">
    <header>
      <!-- Default navigation component -->
      <NavBar />
    </header>
    <main>
      <Nuxt />
      <!-- nuxt content rendered here-->
    </main>
    <TheFooter />
  </div>
  <!-- end of grid layout -->
</template>

<script>
// Import components
import NavBar from '~/components/NavBar.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
  components: {
    NavBar,
    TheFooter,
  },
}
</script>

<style>
/* Universal css styles - default layout  */
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
  color: #a2e8f0;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  line-height: 1.6;
  animation: 0.2s appear;
  color: #e2e8f0;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
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
  grid-column: 2;
  padding: 0px;
  min-height: 80vh;
}

header,
footer {
  grid-column: 1/-1;
}

h1 {
  font-weight: 700;
  font-size: 3.1rem;
}

h2 {
  font-weight: 500;
  font-size: 1.8rem;
}
/* Media Queries */
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
    font-size: 170%;
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
