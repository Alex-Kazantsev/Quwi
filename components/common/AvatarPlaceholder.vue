<template>
  <div
    class="avatar-placeholder"
    :style="{
      'height': `${height}px`,
      'min-height': `${height}px`,
      'width': `${width}px`,
      'min-width': `${width}px`
    }"
  >
    TT
  </div>
</template>

<script>
export default {
  name: 'AvatarPlaceholder',
  props: {
    width: {
      type: Number,
      default: 20
    },
    height: {
      type: Number,
      default: 20
    }
  }
}
</script>
