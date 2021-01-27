Vue.component('intent', {
  template: `
  <div class="intent">
    {{ intent.name }}
    <div
      v-for="(utterance, index) in intent.samples"
    >
      <input type="text" v-model="intent.samples[index]"></input>
    </div>
    <button v-on:click="addUtterance()">Add utterance</button>
  </div>`,
  props: ['intent'],
  data: function() {
    return {
      samples: this.intent.samples
    }
  },
  methods: {
    addUtterance: function() {
      this.samples.push('');
    }
  }
});