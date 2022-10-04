<template>
  <div>
    <ProjectList
      v-if="projects"
      :projects="projects"
      @openModal="openModal($event)"
    />
    <transition name="fade">
      <ModalComponent
        :show="modal"
        @toggle="modal = false"
      >
        <ProjectForm
          :project="currentProject"
          @update="updateProject($event)"
        />
      </ModalComponent>
    </transition>
  </div>
</template>

<script>
import ProjectList from "~/components/projects/ProjectList";
import ModalComponent from "~/components/common/ModalComponent";
import ProjectForm from "~/components/projects/ProjectForm";
import { PROJECTS_REQUEST_PARAMS } from '~/contants';

export default {
  name: 'IndexPage',
  components: {
    ProjectForm,
    ModalComponent,
    ProjectList
  },
  async asyncData({ app }) {
    const response = await app.$services.projects.projectsList(PROJECTS_REQUEST_PARAMS)

    return {
      projects: response.projects
    }
  },
  data() {
    return {
      modal: false,
      currentProject: null,
      PROJECTS_REQUEST_PARAMS
    }
  },
  methods: {
    openModal(data) {
      this.currentProject = data
      this.modal = true
    },
    async updateProject(project) {
      if (project.name === this.currentProject.name) {
        this.modal = false
        return
      }

      try {
        await this.$services.projects.updateProject({
          project: project,
          params: {
            id: this.currentProject.id
          }
        })

        this.modal = false

        await this.toast('success', 'The project name was successfully updated')

        const response = await this.$services.projects.projectsList(this.PROJECTS_REQUEST_PARAMS)
        this.projects = response.projects
      } catch(e) {
        this.toast('error', e.response?.data?.message ? e.response.data.message : 'oops, something went wrong')
        console.log(e)
      }
    }
  }
}
</script>
