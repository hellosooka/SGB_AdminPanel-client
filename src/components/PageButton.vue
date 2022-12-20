<script setup>
const props = defineProps({
  link: "",
});
</script>

<template>
  <button class="button">
    <router-link class="button_link" :to="link"> <slot /> </router-link>
  </button>
</template>

<style scoped>
.button {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 30px;
  background-color: #696969;
  border: none;
  border-radius: 5px;
}

.button_link {
  text-decoration: none;
  color: white;
  display: block;
  padding: 30px;
}
</style>
