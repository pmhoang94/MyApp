<template>
  <div>
    <!-- Main navbar -->
    <nav-bar />
    <!-- /main navbar -->
    <!-- Page container -->
    <div class="page-container" :style="`min-height:${windowHeight}px;`">
      <!-- Page content -->
      <div :class="`page-content ${hideMenu ? 'sidebar-main' : ''}`">
        <!-- Main sidebar -->
        <side-bar />
        <!-- /main sidebar -->
        <!-- Page content -->
      </div>
    </div>
    <!-- Page container -->
    <nuxt />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import NavBar from "~/components/NavBar.vue";
import SideBar from "~/components/SideBar.vue";
export default {
  components: {
    NavBar,
    SideBar
  },
  data() {
    return {
      windowHeight: 800
    };
  },
  computed: {
    ...mapGetters({}),
    ...mapState({
      hideMenu: state => state.hideMenu
    })
  },
  async created() {
    var _this = this;
    if (process.browser) {
      _this.windowHeight = window.innerHeight - 48;
    }
  }
};
</script>
