<script>
const url = import.meta.env.VITE_API_BASE_URL;
export default {
  name: "item-new-modal",
  data() {
    return {
      events: [],
      title: "",
      description: "",
      eventDate: "",
    };
  },
  methods: {
    createItem() {
      this.items = [];
      const endpoint = url + "/new";
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: this.title,
          description: this.description,
          eventDate: this.eventDate,
        }),
      };
      fetch(endpoint, requestOptions)
        .then((response) => response.json())
        .then((result) =>
          result.forEach((thing) => {
            this.events.push(thing);
          })
        )
        .catch((error) => console.log("error", error));
    },
    resetInput() {
      this.title = "";
      this.description = "";
      this.eventDate = "";
    },
  },
  computed: {
    validateTitle: function () {
      if (this.title === "") {
        return true;
      } else {
        return false;
      }
    },
    validateDate: function () {
      if (this.eventDate === "") {
        return true;
      } else {
        return false;
      }
    },
    validateForm: function () {
      if (this.validateDate === false && this.validateTitle === false) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<template>
  <div
    class="modal fade"
    id="eventNewModal"
    tabindex="-1"
    aria-labelledby="eventNewModal"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            Termin bearbeiten
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="$emit('close')"
          ></button>
        </div>
        <div class="modal-body">
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Titel</span>
            <input
              type="text"
              class="form-control"
              aria-label="titel"
              aria-describedby="basic-addon1"
              v-model="title"
              id="title"
            />
          </div>
          <p v-if="validateTitle">
            Der Titel eines Termins kann nicht leer sein!
          </p>

          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Beschreibung</span>
            <textarea
              class="form-control"
              aria-label="description"
              aria-describedby="basic-addon-1"
              v-model="description"
            ></textarea>
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Datum</span>
            <input
              type="date"
              class="form-control"
              aria-label="eventDate"
              aria-describedby="basic-addon1"
              v-model="eventDate"
            />
          </div>
          <p v-if="validateDate">Ein Termin muss ein Datum haben!</p>
        </div>
        <div class="modal-footer justify-content-between">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            @click="
              $emit('close');
              resetInput();
            "
          >
            Abbrechen
          </button>
          <button
            v-if="validateForm"
            type="button"
            class="btn btn-success"
            data-bs-dismiss="modal"
            @click="
              createItem();
              $emit('new', this.events);
              resetInput();
            "
          >
            Speichern
          </button>
          <button v-else type="button" class="btn btn-success disabled">
            Speichern
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
