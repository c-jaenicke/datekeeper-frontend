<template>
  <h2>Über Datekeeper</h2>

  <p>Datekeeper ist ein einfacher Kalender zum eintragen Terminen.</p>
  <p>
    Das Projekt entstand im Sommersemester 2023 in dem Kurs Webtechnologien. Die
    Aufgabe war es etwas zu entwickeln was einen bestimmten Stack erfüllt.
    Dieser Stack bestand aus einer Datenbank, einem Backend welches über eine
    REST-API mit einem Frontend kommuniziert und Daten in einer Datenbank
    speichern kann, und einem Frontend welche über das Internet erreichbar sein
    kann und auf das Backend zugreift. Die Programmiersprachen und Frameworks
    waren vorgegeben.
  </p>

  <h3>Repositorys</h3>

  <p>
    Der Codes des Projekts befindet sich in 2 Repositorys, einem Backend und
    einem Frontend Repository.
  </p>

  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card">
          <h5 class="card-header">datekeeper-backend</h5>
          <div class="card-body">
            <h5 class="card-title">Backend Repository</h5>
            <p class="card-text">
              Das Backend ist eine REST-API geschrieben in Java und Spring.
            </p>
            <a href="https://github.com/c-jaenicke/datekeeper-backend"
              >GitHub Repository</a
            >
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card">
          <h5 class="card-header">datekeeper-frontend</h5>
          <div class="card-body">
            <h5 class="card-title">Frontend Repository</h5>
            <p class="card-text">
              Das Frontend wurde in JavaScript geschrieben und nutzt die VueJS
              Framework. Darstellungselemente wurden teilweise aus Bootstrap
              genommen und ggf. angepasst.
            </p>
            <a href="https://github.com/c-jaenicke/datekeeper-frontend"
              >GitHub Repository</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>

  <h3>Verwendete Technologien</h3>

  <p>Die folgende Technologien und Dienste wurden verwendet.</p>

  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card">
          <h5 class="card-header">Java</h5>
          <div class="card-body">
            <h5 class="card-title">Frontend Repository</h5>
            <p class="card-text">
              Java bildet die Grundlage für das Backend. Genutzte Java
              Bibliotheken werden hier nicht im einzelnen aufgeführt.
            </p>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card">
          <h5 class="card-header">Spring</h5>
          <div class="card-body">
            <p class="card-text">
              Spring ermöglicht es dem Backend auf HTTP Anfragen zu reagieren
              und zu antworten. Zudem ermöglicht es Dependency Injections und
              die Unterteilung des Projekts in verschiedene Teile.
            </p>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card">
          <h5 class="card-header">PostgreSQL</h5>
          <div class="card-body">
            <p class="card-text">
              Die verwendete Datenbank um die eingegebenen Daten zu speicher ist
              PostgreSQL.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="card">
          <h5 class="card-header">Gradle</h5>
          <div class="card-body">
            <p class="card-text">
              Gradle ermöglicht die Kompilierung des Backends.
            </p>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card">
          <h5 class="card-header">VueJS</h5>
          <div class="card-body">
            <p class="card-text">VueJS ist die Grundlage für das Frontend.</p>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card">
          <h5 class="card-header">NGINX</h5>
          <div class="card-body">
            <p class="card-text">
              Da VueJS im verpackten Zustand keinen eigenen Webserver hat, wird
              ein NGINX Webserver in dem Frontend Docker Container benutzt.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="card">
          <h5 class="card-header">JavaScript</h5>
          <div class="card-body">
            <p class="card-text">
              Komponenten des Frontends wurden in JavaScript geschrieben.
            </p>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card">
          <h5 class="card-header">Docker</h5>
          <div class="card-body">
            <p class="card-text">
              Um das Hosten des Projekts einfacher zu machen, können alle Teile
              zu einem Docker Image verpackt werden. Anschließend können diese
              als Docker Stack gehostet werden.
            </p>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card">
          <h5 class="card-header">Bootstrap</h5>
          <div class="card-body">
            <p class="card-text">
              Viele visuellen Elemente in dem Frontend wurden aus der Bootstrap
              genommen und teilweise angepasst.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <h3>Aufbau des Stacks</h3>

  <p>Dieses Diagramm stellt den Ablauf einer Abfrage an den Service dar.</p>

  <img
    src="@/assets/Stack.png"
    alt="Diagramm"
    style="display: block; margin-left: auto; margin-right: auto"
  />

  <p>
    *Das Diagramm enthält Traefik als reverse Proxy für den Server. Traefik ist
    nicht in der gegebenen Docker Compose Datei enthalten und muss selber
    eingerichtet werden! Alternativ kann Traefik durch NGINX oder einer anderen
    Reverse Proxy ersetzt werden.
  </p>

  <p>
    Bei der Vorstellung des Projektes wird das Frontend hinter dem
    authentifizierungs und autorisierungs Server Authelia gestellt, um unbefugte
    Zugriffe zu unterbinden.
  </p>
</template>
<script setup></script>
