Vue.component('app-slot', {
  template: `
  <div>
    <h4>{{appSlot.name}}</h4>
    If a user fails to provide {{appSlot.name}} value, Kitchen plus will ask him to fill that value.
    <div v-if="elicitationSlot?.prompts?.elicitation">
      Kitchen plus will prompt for the slot in one of the following ways:
      <div v-for="(prompt, promptIndex) in promptsElicitation?.variations">
        <input type="text" v-model="promptsElicitation.variations[promptIndex].value"></input>
      </div>
    </div>
    After Kitchen Plus prompts, user can fill the {{appSlot.name}} in one of the following ways:
    <div v-if="appSlot?.samples?.length">
      <div v-for="(sample, index) in appSlot.samples">
        <input type="text" v-model="appSlot.samples[index]"></input>
      </div>
    </div>
  </div>`,
  props: ['app-slot', 'elicitation-slot', 'prompts-elicitation'],
  methods: {
    addSample: function() {
      this.samples.push('');
    },
    removeSample: function(index) {
      this.samples.splice(index, 1);
    }
  }
});