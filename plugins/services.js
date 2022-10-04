import createServices from '~/services'

export default ({ app: { $axios } }, inject) => {
  inject('services', createServices($axios))
}
