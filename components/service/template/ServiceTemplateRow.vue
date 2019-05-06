<template>
  <tr>
    <td
      v-for="(column, columnIndex) in service.table"
      :key="column.key"
      :class="{
        [`mod-${column.size}`]: column.size,
        'has-remove': service.multiple && columnIndex === 0
      }"
      :data-label="labels[columnIndex]"
    >
      <!-- 削除ボタン -->
      <button
        v-if="service.multiple && columnIndex === 0"
        class="button-remove"
        @click="remove({ serviceKey: service.key, index: rowIndex })"
      >
        削除
      </button>

      <ServiceFormNumber
        v-if="column.type === 'number'"
        :service-key="service.key"
        :index="rowIndex"
        :label="labels[columnIndex]"
        :column-key="column.key"
        :value="row[column.key]"
      />

      <ServiceFormSelect
        v-if="column.type === 'select'"
        :service-key="service.key"
        :index="rowIndex"
        :label="labels[columnIndex]"
        :column-key="column.key"
        :value="row[column.key]"
        :options="column.options || column.parseJson($store.state.price, row)"
      />
    </td>
    <td class="mod-price">
      <ServicePartsPrice :price="row.total.jpy" />
    </td>
  </tr>
</template>

<script>
import serviceConfig from '@/config/service'
import ServiceFormNumber from '@/components/service/form/ServiceFormNumber'
import ServiceFormSelect from '@/components/service/form/ServiceFormSelect'
import ServicePartsPrice from '@/components/service/parts/ServicePartsPrice'

export default {
  name: 'ServiceTemplateRow',
  components: { ServiceFormNumber, ServiceFormSelect, ServicePartsPrice },
  props: {
    row: {
      type: Object,
      required: true
    },
    rowIndex: {
      type: Number,
      required: true
    },
    labels: {
      type: Array,
      required: true
    },
    service: {
      type: Object,
      required: true
    }
  },
  computed: {
    error() {
      return this.$store.state.error
    }
  },
  methods: {
    remove(params) {
      this.$store.commit('REMOVE', { ...params, serviceConfig })
    }
  }
}
</script>
