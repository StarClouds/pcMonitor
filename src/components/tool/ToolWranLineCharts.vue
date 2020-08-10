<template>
  <div class="ToolWranLineCharts">
    <div class="charts-box">
      <div class="charts-title">
        <span>{{title}}</span>
        <div class="cen-line"></div>
      </div>
    </div>
    <div class="content">
      <charts ref="ToolWranLineCharts"
              :styles="gstyle"
              :domId=domId :options="options"></charts>
    </div>
  </div>
</template>

<script>
import charts from '@/components/Echarts';

export default {
  name: 'ToolWranLineCharts',
  props: ['title', 'dataArr', 'domId'],
  components: { charts },
  data() {
    return {
      gstyle: {
        height: '100%',
      },
      options: {
        backgroundColor: 'rgba(0,219,249,0.05)',
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          x: 'center',
          y: 'bottom',
          data: [],
          textStyle: {
            color: '#bbb',
            fontSize: 14,
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '12%',
          top: '5%',
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [...Array(20).keys()].map(n => n),
          splitLine: {
            show: true,
            lineStyle: {
              type: 'solid',
              color: 'rgba(0,219,249,0.10)',
            },
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(0,219,249,0.10)',
            },
          },
          axisLabel: {
            color: '#bbb',
            fontSize: 16,
            type: 'value',
            formatter: '{value}',
            interval: 0,
            rotate: 45,
          },
        },
        yAxis: [
          {
            show: true,
            type: 'value',
            splitLine: {
              lineStyle: {
                type: 'solid',
                color: 'rgba(0,219,249,0.10)',
              },
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(0,219,249,0.10)',
              },
            },
            axisLabel: {
              color: '#bbb',
              fontSize: 16,
              type: 'value',
              // eslint-disable-next-line consistent-return
              formatter: value => `${value}次`,

            },
          },
        ],
        series: [
          {
            name: '预警值',
            type: 'line',
            itemStyle: {
              normal: {
                color: '#83FF00',
                lineStyle: {
                  width: 4,
                  color: '#83FF00',
                  type: 'dashed',
                },
              },
            },
            data: Array(20).fill(20),
          },
          {
            name: '使用次数',
            type: 'line',
            itemStyle: {
              normal: {
                color: '#32C5FF',
                lineStyle: {
                  width: 4,
                  color: '#32C5FF',
                },
              },
            },
            data: Array(20).fill(10),
          },
        ],
      },
    };
  },
  methods: {
    init() {
      this.options.xAxis.data = this.dataArr.map(n => n.name);
      this.options.series[1].data = this.dataArr.map(n => n.value);
    },
  },
  mounted() {
    this.init();
  },
  watch: {
    dataArr: {
      handler() {
        this.init();
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .ToolWranLineCharts {
    height: calc(100% - 80px);
    .content{
      height: 100%;
    }
  }
</style>
