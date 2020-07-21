<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container"/>
    <div class="main-container">
      <div class="fixed-header">
        <navbar/>
      </div>
    </div>
  </div>
</template>

<script>
import { Sidebar, Navbar } from './components'

export default {
  components: {
    Sidebar,
    Navbar
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/mixin.scss';
@import '~@/styles/variables.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  width: 100%;
  height: 100%;
}
</style>