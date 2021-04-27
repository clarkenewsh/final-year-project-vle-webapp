<template>
  <section>
    <div class="project-examples-home-header">
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
      <h1>Project Examples</h1>
      <p>
        A collection of undergraduate projects examples used to forumlate your
        own ideas and worflows
      </p>
    </div>
    <ul>
      <li v-for="projectexample of projectexamples" :key="projectexample.slug">
        <NuxtLink
          :to="{
            name: 'projectexamples-slug',
            params: { slug: projectexample.slug },
          }"
        >
          <div class="project-card">
            <h2>{{ projectexample.title }}</h2>
            <p>{{ projectexample.description }}</p>
            <p class="author">
              <span>Author:</span> {{ projectexample.author }}
            </p>
          </div>
        </NuxtLink>
      </li>
    </ul>
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
      title: 'Project examples',
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

.project-examples-home-header {
  background-color: #2d3748;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23484846' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23484846'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
  border-radius: 0.375rem;
  padding: 50px;
  grid-column: 1/-1;
  margin-bottom: 20px;
}

h1 {
  padding-bottom: 10px;
  font-size: 280%;
}

h2:hover {
  color: #bdcc94;
}

p {
  color: #a9b6cc;
}

svg {
  height: 40px;
  width: 40px;
  background: none;
  fill: #bdcc94;
  margin-bottom: 10px;
}

ul {
  display: grid;
  grid-template-columns: 1fr;
  list-style: none;
  grid-gap: 15px;
  padding: 0;
  grid-column: 1/-1;
}

a {
  text-decoration: #f2f2f2;
}

li {
  flex-basis: 20%;
  margin: 10px 0px;
  transition: all 0.2s ease;
  text-decoration: none;
  border: 1px solid #2d3748;
  border-radius: 0.375rem;
  padding: 30px 35px;
  border-top: 5px solid #95998a;
}

li:hover {
  transform: translateY(4px);
  color: #bdcc94;
}

.author {
  color: #bdcc94;
  font-size: 90%;
}

span {
  font-size: 90%;
}

@media only screen and (min-width: 1024px) {
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }

  li {
    margin: 10px;
  }
}
</style>
