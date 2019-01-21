/**
 * In real world application we will fetch product info separately of each one
 * @type {*[]}
 */
const state = ([
  {
    id: '0',
    name: 'iPhone XS Max',
    image: 'https://www.apple.com/v/iphone/compare/l/images/overview/compare_iphoneXSmax_spacegray_large.jpg',
    price: 1099,
  },
  {
    id: '1',
    name: 'iPhone XR',
    image: 'https://www.apple.com/v/iphone/compare/l/images/overview/compare_iphoneXR_blue_large.jpg',
    price: 749,
  },
  {
    id: '2',
    name: 'iPhone 8',
    image: 'https://www.apple.com/v/iphone/compare/l/images/overview/compare_iphone8_silver_large.jpg',
    price: 599,
  },
  {
    id: '3',
    name: 'iPhone 7',
    image: 'https://www.apple.com/v/iphone/compare/l/images/overview/compare_iphone7_black_large.jpg',
    price: 449,
  },
]);

const getters = {
};

const actions = {
};

const mutations = {
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
