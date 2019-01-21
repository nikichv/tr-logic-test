<template>
  <div class="card h-100">
    <div class="p-3">
      <img
        :src="product.image"
        class="card-img-top img-fluid"
        alt="..."
      >
    </div>
    <div class="card-body justify-content-end d-flex flex-column">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text">
        {{ product.price }}$
      </p>
      <button
        class="btn btn-primary"
        type="button"
        @click="addToCart(product.id)"
      >
        Add to cart
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      default() {
        return {
          name: '',
          image: '',
          price: '',
        };
      },
    },
  },
  methods: {
    ...mapActions('cart', {
      addToCart: 'addItem',
    }),
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_settings.scss";
@import '~bootstrap/scss/card';

.card-img-top {
  @include media-breakpoint-down(sm) {
    display: block;

    max-height: 250px;
    width: auto;

    margin: 0 auto;
  }
}
</style>
