<template>
  <div :class="classObj" class="app-wrapper">
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <div class="fixed-header">
        <navbar />
      </div>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import { Sidebar, Navbar, AppMain } from './components'

export default {
  components: {
    Sidebar,
    Navbar,
    AppMain
  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        showSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";

.app-wrapper {
  @include clearfix;
  @include relative;
}
</style>