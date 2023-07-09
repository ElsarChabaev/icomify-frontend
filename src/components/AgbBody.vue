<template>
  <div class="body-container">
    <div class="section">
      <h1 class="agb-title">Unsere allgemeinen Geschäftsbedingungen</h1>
      <div class="agb-content">
        <p>
          Hier könnte der Inhalt der Datenschutzerklärung stehen. Bitte ersetzen Sie diesen Platzhaltertext durch eine ausführliche Datenschutzerklärung, die Ihren Anforderungen entspricht.
        </p>
        <p class="agb-info">
          Beispieltext: Dies ist eine Beispiel-Datenschutzerklärung. Bitte stellen Sie sicher, dass Sie die Informationen an Ihre eigenen Datenschutzrichtlinien anpassen.
        </p>
      </div>
    </div>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.section {
  margin-bottom: 40px;
}

.agb-title {
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
}

.agb-content {
  position: absolute;
  top: 300px;
  left: 80px;
  text-align: center;
  font-size: 16px;
}

.agb-info {
  margin-top: 10px;
}

a {
  color: white;
}
</style>
