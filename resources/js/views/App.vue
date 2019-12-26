<template>
  <div>
    <Navbar></Navbar>
    <div class="container">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Navbar from "./Partials/Navbar";
import Footer from "./Partials/Footer";
export default {
  components: {
    Navbar,
    Footer
  }
};
</script>