<template>
</template>

<script>
import {Projects} from './mixins/Projects'
import ProjectCard from './ProjectCard'
import AddProjectCard from './AddProjectCard'

export default {
  name: 'projects',
  mixins: [Projects],
  components: {
    ProjectCard,
    AddProjectCard
  }
}
</script>

<style>
</style>
