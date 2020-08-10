<template>
    <div class="PieNormalCharts">
      <div class="charts-box">
        <div class="charts-title">
          <span>{{title}}</span>
          <div class="cen-line"></div>
        </div>
      </div>
      <div class="content">
        <charts ref="pieChartsForKnife"
                :styles="gstyle"
                :domId="pieChartsForKnifeId" :options="options"></charts>
      </div>
    </div>
</template>

<script>
import charts from '@/components/Echarts';

export default {
  name: 'PieNormalCharts',
  props: ['title', 'data', 'type'],
  components: { charts },
  data() {
    return {
      pieChartsForKnifeId: 'suijishu',
      gstyle: {
        height: '100%',
      },
      options: {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          // orient: 'vertical',
          // top: 'middle',
          bottom: 0,
          left: 'center',
          data: ['defual1', 'defual2', 'defual3'],
          textStyle: {
            color: '#fff',
            fontSize: 16,
          },
        },
        series: [
          {
            type: 'pie',
            radius: '65%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            data: [
              { value: 1, name: 'defual1' },
              { value: 1, name: 'defual2' },
              { value: 1, name: 'defual3' },
            ],
            label: {
              fontSize: 16,
              color: '#fff',
            },
            color: ['#41d4f8', '#f8e328', '#68d100', '#2dad81'],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      },
    };
  },
  methods: {
    init() {
      if (this.type) {
        this.options.legend.left = 10;
        this.options.legend.orient = 'vertical';
      }
      this.pieChartsForKnifeId = `domid_${Math.random() * 10}${new Date().getTime()}`;
      this.options.legend.data = this.data.map(n => n.name);
      this.options.series[0].data = this.data;
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
  .PieNormalCharts {
    height: calc(100% - 80px);
    .content{
      height: 100%;
    }
  }
</style>
