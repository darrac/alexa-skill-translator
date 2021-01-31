Vue.component('intent', {
  template: `
  <div class="intent">
    <h2>{{ intent.name }}</h2>
    User can invoke this Intent by saying:
    <div
      v-for="(utterance, index) in intent.samples"
    >
      <input type="text" v-model="intent.samples[index]"></input>
      <button v-on:click="removeSample(index)">-</button>
    </div>
    <button v-on:click="addSample()">Add sample</button>

    <div v-if="intent?.slots?.length">
      <slots
        v-bind:slots="intent?.slots"
        v-bind:elicitation-slots="elicitationIntent?.slots"
        v-bind:prompts="prompts"
      ></slots>
    </div>
  </div>`,
  props: ['intent', 'elicitation-intent', 'prompts'],
  data: function() {
    return {
      samples: this.intent.samples
    }
  },
  methods: {
    addSample: function() {
      this.samples.push('');
    },
    removeSample: function(index) {
      this.samples.splice(index, 1);
    }
  }
});