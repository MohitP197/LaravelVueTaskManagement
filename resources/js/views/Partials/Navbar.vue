<template>
  <nav class="navbar navbar-expand-md bg-dark navbar-dark navbar-fixed-top">
    <a class="navbar-brand" href="#">Task Management</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#collapsibleNavbar"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/tasks">Tasks</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/">Completed Tasks</router-link>
        </li>
      </ul>
    </div>
  </nav>
  
</template>


<style scoped>
</style>

<script>
export default {
  name: "Navbar"
};
</script>