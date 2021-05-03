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
      <NuxtLink to="/studentdashboard/dashboard/" class="btn btn-primary"
        >Submit</NuxtLink
      >
    </form>
  </section>
</template>

<script>
export default {
  // Assign blog layout to blog home
  layout: 'blog',
  data() {
    // Assign page title
    return {
      title: 'Student Login',
    }
  },
  // Return page title
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

form {
  border: 1px solid #2d3748;
  border-radius: 0.375rem;
  padding: 30px;
}

.btn {
  background: #2d3748;
  border: none;
  transition: all 0.2s ease;
}

.btn a {
  color: white;
}

.btn:hover {
  transform: translateY(4px);
}

@media only screen and (min-width: 1024px) {
  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 90px;
    margin-top: 100px;
  }
}
</style>
