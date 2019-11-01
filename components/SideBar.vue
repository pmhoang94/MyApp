<template>
  <!-- Main sidebar -->
  <div class="sidebar sidebar-main">
    <div class="sidebar-content">
      <!-- Main navigation -->
      <div class="sidebar-category sidebar-category-visible">
        <div class="category-content no-padding">
          <ul class="navigation navigation-main navigation-accordion">
            <!-- Main -->
            <li class="navigation-header">
              <span>Main</span>
              <i class="icon-menu" title="Main pages"></i>
            </li>
            <!-- <nuxt-link tag="li" to="/"  active-class="active" exact v-if="permission.POSTING_LIST.view || permission.CALENDAR.view || permission.LEAD.view"><a><i class=" icon-stats-bars3"></i> <span class="colorText">Báo cáo</span></a></nuxt-link> -->
            <nuxt-link tag="li" to="/car" active-class="active">
              <a>
                <i class="icon-car"></i>
                <span class="colorText">Xe ký gửi</span>
              </a>
            </nuxt-link>
          </ul>
        </div>
      </div>
      <!-- /main navigation -->
    </div>
  </div>
  <!-- /main sidebar -->
</template>

<script>
import { mapState } from "vuex";
export default {
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState({
      hideMenu: state => state.hideMenu
    })
  },
  created() {},
  methods: {
    toggleSidebar: function() {
      var _this = this;
      _this.$store.dispatch("hideMenu");
    }
  }
};
</script>
