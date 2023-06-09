import { createRouter, createWebHistory } from "vue-router";

import RegistrationPage from "../views/RegistrationPage.vue";
import LoginPage from "../views/LoginPage.vue";
import HomeView from "../views/HomeView.vue";
import Appointments from "../views/Appointments.vue";
import Bookings from "../views/Bookings.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/register",
    name: "register",
    component: RegistrationPage,
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/appointment",
    name: "appointments",
    component: Appointments,
  },
  {
    path: "/bookings",
    name: "bookings",
    component: Bookings,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
