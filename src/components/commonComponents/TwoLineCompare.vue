<template>
  <div class="twoLineCompare">
    <div class="charts-box">
      <div class="charts-title">
        <span>{{title}}</span>
        <div class="cen-line"></div>
      </div>
    </div>
    <div class="content">
      <charts ref="twoLineCompare"
              :styles="gstyle"
              domId="twoLineCompare" :options="options"></charts>
    </div>
  </div>
</template>

<script>
import charts from '@/components/Echarts';

export default {
  name: 'twoLineCompare',
  props: ['title', 'dataArr'],
  components: { charts },
  data() {
    return {
      gstyle: {
        height: '100%',
      },
      maxLength: 0,
      options: {
        backgroundColor: 'rgba(0,219,249,0.05)',
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        legend: {
          x: 'center',
          y: 'bottom',
          data: ['按时保养', '延时保养'],
          textStyle: {
            color: '#fff',
            fontSize: 16,
          },
        },
        grid: {
          left: '3%',
          top: '3%',
          right: '4%',
          bottom: '1%',
          containLabel: true,
        },
        xAxis: {
          type: 'value',
          show: false,
          splitLine: {
            show: true,
          },
        },
        yAxis: {
          type: 'category',
          data: ['关键设备', '全部设备'],
          axisLabel: {
            color: '#fff',
            fontSize: 16,
            type: 'value',
          },
        },
        series: [
          {
            type: 'bar',
            label: {
              normal: {
                show: true,
                position: 'right',
                color: '#fff',
                fontSize: 12,
              },
            },
            itemStyle: {
              color: '#41cdf7',
              borderColor: '#41cdf7',
              barBorderRadius: 10,
            },
            name: '按时保养',
            data: [320, 230],
            barCategoryGap: '70%',
          },
          {
            type: 'bar',
            label: {
              normal: {
                show: true,
                position: 'right',
                color: '#fff',
                fontSize: 12,
              },
            },
            itemStyle: {
              color: '#f1ff14',
              borderColor: '#f1ff14',
              barBorderRadius: 10,
            },
            name: '延时保养',
            data: [80, 170],
            barCategoryGap: '70%',
          },
        ],
      },
    };
  },
  methods: {
    init() {
      this.options.series[0].data[0] = this.dataArr[2];
      this.options.series[0].data[1] = this.dataArr[0];
      this.options.series[1].data[0] = this.dataArr[3];
      this.options.series[1].data[1] = this.dataArr[1];
      // this.maxLength = this.dataArr.reduce((a, b) => (b > a ? b : a));
    },
  },
  created() {
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
  .twoLineCompare {
    height: calc(100% - 80px);
    .content{
      height: 100%;
    }
  }
</style>
