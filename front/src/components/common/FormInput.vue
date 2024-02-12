<template>
  <div class="form-item">
    <div class="input-item">
      <input :id="option.id" :type="option.type" class="input" :class="{ hasValid : value.length }" v-model="value" :placeholder="option.placeholder" @input="input">
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
    getVal: String,
  },
  data() {
    return {
      value: this.getVal || '',
    }
  },
  watch: {
    getVal(a,b) {
      console.log('a',a, 'b',b);
    }
  },
  methods: {
    input() {
      this.$emit('val', { value: this.value});
    },
    clear() {
      this.$emit('clear');
    }
  }
}
</script>