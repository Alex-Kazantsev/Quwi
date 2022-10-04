<template>
  <div class="login__form">
    <div class="login__form__logo">
      <img
        src="~/assets/img/common/logo-text.svg"
        alt="logo"
        width="71"
        height="37"
      >
    </div>
    <input
      type="text"
      v-model="form.email"
      class="login__form__field"
      placeholder="Email"
    >
    <input
      type="password"
      v-model="form.password"
      class="login__form__field"
      placeholder="Password"
    >
    <div
      v-if="errorMessage"
      class="login__form__error"
    >
      {{ errorMessage }}
    </div>
    <button
      class="btn btn-primary login__form__btn"
      @click="submit"
    >
      Login
    </button>
    <a
      class="link link-primary login__form__forgot-password"
      href="https://quwi.com/forgot"
      target="_blank"
    >
      Forgot password?
    </a>
  </div>
</template>

<script>
export default {
  name: 'LoginFormComponent',
  props: {
    errorMessage: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    form: {
      email: '',
      password: '',
    },
  }),
  methods: {
    submit() {
      this.$emit('submit', this.form)
    }
  }
}
</script>
