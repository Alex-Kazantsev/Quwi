export default {
  data() {
    return {
      toastOptions: {
        position: 'bottom-left',
        keepOnHover: true,
        duration: 5000,
        className: 'toast_alert',
      },
    }
  },
  methods: {
    toast(type, text) {
      if (type === 'success') this.$toast.success(text, this.toastOptions)
      if (type === 'error') this.$toast.error(text, this.toastOptions)
      if (type === 'info') this.$toast.info(text, this.toastOptions)
    },
  },
}
