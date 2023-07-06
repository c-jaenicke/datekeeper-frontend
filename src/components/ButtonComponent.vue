<script>
export default {
  name: "button-component",
  methods: {
    reloadPage() {
      window.location.reload();
    },
  },
};
</script>

<template>
  <div style="display: flex; justify-content: space-between" class="">
    <button type="button" class="btn btn-info" @click="reloadPage">
      Aktualisieren
    </button>
    <button
      type="button"
      class="btn btn-success"
      data-bs-toggle="modal"
      data-bs-target="#eventNewModal"
    >
      Neuen Termin anlegen
    </button>
  </div>
</template>

<style scoped></style>
