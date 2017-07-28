<template>
  <navbar>
    <p>
    </p>
    <button class="navbar-toggler mobile-leftmenu-toggler hidden-lg-up" type="button" @click="mobileLeftMenuToggle">&#9776;</button>
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler aside-menu-toggler hidden-lg-up" type="button" @click="mobileAsideToggle">&#9776;</button>
    <ul class="nav navbar-nav hidden-md-down">
      <li class="nav-item">
        <a class="nav-link navbar-toggler leftmenu-toggler" href="#" @click="leftmenuToggle">&#9776;</a>
      </li>
    </ul>
    <ul class="nav navbar-nav ml-auto">
      <dropdown size="nav" class="nav-item">
        <span id="profile-area" slot="button">
          <img v-bind:src="profileUrl" class="img-avatar" alt="">
          <span class="d-md-down-none">{{ $store.state.displayName }}</span>
        </span>
        <div slot="dropdown-menu"class="dropdown-menu dropdown-menu-right">

          <!--<div class="dropdown-header text-center"><strong>Account</strong></div>-->

          <!--<a class="dropdown-item" href="#"><i class="fa fa-bell-o"></i> Updates<span class="badge badge-info">42</span></a>-->
          <!--<a class="dropdown-item" href="#"><i class="fa fa-envelope-o"></i> Messages<span class="badge badge-success">42</span></a>-->
          <!--<a class="dropdown-item" href="#"><i class="fa fa-tasks"></i> Tasks<span class="badge badge-danger">42</span></a>-->
          <!--<a class="dropdown-item" href="#"><i class="fa fa-comments"></i> Comments<span class="badge badge-warning">42</span></a>-->

          <div class="dropdown-header text-center"><strong>Settings</strong></div>

          <!--<a class="dropdown-item" href="#"><i class="fa fa-user"></i> Profile</a>-->
          <!--<a class="dropdown-item" href="#"><i class="fa fa-wrench"></i> Settings</a>-->
          <!--<a class="dropdown-item" href="#"><i class="fa fa-usd"></i> Payments<span class="badge badge-default">42</span></a>-->
          <!--<a class="dropdown-item" href="#"><i class="fa fa-file"></i> Projects<span class="badge badge-primary">42</span></a>-->
          <!--<div class="divider"></div>-->
          <!--<a class="dropdown-item" href="#"><i class="fa fa-shield"></i> Lock Account</a>-->
          <a class="dropdown-item" href="#"><i class="fa fa-lock"></i> Logout</a>
        </div>
      </dropdown>
      <li class="nav-item d-md-down-none">
        <a class="nav-link navbar-toggler aside-menu-toggler" href="#" @click="asideToggle">&#9776;</a>
      </li>
    </ul>
  </navbar>
</template>
<script>

import navbar from './Navbar'
import { dropdown } from 'vue-strap'
import { Header } from './mixins/Header'

export default {
  name: 'header',
  mixins: [Header],

  data: function () {
    return {
      profileUrl: '/static/img/avatars/default_avatar.png'
    }
  },

  components: {
    navbar,
    dropdown
  },

  methods: {
    click () {
      // do nothing..
    },
    leftmenuToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('leftmenu-hidden')
    },
    mobileLeftMenuToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('leftmenu-mobile-show')
    },
    asideToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('aside-menu-hidden')
    },
    mobileAsideToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('aside-mobile-show')
    }
  }
}

</script>

<style lang="css">

.dropdown-toggle::after {
  /*display: none !important;*/
}
</style>
