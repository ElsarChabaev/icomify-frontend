<template>
  <h3> {{msg}}</h3>
  <div>
    <input v-model="nameField" placeholder="Name">
  </div>
  <div>
    <input v-model="nachnameField" placeholder="Nachmame">
  </div>
  <div>
    <input v-model="telNummerField" placeholder="TelNummer">
  </div>
        <div>
          <input v-model="emailAdresseField" placeholder="EmailAdresse">
        </div>
    <div>
      <input v-model="stadtField" placeholder="Stadt">
    </div>
        <div>
          <input v-model="woTagField" placeholder="WoTag">
        </div>
    <input v-model="kommentarField" placeholder="Kommentar" @keyup.enter="save()">
  <div>
      <button type="button" @click="save()">Save</button>
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
      kommentarField: ''
    }
  },
  methods: {

    loadThings () {
      const endpoint = 'http://localhost:8080/terminanfragen'
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
        // headers: {
        //   Authorization: 'Bearer ' + this.accessToken
        // }
      }
      fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(result => result.forEach(terminanfragen => {
          this.items.push(terminanfragen)
        }))
        .catch(error => console.log('error', error))
    },
    save () {
      const endpoint = 'http://localhost:8080/terminanfragen'
      const data = {
        id: this.id,
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
        })
        .catch(error => console.log('error', error))
    }
  }
}
</script>

<style scoped>
</style>
