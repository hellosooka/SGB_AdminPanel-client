import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MainHubView from "../views/MainHubView.vue";
import RoomServiceView from "../views/RoomServiceView.vue";
import GamesView from "../views/GamesView.vue";
import BunkerView from "../views/BunkerGameView.vue";
import AddGameViewToMainHub from "../views/MainHub/AddGameView.vue";
import AllGamesViewInMainHub from "../views/MainHub/AllGames.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/main-hub",
      name: "main-hub",
      component: MainHubView,
    },
    {
      path: "/main-hub/add-game",
      name: "add-game-to-main-hub",
      component: AddGameViewToMainHub,
    },
    {
      path: "/main-hub/all-games",
      name: "all-games-in-main-hub",
      component: AllGamesViewInMainHub,
    },

    {
      path: "/room-service",
      name: "room-service",
      component: RoomServiceView,
    },
    {
      path: "/games",
      name: "games",
      component: GamesView,
    },
    {
      path: "/games/bunker",
      name: "bunker",
      component: BunkerView,
    },
  ],
});

export default router;
