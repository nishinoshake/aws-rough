<template>
  <div :class="['calc', { 'mod-multiple': service.multiple, 'mod-grande': service.grande }]" data-test="service-calc">
    <table :class="['table', { 'mod-multiple': service.multiple, 'mod-grande': service.grande }]">
      <tbody>
        <ServiceRow
          v-for="(row, rowIndex) in table"
          :key="rowIndex"
          :row="row"
          :row-index="rowIndex"
          :service="service"
        />
      </tbody>
    </table>
    <div class="calc-footer" v-if="service.multiple">
      <button :class="`calc-append mod-${service.color}`" @click="append(service.key)">
        <span>追加する</span>
      </button>
    </div>
  </div>
</template>

<script>
import ServiceRow from '@/components/service/ServiceRow'
import serviceConfig from '@/config/service'

export default {
  name: 'ServiceCalc',
  components: { ServiceRow },
  props: {
    service: {
      type: Object,
      required: true
    }
  },
  computed: {
    table() {
      return this.$store.state.tables[this.service.key]
    }
  },
  methods: {
    append(serviceKey) {
      this.$store.dispatch('appendRow', { serviceKey, serviceConfig })
    }
  }
}
</script>
