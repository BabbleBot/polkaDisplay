import Vue from '@vue';

import 'normalize.css';
import '@css/style.scss';

// Dynamically load every components (.vue files) in ./components directory
const files = require.context('@js/components', false, /\.vue$/)
files.keys().forEach((key) => { Vue.component(key.match(/(\w+)(\.vue)/)[1], files(key).default); })

var app = new Vue({
  el: '#app',
});


