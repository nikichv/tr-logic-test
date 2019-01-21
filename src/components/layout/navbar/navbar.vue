<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div id="nav" class="d-flex justify-content-end align-items-center py-3">
          <router-link
            to="/"
            class="btn-link"
          >
            Catalog
          </router-link>
          <router-link
            to="/cart"
            class="btn btn-info ml-3"
          >
            Cart {{ itemsInCart || '' }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'LayoutNavbar',
  computed: {
    ...mapState('cart', {
      itemsInCart: state => state.items.length,
    }),
  },
};
</script>

<style lang="scss" scoped>

</style>
