import {
  fetchUser,
  fetchItems,
  fetchIdsByType,
  fetchOrgs,
  fetchProfile,
  fetchRepos,
  fetchInstancesByUser,
  fetchOrgRepos,
  updateUserProfile,
  addProject,
  addInstance
} from '../api'

export default {
  // ensure data for rendering given list type
  FETCH_LIST_DATA: ({ commit, dispatch, state }, { type }) => {
    commit('SET_ACTIVE_TYPE', { type })
    return fetchIdsByType(type)
      .then(ids => commit('SET_LIST', { type, ids }))
      .then(() => dispatch('ENSURE_ACTIVE_ITEMS'))
  },

  // ensure all active items are fetched
  ENSURE_ACTIVE_ITEMS: ({ dispatch, getters }) => {
    return dispatch('FETCH_ITEMS', {
      ids: getters.activeIds
    })
  },

  FETCH_ITEMS: ({ commit, state }, { ids }) => {
    // on the client, the store itself serves as a cache.
    // only fetch items that we do not already have, or has expired (3 minutes)
    const now = Date.now()
    ids = ids.filter(id => {
      const item = state.items[id]
      if (!item) {
        return true
      }
      if (now - item.__lastUpdated > 1000 * 60 * 3) {
        return true
      }
      return false
    })
    if (ids.length) {
      return fetchItems(ids).then(items => commit('SET_ITEMS', { items }))
    } else {
      return Promise.resolve()
    }
  },

  FETCH_ORGS: ({ commit, dispatch, state }, { token }) => {
    console.log('FETCH_ORGS: token=' + token)
    return fetchOrgs(token)
        .then(orgs => {
          console.log('FETCH_ORGS then in actions.js : orgs = ' + orgs)
          commit('SET_ORGS', { orgs })
        })
  },

  FETCH_USER_PROFILE: ({ commit, dispatch, state }, { token }) => {
    return fetchProfile(token)
      .then(profile => {
        console.log('FETCH_USER_PROFILE then in actions.js : profile = ' + JSON.stringify(profile))
        commit('SET_PROFILE', { profile })
        console.log('displayName : ' + profile.login)
        let displayName = profile.login
        commit('SET_DISPLAY_NAME', { displayName })
        updateUserProfile(state.profile)
          .then((data) => {
            console.log('UPDATE_USER_PROFILE: ' + JSON.stringify(data))
            let userId = data.data.userId
            commit('SET_USER_ID', { userId })
          })
      })
  },

  FETCH_REPOS: ({ commit, dispatch, state }, { token }) => {
    return fetchRepos(token)
      .then(repos => {
        console.log('FETCH_REPOS then in actions.js')
        commit('SET_REPOS', { repos })
      })
  },

  FETCH_INSTANCES_BY_USER: ({ commit, dispatch, state }, { userId }) => {
    return fetchInstancesByUser(userId)
      .then(instances => {
        console.log('FETCH_INSTANCES_BY_USER then in actions.js')
        console.log(instances)
        commit('SET_INSTANCES', { instances })
      })
  },

  FETCH_ORG_REPOS: ({ commit, dispatch, state }, { org, token }) => {
    return fetchOrgRepos(org, token)
      .then(repos => {
        console.log('FETCH_ORG_REPOS then in actions.js : repos = ' + repos)
        commit('SET_REPOS', { repos })
      })
  },

  FETCH_USER: ({ commit, state }, { id }) => {
    return state.users[id]
      ? Promise.resolve(state.users[id])
      : fetchUser(id).then(user => commit('SET_USER', { id, user }))
  },

  UPDATE_USER_PROFILE: ({ commit, state }, { id }) => {
    return updateUserProfile(state.profile)
      .then((data) => {
        console.log('UPDATE_USER_PROFILE: ' + JSON.stringify(data))
        let userId = data.data.userId
        commit('SET_USER_ID', { userId })
      })
  },

  UPDATE_ACCESS_TOKEN: ({ commit, state }, { token }) => {
    commit('SET_ACCESS_TOKEN', { token })
  },

  ADD_CROP_IMAGE: ({ commit, state }, { cropImg }) => {
    commit('SET_CROP_IMAGE_LIST', { cropImg })
  },

  ADD_PROJECT: ({ commit, state }, { repo }) => {
    return addProject(repo, state.userId)
      .then((data) => {
        console.log(data)
        let projectId = data.data.projectId
        commit('SET_ACTIVE_PROJECT', { projectId })
      })
  },

  ADD_INSTANCE: ({ commit, state }, { projectId }) => {
    return addInstance(projectId)
      .then((data) => {
        console.log(data)
        let instanceId = data.data.instanceId
        commit('SET_ACTIVE_INSTANCE', { instanceId })
      })
  }
}
