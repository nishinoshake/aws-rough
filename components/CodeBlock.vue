<template>
  <div class="code-block">
    <pre v-highlightjs>
      <code class="javascript">{{ formattedCode }}</code>
    </pre>
  </div>
</template>

<script>
import * as code from '~/lib/calc/code'

export default {
  props: {
    serviceName: {
      type: String,
      required: true
    }
  },
  computed: {
    formattedCode() {
      return code[this.serviceName].replace(/^\n+/, '').replace(/\n+$/, '')
    }
  }
}
</script>
