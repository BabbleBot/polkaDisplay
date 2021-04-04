import Vue from 'vue';

// const files = require.context('./components', false, /\.vue$/)
// const modules = {}
// require.context('./components', false, /\.vue$/).keys().forEach((key) => {
//      modules[key.replace(/(\.\/|\.vue)/g, '')] = files(key)
// })

import polkamonCard from './components/polkamonCard.vue';
Vue.component('polkamonCard', polkamonCard);

var app = new Vue({
  el: '#app',
});


