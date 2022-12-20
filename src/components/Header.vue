<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <div class="header_container">
    <button v-if="route.name != 'home'" class="header_button">
      <router-link class="link" to="/"> На главную </router-link>
    </button>
  </div>
</template>

<style scoped>
.header_container {
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
}
.header_button {
  width: 100%;
  background-color: #760000;
  border: none;
}
.link {
  width: 100%;
  text-decoration: none;
  color: white;
  font-size: 20px;
}
</style>
