<script setup>
import eventEditModal from "@/components/EventEditModal.vue";
import eventNewModal from "@/components/EventNewModal.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
</script>

<script>
const url = import.meta.env.VITE_API_BASE_URL;
export default {
  name: "ComingEvents",
  data() {
    return {
      events: [],
      modalOpen: true,
      modalItem: {},
    };
  },
  methods: {
    openModal(data) {
      this.modalItem = data;
    },
    getEvents() {
      // event liste leeren damit es keine duplikate gibt
      this.events = [];
      // abfrage url setzen
      const endpoint = url + "/events";
      const requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      // abfrage starten
      fetch(endpoint, requestOptions)
        .then((response) => response.json())
        .then((result) =>
          result.forEach((thing) => {
            this.events.push(thing);
          })
        )
        .catch((error) => console.log("error", error));
    },
    getDayString(event) {
      //const dateObj = Date.parse(event.eventDate)
      const dateObj = new Date(event.eventDate);
      // +1 hier um den Index des Monats auf den korrekten Monat zu setzen
      return (
        dateObj.getDate() +
        "." +
        parseInt(dateObj.getMonth() + 1) +
        "." +
        dateObj.getFullYear()
      );
    },
  },
  computed: {
    filterComingEvents: function () {
      return this.events
        .filter((event) => Date.parse(event.eventDate) > new Date())
        .slice(0, 5);
    },
    getCurrentDateTime: function () {
      const dateObj = new Date();
      return (
        "Es ist " +
        dateObj.getHours() +
        ":" +
        dateObj.getMinutes() +
        " am " +
        dateObj.getDate() +
        "." +
        parseInt(dateObj.getMonth() + 1) +
        "." +
        dateObj.getFullYear()
      );
    },
  },
  beforeMount() {
    this.getEvents();
  },
};
</script>

<template>
  <event-edit-modal
    :data="modalItem"
    @deleted="(list) => (events = list)"
    @close="getEvents()"
  ></event-edit-modal>
  <event-new-modal @new="(list) => (events = list)"></event-new-modal>

  <h2>Anstehende Termine</h2>
  <h3>{{ getCurrentDateTime }}</h3>

  <button-component></button-component>
  <br />

  <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4">
    <div v-for="event in filterComingEvents" class="card">
      <div class="card-header">
        {{ getDayString(event) }}
      </div>
      <div class="card-body">
        <h5 class="card-title">
          <a
            href="#eventEditModal"
            data-bs-toggle="modal"
            data-bs-target="#eventEditModal"
            @click="openModal(event)"
            style="text-decoration: none; color: #0d68d1"
          >
            <b>{{ event.title }}</b>
          </a>
        </h5>
        <p class="card-text">{{ event.description }}</p>
      </div>
    </div>
  </div>
</template>
