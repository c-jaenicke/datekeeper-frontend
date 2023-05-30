<script>

export default {
  data() {
    return {
      items: []
    }
  },
  methods: {
    getItems() {
      this.items = []
      const endpoint = 'http://' + url + '/items/all'
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }
      fetch(endpoint, requestOptions)
          .then((response) => response.json())
          .then((result) =>
              result.forEach((thing) => {
                this.items.push(thing)
              })
          )
          .catch((error) => console.log('error', error))
    },
  }}
</script>

<style>
p {
  font-size: larger;
  line-height: 5px;
  margin-top: 70px;


}

</style>
<template>
  <main>
    <div class="container py-4 px-3 mx-auto">
      <h1>Datekeeper</h1>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navigationbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Events</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">Neues Event erstellen</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <p>- Event 1
        <button style="margin-right: 70px" type="button" class="btn btn-success">Success</button>
        <button style="margin-right: 40px" type="button" class="btn btn-danger">Danger</button>
      </p>
      <p>- Event 2
        <button style="margin-right: 70px" type="button" class="btn btn-success">Success</button>
        <button type="button" class="btn btn-danger">Danger</button>
      </p>
      <p>- Event 3
        <button style="margin-right: 70px" type="button" class="btn btn-success">Success</button>
        <button type="button" class="btn btn-danger">Danger</button>
      </p>
      <p>- Event 4
        <button style="margin-right: 70px" type="button" class="btn btn-success">Success</button>
        <button type="button" class="btn btn-danger">Danger</button>
      </p>
      <p>- Event 5
        <button style="margin-right: 70px" type="button" class="btn btn-success">Success</button>
        <button type="button" class="btn btn-danger">Danger</button>
      </p>
      <p>- Event 6
        <button style="margin-right: 70px" type="button" class="btn btn-success">Success</button>
        <button type="button" class="btn btn-danger">Danger</button>
      </p>
      <p>- Event 7
        <button style="margin-right: 70px" type="button" class="btn btn-success">Success</button>
        <button type="button" class="btn btn-danger">Danger</button>
      </p>
      <p>- Event 8
        <button style="margin-right: 70px" type="button" class="btn btn-success">Success</button>
        <button type="button" class="btn btn-danger">Danger</button>
      </p>


    </div>
  </main>
</template>
