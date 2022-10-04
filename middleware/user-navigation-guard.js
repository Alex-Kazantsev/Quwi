export default function ({ $axios, route, redirect }) {
  $axios.onError((e) => {
    if (e.response.status === 401 && route.path !== '/login') {
      return redirect('login')
    }
  })
}
