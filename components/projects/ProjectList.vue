<template>
  <div class="project__list container">
    <ProjectComponent
      @click="$emit('openModal', project)"
      v-for="project in projects"
      :project="project"
      :key="project.id"
    />
  </div>
</template>

<script>
import ProjectComponent from "~/components/projects/ProjectComponent";

export default {
  name: 'ProjectList',
  components: {
    ProjectComponent
  },
  props: {
    projects: {
      type: Array,
      required: true,
    }
  },
}
</script>
