<template>
  <div class="app-wrapper">
    <sidebar></sidebar>
  </div>
</template>

<script>
import { Sidebar } from './components'

export default {
  components: {
    Sidebar
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