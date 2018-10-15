<template>
  <div class="detail-chart">
    <svg class="detail-chart-svg" :viewBox="`0 0 ${radius * 2} ${radius * 2}`">
      <path
        v-for="(pos, i) in arcPositions"
        :d="`M 50 50 L ${pos.start.x} ${pos.start.y} A 50 50 0 0 1 ${pos.end.x} ${pos.end.y}`"
        :fill="(selectedIndex !== null && i !== selectedIndex) ? inactiveColors[i] : colors[i]"
        :key="i"
        @mouseenter="handleMouseEnter(i)"
        @mouseleave="handleMouseLeave(i)"
        @click="handleClick(i)"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'DetailChart',
  props: {
    rates: {
      type: Array,
      required: true
    },
    colors: {
      type: Array,
      required: true
    },
    inactiveColors: {
      type: Array,
      required: true
    },
    selectedIndex: Number,
    mouseEnterHandler: Function,
    mouseLeaveHandler: Function,
    clickHandler: Function
  },
  data() {
    return {
      radius: 50
    }
  },
  computed: {
    arcPositions() {
      let pos = []

      for (let i = 0, l = this.rates.length; i < l; i++) {
        const totalRate = this.rates.slice(0, i + 1).reduce((a, b) => a + b)

        pos.push({
          start: {
            x: i === 0 ? this.radius : pos[i - 1].end.x,
            y: i === 0 ? 0 : pos[i - 1].end.y
          },
          end: {
            x: this.getArcX(totalRate),
            y: this.getArcY(totalRate)
          }
        })
      }

      return pos
    }
  },
  methods: {
    rateToRad(rate) {
      return (270 * rate * Math.PI) / 180
    },
    getArcX(rate) {
      return this.radius * (1 + Math.cos(this.rateToRad(rate)))
    },
    getArcY(rate) {
      return this.radius * (1 + Math.sin(this.rateToRad(rate)))
    },
    handleMouseEnter(index) {
      if (this.mouseEnterHandler) {
        this.mouseEnterHandler(index)
      }
    },
    handleMouseLeave(index) {
      if (this.mouseEnterHandler) {
        this.mouseLeaveHandler(index)
      }
    },
    handleClick(index) {
      if (this.clickHandler) {
        this.clickHandler(index)
      }
    }
  }
}
</script>
