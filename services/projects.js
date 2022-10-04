import ApiService from './api'

export default class Projects extends ApiService {
  projectsList(params) {
    return this.axios.$get(
      `${process.env.API_URL}projects-manage/index`,
      {
        params: params
      }
    )
  }
  updateProject(data) {
    return this.axios.$post(
      `${process.env.API_URL}projects-manage/update`,
      data.project,
      {
        params: data.params
      }
    )
  }
}
