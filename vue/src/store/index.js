import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      accessToken: null,
      activeType: null,
      activeProjectId: null,
      activeInstanceId: null,
      itemsPerPage: 20,
      userId: null,
      displayName: null,
      cropImgList: [],
      items: {/* [id: number]: Item */},
      orgs: {},
      profile: {},
      projects: {},
      repos: {/* [id: string]: Repo */},
      instances: {/* [id: string]: Repo */},
      users: {/* [id: string]: User */},
      lists: {
        top: [/* number */],
        new: [],
        show: [],
        ask: [],
        job: []
      }
    },
    actions,
    mutations,
    getters
  })
}
