Vue.component('slots', {
  template: `
  <div>
    <h3>Slots</h3>
    <div v-for="slot in slots">
      <h4>{{slot.name}}</h4>
      If a user fails to provide {{slot.name}} value, Kitchen plus him to fill that value.
      <div v-if="getElicitationSlot(slot.name)?.prompts?.elicitation">
        Kitchen plus will prompt for the slot in one of the following ways:
        <div v-for="(prompt, promptIndex) in getPromptsElicitation(getElicitationSlot(slot.name).prompts?.elicitation).variations">
          {{prompt.value}}
          <input type="text" v-model="getPromptsElicitation(getElicitationSlot(slot.name).prompts?.elicitation).variations[promptIndex].value"></input>
        </div>
      </div>
      <div v-if="slot?.samples?.length">
        <div v-for="(sample, index) in slot.samples">
          <input type="text" v-model="slot.samples[index]"></input>
        </div>
      </div>
    </div>
  </div>`,
  props: ['slots', 'elicitation-slots', 'prompts'],
  methods: {
    addSample: function() {
      this.samples.push('');
    },
    removeSample: function(index) {
      this.samples.splice(index, 1);
    },
    getElicitationSlot: function(slotName) {
      const elicitationSlot = this.elicitationSlots?.find(( slot ) => {
        return slot.name === slotName;
      });
      return elicitationSlot;
    },
    getPromptsElicitation: function(elicitationId) {
      const elicitation = this.prompts?.find((prompt) => {
        return prompt.id === elicitationId;
      });
      return elicitation;
    }
  }
});