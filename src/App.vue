<template>
<div id="nav">
  <router-link to = "/" >Home</router-link> |
  <router-link to = "/about" >About</router-link> |
  <router-link to = "/kontaktformular" >Kontaktformular</router-link>
</div>
  <router-view/>
</template>

<script>
import FormularData from './components/FormularData.vue'
import DynamicForm from '@/components/DynamicForm.vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    FormularData, DynamicForm, HelloWorld
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
