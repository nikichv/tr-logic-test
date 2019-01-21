<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6">
        <template v-for="item in cartItems">
          <cart-item
            :key="item.id"
            :item="item"
          />
        </template>
      </div>
      <div class="col-12 col-md-6 mt-3 mt-md-0">
        <div
          v-if="!cartIsEmpty"
          class="row justify-content-center"
        >
          <div class="col-12">
            <h2 class="text-center">
              Cash total: {{ cashTotal }}$
            </h2>
          </div>
          <div class="col-auto">
            <button
              type="button"
              class="btn btn-danger"
              @click="clearCart"
            >
              Clear cart
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="cartIsEmpty"
      class="row"
    >
      <div class="col-12">
        <h2 class="text-center">Your cart is empty</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import cartItem from '@/components/blocks/cartItem';

export default {
  name: 'CartPage',
  components: {
    cartItem,
  },
  methods: {
    ...mapActions('cart', {
      clearCart: 'clearCart',
    }),
  },
  computed: {
    ...mapState('products', {
      products: state => state,
    }),

    ...mapState('cart', {
      items: state => state.items,
      cartIsEmpty: state => state.items.length === 0,
    }),

    /**
     * Returns products objects in reverse order with their count how much user added them
     * @return Object
     */
    cartItems() {
      return this.items
        .slice()
        .reverse()
        .reduce((acc, el) => {
          const product = this.products.find(p => p.id === el) || null;

          if (!product) {
            return acc;
          }

          if (typeof acc[product.name] === 'undefined') {
            acc[product.name] = { count: 1, ...product };
          } else {
            acc[product.name].count += 1;
          }
          return acc;
        }, {});
    },

    /**
     * Returns total cost of all items in cart
     * @return Number
     */
    cashTotal() {
      return this.items.reduce((acc, el) => {
        const product = this.products.find(p => p.id === el) || null;

        if (product) {
          acc += product.price; // eslint-disable-line no-param-reassign
        }

        return acc;
      }, 0);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
