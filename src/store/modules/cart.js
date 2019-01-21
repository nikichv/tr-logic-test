/* eslint-disable no-shadow, no-param-reassign */
import Vue from 'vue';

const state = {
  items: [],
};

const SET_ITEMS = 'SET_ITEMS';
const ADD_ITEM = 'ADD_ITEM';
const INCREASE_AMOUNT = 'INCREASE_AMOUNT';
const REMOVE_ITEM = 'REMOVE_ITEM';
const DECREASE_AMOUNT = 'DECREASE_AMOUNT';
const CLEAR_CART = 'CLEAR_CART';

/**
 * Save user cart in localStorage
 * @param arr
 */
function saveCartInLocalStorage(arr) {
  return window.localStorage.setItem('cart', JSON.stringify(arr));
}

const getters = {
};

const actions = {

  /**
   * Set all items in cart at once
   * @param commit
   * @param state
   * @param arr
   */
  setItems({ commit, state }, arr) {
    commit(SET_ITEMS, arr);

    saveCartInLocalStorage(state.items);
  },

  /**
   * Add one item in cart
   * @param commit
   * @param state
   * @param id
   */
  addItem({ commit, state }, id) {
    commit(ADD_ITEM, id);

    saveCartInLocalStorage(state.items);
  },

  /**
   * Increase item amount in cart or add it if does not exist in cart
   * @param commit
   * @param state
   * @param id
   */
  increaseItemAmount({ commit, state }, id) {
    const index = state.items.findIndex(el => el === id);

    if (index === -1) {
      commit(ADD_ITEM, id);
    } else {
      commit(INCREASE_AMOUNT, index);
    }

    saveCartInLocalStorage(state.items);
  },

  /**
   * Remove all occurrences of item in cart
   * @param commit
   * @param state
   * @param id
   */
  removeItem({ commit, state }, id) {
    commit(REMOVE_ITEM, id);

    saveCartInLocalStorage(state.items);
  },

  /**
   * Decrease amount of existed item in cart
   * @param commit
   * @param state
   * @param id
   */
  decreaseItemAmount({ commit, state }, id) {
    const index = state.items.findIndex(el => el === id);

    if (index > -1) {
      commit(DECREASE_AMOUNT, index);
    }

    saveCartInLocalStorage(state.items);
  },

  /**
   * Set cart empty
   * @param commit
   * @param state
   */
  clearCart({ commit, state }) {
    commit(CLEAR_CART);

    saveCartInLocalStorage(state.items);
  },
};

const mutations = {
  [SET_ITEMS](state, arr) {
    state.items = [...arr];
  },
  [ADD_ITEM](state, id) {
    Vue.set(state.items, state.items.length, id);
  },
  [INCREASE_AMOUNT](state, index) {
    state.items = [
      ...state.items.slice(0, index),
      ...state.items[index],
      ...state.items.slice(index),
    ];
  },
  [REMOVE_ITEM](state, id) {
    state.items = state.items.filter(el => el !== id);
  },
  [DECREASE_AMOUNT](state, index) {
    Vue.delete(state.items, index);
  },
  [CLEAR_CART](state) {
    Vue.set(state, 'items', []);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
