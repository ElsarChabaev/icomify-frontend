<template>
  <div class="home">
    <HelloWorld gruss="Hallo, das ist die Startseite"/>
  </div>
</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    HelloWorld
  }
}
</script>
