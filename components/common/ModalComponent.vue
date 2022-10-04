<template>
  <div
    v-if="show"
    class="dialog"
    @click.stop="$emit('toggle')"
  >
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalComponent',
  props: {
    show: {
      type: Boolean,
      default: false,
    }
  }
}
</script>
