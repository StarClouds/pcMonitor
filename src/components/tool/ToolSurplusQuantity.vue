<template>
  <div class="ToolSurplusQuantity">
    <div class="charts-box">
      <div class="charts-title">
        <span>刀具剩余数量预警</span>
        <div class="cen-line"></div>
      </div>
    </div>
    <div class="content">
      <charts ref="chartsForKnife"
              :styles="gstyle"
              domId="chartsForKnife" :options="options"></charts>
    </div>
  </div>
</template>

<script>
import charts from '@/components/Echarts';

export default {
  name: 'ToolSurplusQuantity',
  props: ['title', 'dataArr', 'toolSurPlusData'],
  components: { charts },
  data() {
    return {
      gstyle: {
        height: '120%',
      },
      maxLength: 0,
      options: {
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          x: 'center',
          y: 'bottom',
          data: ['数值', '预警值'],
          textStyle: {
            color: '#fff',
            fontSize: 16,
          },
        },
        xAxis: [
          {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月'],
            axisTick: {
              alignWithLabel: true,
            },
            // axisLabel: {
            //   color: '#fff',
            //   fontSize: 16,
            //   interval: 0,
            //   rotate: 20,
            // },
          },
        ],
        yAxis: [
          {
            type: 'value',
            name: '数值',
            axisLabel: {
              color: '#fff',
              fontSize: 16,
              type: 'value',
              formatter: '{value}',
            },
            splitLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: '数值',
            type: 'bar',
            data: [4, 5, 6, 5, 4, 3, 5, 6, 7, 5],
            itemStyle: {
              color: '#41cdf7',
              borderColor: '#41cdf7',
            },
          },
          {
            name: '预警值',
            type: 'line',
            data: Array(5).fill(10),
            itemStyle: {
              color: 'yellow',
            },
          },
        ],
      },
    };
  },
  methods: {
    init() {
      this.options.xAxis[0].data = this.toolSurPlusData.map(n => n.name);
      this.options.series[0].data = this.toolSurPlusData.map(n => n.value);
    },
  },
  created() {
    this.init();
  },
  watch: {
    toolSurPlusData: {
      handler() {
        this.init();
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .ToolSurplusQuantity {
    height: calc(100% - 80px);
    .content{
      height: 100%;
    }
    .charts-box{
      margin-bottom: -10px;
    }
  }
</style>
