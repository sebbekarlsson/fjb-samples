const Vue = require('vue/dist/vue.js');
import { Card } from './components/card.ts';

var app = new Vue({
  el: '#root',
  template: `
    <card/>
  `,
});
