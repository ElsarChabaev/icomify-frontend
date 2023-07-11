<template>
  <div>
    <NavbarMenue />
  </div>
  <router-view/>
  <div>
    <FooterSection />
  </div>
</template>

<script>
import NavbarMenue from './components/NavbarMenue.vue'
import FooterSection from './components/FooterSection.vue'
import FormularData from './components/FormularData.vue'
import DynamicForm from '@/components/DatenschutzBody.vue'
import ImpressumBody from '@/components/ImpressumBody.vue'
import AgbBody from '@/components/AgbBody.vue'
import AboutBody from '@/components/AboutBody.vue'

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    FormularData, DynamicForm, ImpressumBody, NavbarMenue, FooterSection, AgbBody, AboutBody
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

#nav{
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: black;
}

#nav a.router-link-exact-active {
  color: blue;
}

</style>
