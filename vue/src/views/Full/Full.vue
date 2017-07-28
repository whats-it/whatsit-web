<template>
  <div class="app">
    <AppHeader/>
    <div class="app-body">
      <LeftMenu/>
      <main class="main">
        <!--<breadcrumb :list="list"/>-->
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
      <AppAside/>
    </div>
    <AppFooter/>
  </div>
</template>

<script>
import AppHeader from '../../components/Header.vue'
import LeftMenu from '../../components/LeftMenu'
import AppAside from '../../components/Aside'
import AppFooter from '../../components/Footer'
// import Breadcrumb from '../../components/Breadcrumb'
import {Full} from './mixins/Full'

export default {
  name: 'Full',
  mixins: [Full],
  components: {
    AppHeader,
    LeftMenu,
    AppAside,
    AppFooter// ,
    // Breadcrumb
  },
  computed: {
    name () {
      return this.$route.name
    },

    list () {
      return this.$route.matched
    }
  }
}
</script>
