<template>
  <div class="form-select">
    <select
      @input="e => update({ serviceKey, index, columnKey, value: e.target.value })"
      :value="value"
    >
      <option
        v-for="option in options"
        :key="`select-${option}`"
        :value="option"
      >{{ option }}</option>
    </select>
  </div>
</template>

<script>
import store from '@/store'

export default {
  name: 'ServiceFormSelect',
  props: {
    serviceKey: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    columnKey: {
      type: String,
      required: true
    },
    value: {
      required: true
    },
    options: {
      type: Array,
      required: true
    }
  },
  methods: {
    update(params) {
      store.update(params)
    }
  }
}
</script>
