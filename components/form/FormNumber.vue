<template>
  <div class="form-block">
    <label class="form-label" :for="`${serviceKey}-${columnKey}-${index}`">{{ label }}</label>
    <div class="form-text">
      <input
        type="number"
        :id="`${serviceKey}-${columnKey}-${index}`"
        :data-test="columnKey"
        :value="value"
        min="0"
        class="form-text-input"
        @input="e => update({ serviceKey, index, columnKey, value: e.target.value })"
      />
    </div>
  </div>
</template>

<script>
import { MAX_INPUT } from '@/config/constants'

export default {
  name: 'FormNumber',
  props: {
    serviceKey: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    columnKey: {
      type: String,
      required: true
    },
    value: {
      required: true
    }
  },
  methods: {
    update(params) {
      const limitedValue = params.value < MAX_INPUT ? params.value : ''

      this.$store.commit('UPDATE', { ...params, value: limitedValue })
    }
  }
}
</script>
