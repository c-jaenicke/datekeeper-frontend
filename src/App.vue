<script setup>
import { RouterLink, RouterView } from "vue-router";
import CustomNavbar from "@/components/NavbarComponent.vue";
import CustomFooter from "@/components/FooterComponent.vue";
</script>

<template>
  <custom-navbar></custom-navbar>
  <br />

  <div class="container">
    <RouterView />
  </div>
  <br />
  <custom-footer></custom-footer>
</template>
