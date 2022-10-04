<template>
  <div class="project__form__wrapper">
    <input
      type="text"
      v-model="form.name"
      placeholder="name"
    >
    <button
      class="btn btn-primary"
      @click="$emit('update', form)"
    >
      Update
    </button>
  </div>
</template>

<script>
export default {
  name: 'ProjectFormComponent',
  props: {
    project: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      form: {
        name: ''
      }
    }
  },
  mounted() {
    this.form.name = this.project?.name ?? ''
  },
}
</script>
