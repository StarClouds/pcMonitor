<template>
  <div :id="domId" :style="styles"></div>
</template>

<script>
import echarts from 'echarts';

export default {
  data() {
    return {
      chartsDom: null,
    };
  },
  mounted() {
    // eslint-disable-next-line no-unused-expressions
    setTimeout(() => {
      this.initCharts();
    }, 500);
  },
  props: {
    styles: {
      type: Object,
      default: () => ({
        width: '100%',
        height: '500px',
      }),
    },
    domId: {
      type: String,
      default: 'charts-box',
    },
    options: {
      type: Object,
      default: () => null,
    },
  },
  watch: {
    options: {
      handler(newVal) {
        if (this.chartsDom) {
          this.chartsDom.setOption(newVal);
        }
      },
      deep: true,
    },
  },
  methods: {
    // 初始化echarts
    initCharts() {
      this.chartsDom = echarts.init(document.getElementById(this.domId));
      this.chartsDom.setOption(this.options);
    },
    reSetCharts() {
      if (this.chartsDom) {
        this.chartsDom.setOption(this.options);
      }
    },
  },
};
</script>
