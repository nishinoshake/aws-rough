<template>
  <div class="service-calc">
    <table :class="['table', {'mod-multiple': service.multiple }]">
      <thead :class="{[`mod-${service.mod}`]: service.mod}">
        <tr>
          <th
            v-for="column in service.table"
            :key="`header-${column.key}`"
            :class="[{[`mod-${column.mod}`]: column.mod}]"
          >{{ column.title }}</th>
          <th class="mod-price">月額</th>
        </tr>
      </thead>
      <tbody>
        <ServiceTemplateRow
          v-for="(row, rowIndex) in table"
          :key="rowIndex"
          :row="row"
          :row-index="rowIndex"
          :labels="tableLabels"
          :service="service"
        />
      </tbody>
    </table>
    <div class="service-calc-footer" v-if="service.multiple">
      <button
        class="service-calc-append"
        @click="append(service.key)"
      ><span>追加する</span></button>
    </div>
  </div>
</template>

<script>
import ServiceTemplateRow from '@/components/service/template/ServiceTemplateRow'
import serviceConfig from '@/config/service'

export default {
  name: 'ServiceTemplate',
  components: { ServiceTemplateRow },
  props: {
    service: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      table: this.$store.state.tables[this.service.key]
    }
  },
  computed: {
    tableLabels() {
      return this.service.table.map(column => column.title)
    }
  },
  methods: {
    append(serviceKey) {
      this.$store.dispatch('appendRow', { serviceKey, serviceConfig })
    }
  }
}
</script>
