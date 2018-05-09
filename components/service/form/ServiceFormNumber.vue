<template>
  <div class="form-text">
    <input
      type="number"
      :value="value"
      min="0"
      class="form-text-input"
      @input="e => update({ serviceKey, index, columnKey, value: e.target.value })"
    />
  </div>
</template>

<script>
import store from '@/store'
import { MAX_INPUT } from '@/store/constants'

export default {
  name: 'ServiceFormNumber',
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
    }
  },
  methods: {
    update(params) {
      const limitedValue = params.value < MAX_INPUT ? params.value : ''

      store.update({ ...params, value: limitedValue })
    }
  }
}
</script>
