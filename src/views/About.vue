<template>
  <div class="about">
    <DynamicForm title ="Deshalb bist du bei uns richtig"/>
  </div>
</template>

<script>

import DynamicForm from '@/components/DynamicForm.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'About',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    DynamicForm
  }
}
</script>
