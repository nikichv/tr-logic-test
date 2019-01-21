<template>
  <div id="app">
    <navbar/>

    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import navbar from '@/components/layout/navbar';

export default {
  name: 'AppRoot',
  components: {
    navbar,
  },
  methods: {
    ...mapActions('cart', {
      setItems: 'setItems',
    }),
  },
  created() {
    /**
     * Retrieve user cart saved in last visit
     * @type {string | string}
     */
    const items = window.localStorage.getItem('cart') || '[]';

    /**
     * Add retrieved items in store
     */
    this.setItems(JSON.parse(items));
  },
};
</script>

<style lang="scss">
@import "assets/styles/main";
</style>
