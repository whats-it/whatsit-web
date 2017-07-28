<template>
    <div>
        <div type="button" @click="" class="btn btn-info" >
             <router-link :to="{ name: 'Projects Add'}">Add Project</router-link>
        </div>

        <div class="row">
            <div class="col-md-4" style="min-width: 20rem;">
                <cvsInfo/>
            </div>
            <div class="col-md-8">
                <repoInfo/>
            </div>
        </div>
    </div>
</template>

<script>
import cvsInfo from '../views/ProjectsVues/Cvs'
import repoInfo from '../views/ProjectsVues/Repo'

let auth = require('../util/auth')

export default {
  name: 'projects',
  beforeCreate: function () {
    if (auth.isAuthenticated()) {
      this.$store.dispatch('FETCH_USER_PROFILE', {
        token: auth.getToken()
      }).then(() => { })
    } else {
      this.$router.push({ path: 'login' })
    }
  },
  components: {
    cvsInfo,
    repoInfo
  }
}
</script>


<style scoped>
/*  .avatar {
    border-radius: 50px;
  }
  .card {
    border-radius: 3px;
    box-shadow: 0 0 10px 0 rgba(53, 58, 73, 0.20); }*/


</style>
