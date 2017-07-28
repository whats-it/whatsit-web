<template>
            <div class="card">
              <div class="card-block">
                <img>
            <!--<h4 class="card-title">Github</h4>-->
            <!--<p class="card-text">...</p>-->
              </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item justify-content-between" v-for="repo in repos">
              {{ repo.full_name }}
              <button type="button" @click="addProject(repo)" class="btn btn-info">Add Project</button>
            </li>
          </ul>
        </div>
 </template>


<script>
import vueModule from '../../views/FunctionModule/vueModule'

export default {
  extends: vueModule
}
</script>


<style scoped>
  .avatar {
    border-radius: 50px;
  }
  .card {
    border-radius: 3px;
    box-shadow: 0 0 10px 0 rgba(53, 58, 73, 0.20); }

