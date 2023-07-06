<script setup>
import eventEditModal from "@/components/EventEditModal.vue";
import eventNewModal from "@/components/EventNewModal.vue";
</script>

<script>
const url = import.meta.env.VITE_API_BASE_URL;
export default {
  name: "kalender-component",
  data() {
    return {
      events: [],
      modalOpen: true,
      modalItem: {},
      monthIndex: 0,
      year: 2023,
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
    setCurrentValues() {
      const dateObj = new Date();
      this.monthIndex = dateObj.getMonth();
      this.year = dateObj.getFullYear();
    },
    filterEventsOnDate(day) {
      const startDate = new Date(
        this.year,
        parseInt(this.monthIndex),
        day,
        "00",
        "00",
        "00"
      );
      const endDate = new Date(
        this.year,
        parseInt(this.monthIndex),
        day,
        "23",
        "59",
        "59"
      );
      //console.log('start ' + startDate)
      //console.log('end   ' + endDate)

      let filtered = this.events.filter(function (event) {
        const eventDate = Date.parse(event.eventDate);
        if (eventDate > startDate && eventDate < endDate) {
          return event;
        }
      });
      return filtered;
    },
    reloadPage() {
      window.location.reload();
    },
  },
  computed: {
    getNumberOfDays: function () {
      const year = this.year
      const monthIndex = this.monthIndex
      return new Date(
        parseInt(year),
        parseInt(monthIndex) + 1,
        0
      ).getDate();
    },
  },
  beforeMount() {
    this.setCurrentValues();
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

  <h2>Kalender</h2>

  <div style="display: flex; justify-content: space-between" class="">
    <button type="button" class="btn btn-info" @click="reloadPage">
      Aktualisieren
    </button>
    <button type="button" class="btn btn-warning" @click="setCurrentValues">
      Heute
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
  <br />

  <div>
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">Monat</span>
      <select
        class="form-select form-control"
        aria-label=".form-select-lg example"
        v-model="monthIndex"
      >
        <option value="00">Januar</option>
        <option value="1">Februar</option>
        <option value="2">März</option>
        <option value="3">April</option>
        <option value="4">Mai</option>
        <option value="5">Juni</option>
        <option value="6">Juli</option>
        <option value="7">August</option>
        <option value="8">September</option>
        <option value="9">October</option>
        <option value="10">November</option>
        <option value="12">Dezember</option>
      </select>
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">Jahr</span>
      <input
        type="number"
        class="form-control"
        aria-label="year"
        aria-describedby="basic-addon1"
        v-model="year"
      />
    </div>
  </div>

  <div class="row row-cols-5">
    <div v-for="index in getNumberOfDays" class="card" style="width: 18rem">
      <div class="card-header">
        {{ index }}.{{ parseInt(monthIndex) + 1 }}.{{ year }}
      </div>
      <ul class="list-group list-group-flush">
        <li v-for="event in filterEventsOnDate(index)" class="list-group-item">
          <a
            href="#eventEditModal"
            data-bs-toggle="modal"
            data-bs-target="#eventEditModal"
            @click="openModal(event)"
            style="text-decoration: none; color: #0d68d1"
          >
            <b>{{ event.title }}</b>
          </a>
          <br />
          <p>{{ event.description }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
