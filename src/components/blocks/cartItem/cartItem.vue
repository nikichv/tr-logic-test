<template>
  <div class="cart-item">
    <div class="row">
      <div class="col-12 col-sm-8">
        <h2>{{ item.name }}</h2>
      </div>

      <div class="col-4">
        <div class="d-flex align-items-center justify-content-sm-end">
          <button
            type="button"
            class="btn btn-danger"
            @click="decreaseItemAmount(item.id)"
          >
            -
          </button>
          <span class="cart-item__price">{{ item.count }}</span>
          <button
            type="button"
            class="btn btn-success"
            @click="increaseItemAmount(item.id)"
          >
            +
          </button>
        </div>
      </div>

      <div class="col-8 text-right text-sm-left">
        <button
          type="button"
          class="btn btn-danger"
          @click="removeItem(item.id)"
        >
          Remove
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'CartItem',
  props: {
    item: {
      type: Object,
      default() {
        return {
          id: 0,
          name: '',
          count: 0,
        };
      },
    },
  },
  methods: {
    ...mapActions('cart', {
      removeItem: 'removeItem',
      increaseItemAmount: 'increaseItemAmount',
      decreaseItemAmount: 'decreaseItemAmount',
    }),
  },
};
</script>

<style lang="scss" scoped>
.cart-item {
  border: 1px solid #aeaeae;
  border-radius: 10px;

  padding: 10px 15px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
}

.cart-item__price {
  display: block;
  min-width: 30px;

  text-align: center;
}
</style>
