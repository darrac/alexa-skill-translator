Vue.component('slots', {
  template: `
  <div>
    <h3>Slots</h3>
    <div v-for="slot in slots">
      <app-slot
        v-bind:app-slot="slot"
        v-bind:elicitation-slot="getElicitationSlot(slot.name)"
        v-bind:prompts-elicitation="getPromptsElicitation(getElicitationSlot(slot.name)?.prompts?.elicitation)"
        v-bind:types="types"
      ></app-slot>
    </div>
  </div>`,
  props: ['slots', 'elicitation-slots', 'prompts', 'types'],
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