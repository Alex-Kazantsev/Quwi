<template>
  <div class="login__layout">
    <header class="login__layout__header-wrapper">
      <div class="login__layout__header container">
        <img
          src="/logo.png"
          alt="logo"
          width="30"
          height="30"
        >
        <a
          class="link text-uppercase"
          href="https://quwi.com/signup"
          target="_blank"
        >
          signup
        </a>
      </div>
    </header>
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'login'
}
</script>
