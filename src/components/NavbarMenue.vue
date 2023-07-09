<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-black" :key="$route.path">
    <div class="container d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center">
        <router-link v-if="!isMenuOpen" to="/" class="navbar-logo">
          <img src="../assets/logo_icomify.png">
        </router-link>
      </div>
      <button class="navbar-toggler" type="button" @click="toggleMenu" :aria-expanded="isMenuOpen.toString()">
        <span class="navbar-toggler-icon" :class="{ 'navbar-toggler-icon-dark': isMenuOpen, 'navbar-toggler-icon-light': !isMenuOpen }"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" :class="{ show: isMenuOpen }">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link" :class="{ 'active-link': $route.path === '/' }">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link" :class="{ 'active-link': $route.path === '/about' }">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/kontaktformular" class="nav-link" :class="{ 'active-link': $route.path === '/kontaktformular' }">Kontaktformular</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      isMenuOpen: false
    }
  },
  mounted () {
    window.addEventListener('resize', this.handleResize)
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount () {
    window.removeEventListener('resize', this.handleResize)
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    toggleMenu () {
      this.isMenuOpen = !this.isMenuOpen
    },
    handleResize () {
      if (window.innerWidth > 768) {
        this.isMenuOpen = false
        this.showLogo()
      }
    },
    showLogo () {
      this.$nextTick(() => {
        const logoLink = document.querySelector('.navbar-logo')
        if (logoLink) {
          logoLink.style.display = 'inline'
        }
      })
    },
    handleScroll () {
      const navbar = document.querySelector('.navbar')
      if (navbar) {
        if (window.pageYOffset > 0) {
          navbar.classList.add('fixed-navbar')
        } else {
          navbar.classList.remove('fixed-navbar')
        }
      }
    }
  }
}
</script>

<style scoped>
.navbar {
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: black;
  position: sticky;
  top: 0;
  z-index: 999;
  transition: top 0.3s ease;
}

.fixed-navbar {
  top: -100px;
}

.navbar-brand {
  font-weight: bold;
  padding: 0;
  white-space: nowrap;
}

.nav-link {
  color: white;
  transition: color 0.3s ease;
  font-size: 20px;
  font-weight: bold;
}

.nav-link:hover {
  color: #5f6cd7;
}

.active-link {
  color: #a2e831;
}

.active-link:hover {
  color: #a2e831;
}

.show {
  display: block !important;
}

.ml-auto {
  margin-left: auto !important;
}

.navbar-toggler-icon-dark {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='%23a2e831' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
}

.navbar-toggler-icon-light {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='white' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
}
</style>
