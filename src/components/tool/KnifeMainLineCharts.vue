<template>
    <div class="KnifeMainLineCharts">
      <div class="charts-box">
        <div class="charts-title">
          <span>实时数据</span>
          <div class="cen-line"></div>
        </div>
      </div>
      <div class="content">
        <charts ref="KnifeMainLineCharts"
                :styles="gstyle"
                domId="KnifeMainLineCharts" :options="options"></charts>
      </div>
    </div>
</template>

<script>
import echarts from 'echarts';
import charts from '@/components/Echarts';

export default {
  name: 'KnifeMainLineCharts',
  components: { charts },
  props: ['toolData1', 'toolData2'],
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
          data: [...Array(10).keys()].map(n => n),
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
            formatter: '{value}min',
            interval: 3,
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
              formatter: value => `${value}kpa`,
            },
          },
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
              formatter: value => `${value}°C`,
            },
          },
        ],
        series: [
          {
            name: '实时数据1(kpa)',
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
            data: [
              42.3,
              52.7,
              62.3,
              22.8,
              93.2,
              43.3,
              22.6,
              42.3,
              52.7,
              62.3,
            ],
          },
          {
            name: '实时数据2(°C)',
            yAxisIndex: 1,
            type: 'line',
            itemStyle: {
              normal: {
                color: '#43bbe7',
                lineStyle: {
                  width: 4,
                  color: '#43bbe7',
                },
              },
            },
            data: [
              42.3,
              25.7,
              35.3,
              99.8,
              9.2,
              12.3,
              33.6,
              56.3,
              47.7,
              89.3,
            ],
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#43bbe7',
              }, {
                offset: 1,
                color: '#143258',
              }]),
            },
          },
        ],
      },

    };
  },
  methods: {
    init() {
      this.options.series[0].data = this.toolData1.map(n => n.yData);
      this.options.series[1].data = this.toolData2.map(n => n.yData);
      this.options.xAxis.data = this.toolData1.map(n => n.xData);
    },
  },
  mounted() {
    this.init();
  },
  watch: {
    toolData1: {
      handler() {
        this.init();
      },
      deep: true,
    },
    toolData2: {
      handler() {
        this.init();
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .KnifeMainLineCharts {
    height: calc(100% - 80px);
    .content{
      height: 100%;
    }
  }
</style>
