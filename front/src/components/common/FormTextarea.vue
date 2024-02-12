<template>
  <div class="form-item">
    <div class="input-item">
      
      <textarea class="textarea" ref="textarea"
        :class="{ hasValid : value.length }"
        :id="option.id"
        :placeholder="option.placeholder"
        v-model="FormTextareaValue"
        @input="input"></textarea>
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
      FormTextareaValue: this.value,
    }
  },
  updated() {
    this.FormTextareaValue = this.value;
  },
  methods: {
    input() {
      this.$emit('FormTextareaValue', { value: this.FormTextareaValue });
    },
    clear() {
      this.FormTextareaValue = '';
      this.$refs.textarea.focus();
      this.input();
    }
  }
}
</script>