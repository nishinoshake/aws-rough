<template>
  <div class="menu-select">
    <div class="form-select">
      <select
        ref="select"
        @input="e => changeService(e.target.value)"
      >
        <option value="">Menu</option>
        <option
          v-for="service in services"
          :key="service.key"
          :value="service.key"
        >{{ service.name }}</option>
      </select>
    </div>
  </div>
</template>

<script>
import serviceConfig from '@/config/service/mokuji'

export default {
  name: 'LayoutMenuSP',
  data() {
    return {
      services: serviceConfig
    }
  },
  methods: {
    changeService(serviceName) {
      this.$refs.select.value = ''
      this.$router.push(`/${serviceName}/`)
    }
  }
}
</script>
