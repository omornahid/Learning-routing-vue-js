<template>
  <div>{{ msg }}</div>
  <div v-text="msg"></div>
  <div v-html="advice"></div>
  <button class="btn btn-success" v-bind:disabled="isDisabled">Click</button>
  <div v-if="num == 0">The number is zero</div>
  <div v-else>The num is not 0</div>
  <div v-show="showElement">Showing using v show</div>
  <div v-for="name in names" :key="name">{{ name }}</div>
</template>

<script>
export default {
  name: "DemoText",
  data() {
    return {
      msg: "This is demo text",
      advice: "<b>This is advice</b>",
      isDisabled: true,
      num: 1,
      showElement: true,
      names: ["omor", "faruk", "nahid"],
    };
  },
};
</script>

<style>
div {
  text-align: center;
  color: darkgreen;

  padding: 30px;
}
</style>
