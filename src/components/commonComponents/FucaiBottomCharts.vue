<template>
  <div class="FucaiBottomCharts-wrap">
    <ul class="FucaiBottomCharts">
      <li v-for="(item, index) in chartsArr" :key="item.title">
        <div>
          <div class="btm-title">
            {{item.title}}
            <div class="cen-line"></div>
          </div>
          <charts ref="FucaiBottomCharts"
                  :styles="gstyle(item.type)"
                  :domId="`FucaiBottomCharts${index}`" :options="item.options"></charts>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import charts from '@/components/Echarts';
import guageIcon from '@/assets/images/indexIcon/new/guageIcon.png';
import guageIcon1 from '@/assets/images/indexIcon/new/guageIcon1.png';

export default {
  name: 'FucaiBottomCharts',
  components: { charts },
  props: ['data'],
  data() {
    return {
      optionsType1: {
        series: [
          {
            name: '定值',
            type: 'gauge',
            min: 0,
            max: 100,
            z: 3,
            startAngle: 200,
            endAngle: -70,
            splitNumber: 10,
            radius: '50%',
            axisLine: {
              // 坐标轴线
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: [[1, '#00DBF9']],
                width: 1,
              },
            },
            axisLabel: {
              distance: -30,
              // 坐标轴小标记
              textStyle: {
                // 属性lineStyle控制线条样式
                fontWeight: 'bolder',
                color: '#fff',
              },
            },
            axisTick: {
              // 坐标轴小标记
              length: 10, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: '#00DBF9',
              },
            },
            splitLine: {
              // 分隔线
              length: 10, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle（详见lineStyle）控制线条样式
                width: 3,
                color: '#red',
              },
            },
            pointer: {
              width: 2,
              length: '100%',
            },
            title: {
              show: false,
            },
            detail: {
              offsetCenter: ['-50%', '80%'],
              formatter: '{test|0%}',
              rich: {
                test: {
                  width: 160,
                  height: 85,
                  align: 'center',
                  fontSize: 28,
                  color: '#fff',
                  fontWeight: 'bolder',
                  backgroundColor: {
                    image: guageIcon,
                  },
                },
              },
            },
            data: [
              {
                value: 10,
              },
            ],
          },
          {
            name: '不定值',
            type: 'gauge',
            min: 0,
            max: 1000,
            startAngle: 200,
            endAngle: -70,
            splitNumber: 10,
            radius: '50%',
            axisLine: {
              // 坐标轴线
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: [[1, 'rgba(247,181,0,0.40)']],
                width: 1,
              },
            },
            axisLabel: {
              distance: -30,
              // 坐标轴小标记
              textStyle: {
                // 属性lineStyle控制线条样式
                fontWeight: 'bolder',
                color: '#fff',
              },
            },
            axisTick: {
              // 坐标轴小标记
              length: 10, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: '#00DBF9',
              },
            },
            splitLine: {
              // 分隔线
              length: 10, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle（详见lineStyle）控制线条样式
                width: 3,
                color: '#00DBF9',
              },
            },
            pointer: {
              width: 2,
              length: '100%',
            },
            itemStyle: {
              color: 'yellow',
            },
            title: {
              show: false,
            },
            detail: {
              offsetCenter: [0, 0],
              formatter: '{test|30%}',
              rich: {
                test: {
                  width: 100,
                  height: 100,
                  align: 'center',
                  color: '#fff',
                  fontSize: 22,
                  fontWeight: 'bolder',
                  backgroundColor: {
                    image: guageIcon1,
                  },
                },
              },
            },
            data: [
              {
                value: 30,
              },
            ],
          },
        ],
      },
      optionsType2: {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
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
            color: ['#41d4f8', '#f8e328', '#68d100'],
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
      chartsArr: [],
    };
  },
  methods: {
    gstyle(type) {
      switch (type) {
        case 1: {
          return {
            height: '100%',
          };
        }
        case 2: {
          return {
            height: '90%',
          };
        }
        default: {
          return '';
        }
      }
    },
    init() {
      this.chartsArr = [...this.data];
      this.chartsArr.forEach((item, index) => {
        if (item.type === 1) {
          const obj = JSON.parse(JSON.stringify(this.optionsType1));
          obj.series[0].min = item.data.minValue;
          obj.series[0].max = item.data.maxValue;
          obj.series[1].min = item.data.minValue;
          obj.series[1].max = item.data.maxValue;
          obj.series[0].detail.formatter = `{test|${item.data.value}${item.data.valueUnit}}`;
          obj.series[0].data[0].value = item.data.value;
          obj.series[1].detail.formatter = `{test|${item.data.rValue}${item.data.rValueUnit}}`;
          obj.series[1].data[0].value = item.data.rValue;
          this.chartsArr[index].options = obj;
        } else if (item.type === 2) {
          const obj = JSON.parse(JSON.stringify(this.optionsType2));
          obj.series[0].data = item.data;
          this.chartsArr[index].options = obj;
        }
      });
    },
  },
  mounted() {
    this.init();
  },
  watch: {
    data: {
      handler() {
        console.log('change');
        this.init();
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .FucaiBottomCharts-wrap{
    height: 100%;
    .FucaiBottomCharts{
      height: 100%;
      li{
        height: 100%;
        float: left;
        width: 20%;
        display: flex;
        align-items: center;
        justify-content: center;
        &>div{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>
