<script>
export default {
  name: "custom-navbar",
};
</script>

<template>
  <nav
    class="navbar navbar-expand-lg bg-body-tertiary navbar-dark"
    style="background: #0d68d1"
  >
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Datekeeper</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link active"
              >Anstehende Termine</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/calendar" class="nav-link active"
              >Kalender</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link active">Über</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { RouterLink } from "vue-router";
</script>
