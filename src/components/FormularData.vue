<template>
  <div>
    <div class="contact-form" v-if="showForm">
      <h2 class="form-title">Kontaktformular fürs <span class="highlighted-text">kostenloses Erstgespräch</span></h2>
      <h3 class="form-subtitle"><span class="highlighted-text">Eine Stunde</span> kostenlose Erstberatung, jetzt Anfragen!</h3>
      <div class="form-field">
        <input v-model="nameField" placeholder="Name***" class="input-field">
      </div>
      <div class="form-field">
        <input v-model="nachnameField" placeholder="Nachname" class="input-field">
      </div>
      <div class="form-field">
        <input v-model="telNummerField" placeholder="Telefonnummer***" class="input-field">
      </div>
      <div class="form-field">
        <input v-model="emailAdresseField" placeholder="E-Mail-Adresse***" class="input-field">
      </div>
      <div class="form-field">
        <input v-model="stadtField" placeholder="Stadt" class="input-field">
      </div>
      <div class="form-field">
        <input v-model="woTagField" placeholder="Wochentag***" class="input-field">
      </div>
      <div class="form-field">
        <textarea v-model="kommentarField" placeholder="Kommentar" class="input-field"></textarea>
      </div>
      <div class="form-field">
        <button type="button" @click="save()" class="submit-button button" :disabled="!isFormValid">JETZT ANFRAGEN</button>
      </div>
    </div>
    <div v-else class="thank-you">
      <h2>Vielen Dank für Ihre Anfrage!</h2>
      <p>Wir werden uns bald bei Ihnen melden.</p>
      <div class="button-container" :style="getButtonStyles">
        <router-link to="/" class="button-link">
          <button class="button">ZÜRÜCK ZUR STARTSEITE</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormularData',
  props: ['msg'],
  data () {
    return {
      items: [],
      nameField: '',
      nachnameField: '',
      telNummerField: '',
      emailAdresseField: '',
      stadtField: '',
      woTagField: '',
      kommentarField: '',
      showForm: true
    }
  },
  computed: {
    isFormValid () {
      return this.nameField && this.telNummerField && this.emailAdresseField && this.woTagField
    }
  },
  methods: {
    save () {
      const endpoint = 'http://localhost:8080/terminanfragen'
      const data = {
        name: this.nameField,
        nachname: this.nachnameField,
        telNummer: this.telNummerField,
        emailAdresse: this.emailAdresseField,
        stadt: this.stadtField,
        woTag: this.woTagField,
        kommentar: this.kommentarField
      }
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
      fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log('Success', data)
          this.showForm = false
        })
        .catch(error => console.log('error', error))
    }
  }
}
</script>

<style scoped>
.contact-form {
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  padding: 20px;
}

.thank-you {
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  text-align: center;
}

.thank-you h2 {
  font-size: 40px;
  font-weight: bold;
}

.thank-you p {
  font-size: 20px;
}

.form-title {
  color: white;
  font-size: 40px;
  margin-bottom: 20px;
  font-weight: bold;
}

.highlighted-text {
  color: #a2e831;
}

.form-subtitle {
  color: white;
  font-size: 26px;
  margin-bottom: 40px;
}

.form-field {
  margin-bottom: 10px;
}

.input-field {
  width: 350px;
  padding: 8px;
  border: none;
  background-color: white;
  color: black;
  border-radius: 4px;
}

textarea.input-field {
  height: 100px;
  border-radius: 4px;
}

.submit-button {
  background-color: #4252be;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 10px 15px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.submit-button:hover {
  transform: scale(0.95);
  color: #ffffff;
  background-color: #6e78b6;
}

.submit-button:active {
  transform: scale(0.9);
}

.button:disabled {
  background-color: #9c9c9c;
}

.button:disabled:hover::before {
  content: "Pflichtfelder ausfüllen*";
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  padding: 6px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  font-size: 12px;
  border-radius: 4px;
}

.button-link {
  text-decoration: none;
}

.button {
  background-color: #4252be;
  color: #ffffff;
  border: none;
  border-radius: 8px; /* Radiuswert anpassen */
  padding: 10px 15px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.button:hover {
  transform: scale(0.95);
  color: #ffffff;
  background-color: #6e78b6;
}

.button:active {
  transform: scale(0.9);
}
</style>
