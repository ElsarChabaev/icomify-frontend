<template>
  <div class="body-container">
    <h1 class="impressum-title">Impressum</h1>
    <div class="impressum-content">
      <p>
        Verantwortlich für diese Seite ist der Einzelunternehmer Elsar Chabaev.<br><br>
        Elsar Chabaev<br>
        Einzelunternehmnung<br>
        Kantstraße 86, 10627 Berlin<br>
        Finanzamt Charlottenburg-Wilmersdorf<br>
        856-9734-123-0876 (Steuernummer)
      </p>
    </div>
    <h2 class="kontakt-title">Kontakt</h2>
    <div class="kontakt-details">
      <p>
        Telefon:<br>(+49)-172-924-7005<br>
        E-Mail :<br> kontakt@icomify.com<br>
        Adresse:<br>
        Kantstraße 86<br>
        10627 Berlin<br>
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
  height: 100vh;
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
  font-weight: bold;
}

.kontakt-title {
  position: absolute;
  top: 380px;
  left: 50%;
  transform: translateX(-50%);
}

.kontakt-details {
  position: absolute;
  top: 450px;
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
