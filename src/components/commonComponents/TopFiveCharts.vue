<template>
    <div class="TopFiveCharts">
      <div class="charts-box">
        <div class="charts-title">
          <span>{{title}}</span>
          <div class="cen-line"></div>
        </div>
      </div>
      <div class="content">
        <charts ref="TopFiveCharts"
                :styles="gstyle"
                :domId="domId" :options="options"></charts>
      </div>
    </div>
</template>

<script>
import charts from '@/components/Echarts';

export default {
  name: 'TopFiveCharts',
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
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        legend: {
          show: false,
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
            show: false,
          },
        },
        yAxis: {
          type: 'category',
          data: ['大客', '宽体', '支线', '优化', '其他'],
          axisLabel: {
            color: '#fff',
            fontSize: 16,
            type: 'value',
          },
          axisLine: {
            show: false,
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
            data: [320, 298, 135, 98, 76],
            barWidth: 10,
            itemStyle: {
              color: 'rgba(14,212,249,1)',
              borderColor: 'rgba(14,212,249,1)',
              barBorderRadius: 10,
            },
            barCategoryGap: '40%',
          },
        ],
      },
    };
  },
  methods: {
    init() {
      this.options.yAxis.data = this.dataArr.map(n => n.name);
      this.options.series[0].data = this.dataArr.map(n => n.value);
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
  .TopFiveCharts {
    height: calc(100% - 80px);
    .content{
      height: 100%;
    }
  }
</style>
