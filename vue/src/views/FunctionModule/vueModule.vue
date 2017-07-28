<template>

</template>
<script>

let auth = require('../../util/auth')

export default {
  name: 'MyProject',
  data: () => ({
    loading: true
  }),
  computed: {
    profile () {
      return this.$store.state.profile
    },
    organizations () {
      return this.$store.state.orgs
    },
    repos () {
      return this.$store.state.repos
    },
    token () {
      return auth.getToken()
    },
    userId () {
      return this.$store.state.userId
    },
    instances () {
      return this.$store.state.instances
    }

  },

  beforeCreate: function () {
    console.log('beforeCreate')
    if (!auth.isAuthenticated()) {
      console.log('go to Login')
      this.$router.replace('/login')
    }
  },
  created: function () {
  },

  asyncData ({ store }) {
    return store.dispatch('FETCH_ORGS', { token: auth.getToken() })
  },

  title () {
    return 'Projects'
  },

  beforeMount () {
    this.fetchProfile()
    this.fetchOrgs()
    // this.fetchInstancesByUser()
  },

  mounted: function () {
    console.log('mounted')
  },

  watch: {
    organizations: 'fetchOrgs',
    profile: 'fetchProfile',
    userId: 'fetchInstancesByUser'
  },

  methods: {
    fetchOrgs () {
      this.loading = true
      fetchOrgs(this.$store, this.token).then(() => {
        this.loading = false
      })
    },
    fetchProfile () {
      this.loading = true
      console.log(this.$store.state.profile)
      fetchProfile(this.$store, this.token).then(() => {
        this.loading = false
      })
    },
    fetchRepos () {
      this.loading = true
      console.log(this.$store.state.repos)
      fetchRepos(this.$store, this.token).then(() => {
        this.loading = false
      })
    },
    fetchInstancesByUser () {
      this.loading = true
      console.log(this.$store.state.instances)
      fetchInstancesByUser(this.$store, this.$store.state.userId).then(() => {
        this.loading = false
      })
    },
    fetchOrgRepos (org) {
      this.loading = true
      console.log(this.$store.state.repos)
      fetchOrgRepos(this.$store, org, this.token).then(() => {
        this.loading = false
      })
    },
    runTest (repo) {
      console.log('runTest: ' + repo)
      addProject(this.$store, repo)
        .then((project) => {
          this.loading = false
//        this.$store.dispatch('SET_ACTIVE_PROJECT', { project: project })
          this.$router.replace(`/dashboard/${repo.full_name}`)
        })
    },
    addProject (repo) {
      console.log('addProject: ' + repo)
      addProject(this.$store, repo)
        .then((project) => {
          this.loading = false
//        this.$store.dispatch('SET_ACTIVE_PROJECT', { project: project })
          // this.$router.replace(`/dashboard/${repo.full_name}`)
          this.$router.replace(`/dashboard/`)
        })
    },
    addInstance (projectId) {
      this.loading = true
      console.log(this.$store.state.instances.projectId)
      addInstance(this.$store, projectId).then(() => {
        this.loading = false
      })
    }
  }
}

function fetchProfile (store, token) {
  if (token) {
    return store.dispatch('FETCH_USER_PROFILE', {
      token: token
    }).then(() => {
      console.log('done FETCH_USER_PROFILE in MyProject.vue')
      store.dispatch('UPDATE_USER_PROFILE', {})
        .then(() => {
        }
      )
    })
  }
}

function fetchOrgs (store, token) {
  if (token) {
    return store.dispatch('FETCH_ORGS', {
      token: token
    }).then(() => {
      console.log('done FETCH_ORGS in MyProject.vue')
    })
  }
}

function fetchRepos (store, token) {
  if (token) {
    return store.dispatch('FETCH_REPOS', {
      token: token
    }).then(() => {
      console.log('done FETCH_REPOSin MyProject.vue')
    })
  }
}

function fetchInstancesByUser (store, userId) {
  return store.dispatch('FETCH_INSTANCES_BY_USER', {
    userId: userId
  }).then(() => {
    console.log('done FETCH_INSTANCES_BY_USER MyProject.vue')
  })
}

function fetchOrgRepos (store, org, token) {
  if (token) {
    return store.dispatch('FETCH_ORG_REPOS', {
      org: org,
      token: token
    }).then(() => {
      console.log('done FETCH_ORG_REPOS in MyProject.vue')
    })
  }
}

function addProject (store, repo) {
  return store.dispatch('ADD_PROJECT', {
    repo: repo
  }).then(() => addInstance(store, store.state.activeProjectId))
    .then(() => {
      console.log('done ADD_PROJECT in MyProject.vue')
    })
}

function addInstance (store, projectId) {
  return store.dispatch('ADD_INSTANCE', {
    projectId: projectId
  }).then(() => {
    console.log('done ADD_INSTANCE in Running')
  })
}
</script>
<style>

</style>
