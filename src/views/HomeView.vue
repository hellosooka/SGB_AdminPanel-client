<script setup>
import PageButton from "../components/PageButton.vue";
</script>

<template>
  <main class="home_container">
    <PageButton link="/main-hub"> MAIN HUB </PageButton>
    <PageButton link="/room-service"> ROOM SERVICE </PageButton>
    <PageButton link="/games"> GAMES </PageButton>
  </main>
</template>

<style scoped>
.home_container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 20px;
}
</style>
