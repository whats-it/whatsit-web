<template>
    <div id = "whole">
            <div class="card">
              <div class="card-block">
                <img>
                <h3>My Instance List</h3>
            <!--<h4 class="card-title">Github</h4>-->
            <!--<p class="card-text">...</p>-->
              </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item justify-content-between" v-for="instance in instances">
              <h2>{{instance.status}}</h2>
              {{ instance.project.full_name }}
              <router-link :to="{ name: 'Instance Detail',  params: {user : instance.project.full_name, repo : instance.project.projectId} }" class="btn btn-info" >Instance Detail</router-link>
            </li>
          </ul>
        </div>
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

</style>
