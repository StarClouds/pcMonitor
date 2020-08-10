<template>
  <div class="OneLineCharts">
    <div class="charts-box">
      <div class="charts-title">
        <span>{{title}}</span>
        <div class="cen-line"></div>
      </div>
    </div>
    <div class="content">
      <charts ref="OneLineCharts"
              :styles="gstyle"
              :domId="OneLineChartsId" :options="options"></charts>
    </div>
  </div>
</template>

<script>
import charts from '@/components/Echarts';

export default {
  name: 'OneLineCharts',
  components: { charts },
  props: ['data', 'title', 'type'],
  data() {
    return {
      OneLineChartsId: 'suijishu',
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
          data: [...Array(10)
            .keys()].map(n => n),
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
              formatter: value => `${value}`,
            },
          },
        ],
        series: [
          {
            name: '',
            type: 'line',
            itemStyle: {
              normal: {
                color: '#83FF00',
                lineStyle: {
                  width: 4,
                  color: '#83FF00',
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
          },
        ],
      },
    };
  },
  methods: {
    init() {
      if (this.type) {
        this.options.yAxis[0].min = 'dataMin';
        this.options.yAxis[0].max = 'dataMax';
      }
      this.OneLineChartsId = `domid_${Math.random() * 10}${new Date().getTime()}`;
      this.options.xAxis.data = this.data.map(n => n.xData);
      this.options.series[0].data = this.data.map(n => n.yData);
      this.options.series[0].name = this.title;
    },
  },
  mounted() {
    this.init();
  },
  watch: {
    data: {
      handler() {
        this.init();
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .OneLineCharts {
    height: calc(100% - 80px);

    .content {
      height: 100%;
    }
  }
</style>
