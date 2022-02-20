<template>
  <ul class="list">
    <li class="list-item">
      <ExternalLink :href="`${gitHubSource}/lib/calc/${sourceServiceName}.js`">
        ソース
      </ExternalLink>
    </li>
    <li class="list-item">
      <ExternalLink :href="`${gitHubSource}/test/unit/lib/calc/${sourceServiceName}.spec.js`">
        ユニットテスト
      </ExternalLink>
    </li>
    <li class="list-item">
      <ExternalLink :href="`${gitHubSource}/test/e2e/config/${sourceServiceName}.js`">
        E2Eテスト
      </ExternalLink>
    </li>
  </ul>
</template>

<script>
import ExternalLink from '@/components/ExternalLink'
import { GITHUB_SOURCE } from '@/config/constants'

export default {
  name: 'ServiceSourceLink',
  components: {
    ExternalLink
  },
  props: {
    serviceName: {
      type: String,
      required: true
    }
  },
  computed: {
    sourceServiceName() {
      if (this.serviceName === 'elb') {
        return 'alb'
      } else if (this.serviceName === 'vpc') {
        return 'natgw'
      }

      return this.serviceName
    },
    gitHubSource() {
      return GITHUB_SOURCE
    }
  }
}
</script>
