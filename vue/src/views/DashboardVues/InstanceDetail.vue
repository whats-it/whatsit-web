<template>
    <div class="row">
        <h1>Instance Detail Page</h1>
        <div>
            <p>{{this.$route.params.repo}}</p>
        </div>
        <div>
            <button type="button" @click="addInstance(repoData)" class="btn btn-info" >RUN</button>
        </div>
    </div>
</template>

<script>
import vueModule from '../../views/FunctionModule/vueModule'

export default {
  extends: vueModule,
  computed: {
    repoData () {
      return this.$route.params.repo
    }
  }
}
</script>


<style scoped>

</style>
