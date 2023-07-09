<template>
  <div class="body-container">
    <h1 class="impressum-title">Impressum</h1>
    <div class="impressum-content">
      <p>
        Hier könnte das Impressum stehen. Bitte ersetzen Sie "XXXXXXXXX" durch die entsprechenden Daten.
      </p>
      <p>
        Verantwortlich für den Inhalt:<br>
        XXXXXXXXX<br>
        XXXXXXXXX<br>
        XXXXXXXXX<br>
        XXXXXXXXX<br>
        XXXXXXXXX
      </p>
    </div>
    <h2 class="kontakt-title">Kontakt</h2>
    <div class="kontakt-details">
      <p>
        Telefon: XXXXXXXXX<br>
        E-Mail: XXXXXXXXX<br>
        Adresse: XXXXXXXXX
      </p>
    </div>
    <p class="streitbeilegung-hinweis">
      Hinweis: Gemäß der Verordnung über Online-Streitbeilegung in Verbraucherangelegenheiten steht Ihnen eine Online-Streitbeilegungsplattform der EU zur Verfügung. Sie finden diese unter folgendem Link:
      <a href="https://ec.europa.eu/consumers/odr/" target="_blank">https://ec.europa.eu/consumers/odr/</a>
    </p>
  </div>
</template>

<script>
export default {
  // Komponentenoptionen
}
</script>

<style scoped>
.body-container {
  background-color: black;
  color: white;
  min-height: 93vh;
}

.impressum-title {
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
}

.impressum-content {
  position: absolute;
  top: 180px;
  left: 50%;
  transform: translateX(-50%);
}

.kontakt-title {
  position: absolute;
  top: 430px;
  left: 50%;
  transform: translateX(-50%);
}

.kontakt-details {
  position: absolute;
  top: 510px;
  left: 50%;
  transform: translateX(-50%);
  font-weight: bold;
}

.streitbeilegung-hinweis {
  position: absolute;
  top: 650px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}

a {
  color: white;
}
</style>
