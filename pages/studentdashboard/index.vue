<template>
  <section>
    <h1>Login to your Student Dashboard</h1>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          id="exampleInputEmail1"
          type="email"
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" class="form-text text-muted"
          >We'll never share your email with anyone else.</small
        >
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          id="exampleInputPassword1"
          type="password"
          class="form-control"
          placeholder="Password"
        />
      </div>
      <div class="form-check">
        <input id="exampleCheck1" type="checkbox" class="form-check-input" />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <!-- <button type="submit" class="btn btn-primary">Submit</button> -->
      <NuxtLink to="/studentdashboard/dashboard">Submit</NuxtLink>
    </form>
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
