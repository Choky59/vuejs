<template>
  <div>
    <div>
      <navBar></navBar>
    </div>
    <router-view/>
  </div>
</template>
<script>


import navBar from "./components/navBar.vue";

export default {
  name: "app",
  components: {
    navBar
  },
};
</script>

