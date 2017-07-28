<template>
  <div class="leftmenu">
    <nav class="leftmenu-nav">
      <ul class="nav">
        <li class="nav-item" v-on:click = toggle>
          <router-link :to="'/dashboard'" class="nav-link">
            <i class="fa fa-tachometer" ></i>
            <span>Dashboard</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>

import {LeftMenu} from './mixins/LeftMenu'

export default {
  name: 'leftmenu',
  mixins: [LeftMenu]
}
</script>

<style lang="css" scoped>
  .nav-link {
    cursor:pointer;
    text-align: center;}

  .leftmenu-nav .nav .nav-item i {
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .leftmenu-nav .nav .nav-item span {
    width: 100%;
  }

  nav ul .fa:before {
    font-size: 24px !important;
  }
</style>
