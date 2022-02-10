<template>
  <table class="table-spec">
    <thead>
      <tr>
        <th v-for="label in labels" :key="label">{{ label }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, rowIndex) in table" :key="rowIndex">
        <th v-for="(column, columnIndex) in row" :key="columnIndex">{{ column }}</th>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'Spec',
  props: {
    labels: {
      type: Array,
      required: true
    },
    table: {
      type: Array,
      required: true
    }
  }
}
</script>
