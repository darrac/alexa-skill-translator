Vue.component('app-slot', {
  template: `
  <div>
    <h4>{{appSlot.name}}</h4>
    If a user fails to provide {{appSlot.name}} value, Kitchen plus will ask him to fill that value.
    <div class="slot-elicitation-container" v-if="elicitationSlot?.prompts?.elicitation">
      Kitchen plus will prompt for the slot in one of the following ways:
      <div
        v-for="(prompt, promptIndex) in promptsElicitation?.variations"
        class="input-container"
      >
        <input class="input-text" type="text" v-model="promptsElicitation.variations[promptIndex].value"></input>
        <button v-on:click="removeSlotElicitation(promptIndex)">-</button>
      </div>
      <button v-on:click="addSlotElicitation()">+</button>
    </div>
    After Kitchen Plus prompts, user can fill the {{appSlot.name}} in one of the following ways:
    <div v-if="appSlot?.samples?.length">
      <div
        v-for="(sample, index) in appSlot.samples"
        class="input-container"
      >
        <input class="input-text" type="text" v-model="appSlot.samples[index]"></input>
        <button v-on:click="removeSlotSample(promptIndex)">-</button>
      </div>
      <button v-on:click="addSlotSample()">+</button>
    </div>
  </div>`,
  props: ['app-slot', 'elicitation-slot', 'prompts-elicitation'],
  methods: {
    addSlotElicitation: function() {
      this.promptsElicitation.variations.push({
        type: 'PlainText',
        value: ''
      });
    },
    removeSlotElicitation: function(index) {
      this.promptsElicitation.variations.splice(index, 1);
    },
    addSlotSample: function() {
      this.appSlot.push('');
    },
    removeSlotSample: function(index) {
      this.appSlot.samples.splice(index, 1);
    }
  }
});