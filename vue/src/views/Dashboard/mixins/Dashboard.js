let WhatsIt = require('whatsit-sdk-js')
let aw = new WhatsIt()
let awProject = aw.getProject()

export const Dashboard = {

  beforeCreate: function () {
    console.log('Dashboard: beforeCreate')
    // let store = this.$store
    // this.$store.watch(this.$store.getters.userId,
    //   () => {
    //     getProjects(store)
    //   },
    //   {
    //     deep: true // add this if u need to watch object properties change etc.
    //   }
    // )
    //
    // if (this.$store.getters.userId) {
    //   getProjects(store)
    // }
  },

  methods: {
    toAddProject: function () {
      console.log('on click to dashboard button')
      this.$router.push('/projects/add')
    }
  }
}

function getProjects (store) {
  console.log('userId : ' + store.state.userId)
  awProject.getProjectsByUser(store.state.userId)
    .then(res => {
      console.log(res.data.data)
    })
}
