<script setup>
import PageButton from "../components/PageButton.vue";
</script>

<template>
  <div class="main-hub_container">
    <span class="title"> GAMES </span>
    <div class="games">
      <PageButton link="/main-hub/all-games"> ALL GAMES </PageButton>
      <PageButton link="/main-hub/add-game"> ADD GAME </PageButton>
    </div>
    <span class="title"> BLOG </span>
  </div>
</template>

<style scoped>
.title {
  font-size: 50px;
  font-weight: bold;
  margin-top: 20px;
}
.main-hub_container {
  display: flex;
  flex-direction: column;
}
.games {
  display: flex;
  flex-direction: row;
  column-gap: 20px;
}
</style>
