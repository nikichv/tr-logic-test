<template>
  <div class="container">
    <div class="row">
      <template v-for="item in products">
        <div
          class="col-12 col-sm-4 col-xl-3 mb-2"
          :key="item.id"
        >
          <product-card
            :product="item"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import productCard from '@/components/blocks/productCard';

export default {
  name: 'CatalogPage',
  components: {
    productCard,
  },
  computed: {
    ...mapState('products', {
      products: state => state,
    }),
  },
};
</script>

<style lang="scss" scoped>

</style>
