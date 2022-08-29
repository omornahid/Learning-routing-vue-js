<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'about' }">About</router-link> |
    <router-link to="/jobs">Jobs</router-link>
  </div>

  <div class="button text-center p-3">
    <button class="btn btn-secondary btn-sm me-2" @click="redirect">
      Redirect
    </button>
    <button class="btn btn-info btn-sm me-2" @click="back">Back</button>
    <button class="btn btn-primary btn-sm" @click="forward">Forward</button>
  </div>

  <router-view></router-view>

  <DemoText></DemoText>
</template>

<script>
import DemoText from "./components/DemoText.vue";

export default {
  name: "App",
  components: {
    DemoText,
  },
  methods: {
    redirect() {
      this.$router.push({ name: "home" });
    },
    back() {
      this.$router.go(-1);
    },
    forward() {
      this.$router.go(1);
    },
  },
};
</script>

<style>
#nav {
  padding: 30px;
  background-color: darkgray;
  text-align: center;
  color: aliceblue;
}

#nav a {
  color: black;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: cyan;
  font-weight: bolder;
}
</style>
