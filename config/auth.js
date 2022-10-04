export default {
  strategies: {
    local: {
      token: {
        property: 'token',
        global: true,
        maxAge: false,
      },
      user: {
        property: 'user',
      },
      endpoints: {
        login: {
          url: 'https://api.quwi.com/v2/auth/login',
          method: 'post'
        },
        logout: {
          url: 'https://api.quwi.com/v2/auth/logout',
          method: 'post'
        },
        user: {
          url: 'https://api.quwi.com/v2/auth/init',
          method: 'get'
        }
      },
    }
  }
}
