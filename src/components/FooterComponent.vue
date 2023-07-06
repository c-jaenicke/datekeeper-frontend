<script>
export default {
  name: "custom-footer",
};
</script>

<template>
  <hr />
  <div class="container text-center">
    <div class="row">
      <div class="col">
        <router-link to="/">Startseite</router-link>
      </div>

      <div class="col">
        <router-link to="/about">Über</router-link>
      </div>

      <div class="col">
        <router-link to="/privacy">Datenschutzhinweis</router-link>
      </div>
    </div>
  </div>
</template>
