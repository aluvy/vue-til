<template>
  <div class="form-item">
    <div class="input-item">
      <input class="input" ref="input"
        :class="{ hasValid : value.length }"  
        :id="option.id"
        :type="option.type"
        :placeholder="option.placeholder"
        v-model="FormInputValue"
        @input="input">
      <button type="button" class="btn-clear" v-if="value.length" @click="clear">
        <ion-icon name="close-circle-sharp"></ion-icon>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    option: Object,
    value: String,
  },
  data() {
    return {
      FormInputValue: '',
    }
  },
  updated() {
    this.FormInputValue = this.value;
  },
  methods: {
    input() {
      this.$emit('FormInputValue', { value: this.FormInputValue });
    },
    clear() {
      this.FormInputValue = '';
      this.$refs.input.focus();
      this.input();
    }
  }
}
</script>