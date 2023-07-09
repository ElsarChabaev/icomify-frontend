<template>
  <div>
    <!-- Hier kommt der Inhalt vor dem Footer -->

    <footer class="footer bg-black text-white">
      <div class="container d-flex justify-content-center align-items-center">
        <div :class="navPositionClass">
          <router-link to="/impressum" class="nav-link" :class="{ 'active-link': $route.path === '/impressum' }">Impressum/ Kontakt</router-link>
          <router-link to="/datenschutz" class="nav-link" :class="{ 'active-link': $route.path === '/datenschutz' }">Datenschutzrichtlinien</router-link>
          <router-link to="/allgemeineGeschaeftsbedingungen" class="nav-link" :class="{ 'active-link': $route.path === '/allgemeineGeschaeftsbedingungen' }">Allgemeine Geschäftsbedingungen</router-link>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="footer-credit">This website was created and designed by Elsar Chabaev</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navPositionClass: 'nav mx-auto'
    }
  },
  methods: {
    updateNavPositionClass (newClass) {
      this.navPositionClass = newClass
    },
    handleResize () {
      if (window.innerWidth <= 768) {
        this.updateNavPositionClass('nav flex-column')
      } else {
        this.updateNavPositionClass('nav mx-auto')
      }
    }
  },
  mounted () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize() // Initialer Aufruf, um die richtige Positionierung festzulegen
  },
  beforeUnmount () {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style scoped>
.nav-link:hover {
  color: #5f6cd7;
}

.nav-link.active-link {
  color: #a2e831;
}

.footer {
  background-color: black;
  color: white;
  padding: 8px 0; /* Hier die Padding-Werte anpassen */
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.nav {
  text-align: center;
}

.nav-link {
  color: white;
  font-size: 16px;
  margin-left: 10px;
  margin-bottom: 15px;
}

.footer-bottom {
  text-align: center;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
}

.footer-credit {
  font-size: 12px;
  margin: 5px;
}

/* Neuer Code */
div {
  margin-bottom: 0;
}
</style>
