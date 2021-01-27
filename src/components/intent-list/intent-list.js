Vue.component('intent-list', {
  template: `<div>
    <intent v-for="intent in intents" v-bind:key="intent.name" v-bind:intent="intent"></intent>
  </div>`,
  props: ['intents']
});