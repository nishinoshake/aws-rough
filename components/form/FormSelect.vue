<template>
  <div class="form-block">
    <label class="form-label" :for="`${serviceKey}-${columnKey}-${index}`">{{ label }}</label>
    <div class="form-select">
      <select
        @change="e => update({ serviceKey, index, columnKey, value: e.target.value })"
        :id="`${serviceKey}-${columnKey}-${index}`"
        :data-test="columnKey"
        :value="value"
      >
        <option v-for="option in options" :key="`select-${option}`" :value="option">{{ option }}</option>
      </select>
      <span class="form-select-value">{{ value || '&nbsp;' }}</span>
    </div>
  </div>
</template>

<script>
import serviceConfig from '@/config/service'
import { getDefaultColumnValue } from '@/lib/service'

export default {
  name: 'FormSelect',
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
    },
    options: {
      type: Array,
      required: true
    }
  },
  watch: {
    options(newOptions, oldOptions) {
      if (JSON.stringify(newOptions) === JSON.stringify(oldOptions)) {
        return
      }

      this.$nextTick(() => {
        if (newOptions.indexOf(this.value) === -1) {
          this.$store.commit('UPDATE', {
            serviceKey: this.serviceKey,
            index: this.index,
            columnKey: this.columnKey,
            value: getDefaultColumnValue(this.serviceKey, this.columnKey, serviceConfig)
          })
        }
      })
    }
  },
  methods: {
    update(params) {
      this.$store.commit('UPDATE', params)
    }
  }
}
</script>
