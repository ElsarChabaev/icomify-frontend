<template>
  <div class="home">
    <FormularData msg="Vereinbare jetzt ein kostenloses und unverbindliches Beratungsgespräch"/>
  </div>
</template>

<script>

import FormularData from '@/components/FormularData.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Kontaktformular',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    FormularData
  }
}
</script>
