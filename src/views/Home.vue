<template>
  <div class="home">
    <HomeBddy/>
  </div>
</template>

<script>

import HelloWorld from '@/components/ImpressumBody.vue'
import HomeBddy from '@/components/HomeBddy.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    HelloWorld, HomeBddy
  }
}
</script>
