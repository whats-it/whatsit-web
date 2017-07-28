 <template>
        <div class="card">
          <div class="card-block">
            <img>
            <h4 class="card-title">Github</h4>
            <p class="card-text"></p>
          </div>
          <ul class="list-group list-group-flush" >
            <li class="list-group-item">
              <a @click="fetchRepos">
                <div class="media">
                  <img class="d-flex align-self-center mr-3 avatar" :src="profile.me.avatar_url">
                  <h6 class="mt-0">{{profile.me.login}}</h6>
                </div>
              </a>
            </li>
            <li class="list-group-item" v-for="organization in organizations">
              <a @click="fetchOrgRepos(organization.login)">
                <div class="media">
                  <img class="d-flex align-self-center mr-3 avatar" :src="organization.avatar_url">
                    <h6 class="mt-0">{{organization.login}}</h6>
                </div>
              </a>
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

