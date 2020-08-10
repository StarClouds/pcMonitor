<template>
    <section class="common-wrap toolsWrap">
      <!--<navTitle />-->
      <div class="common-wrap-top">
        <div class="common-wrap-top-left">
          <ul>
            <li>
              <NumberShow title="CPU温度" :num="cpuWendu" txt="℃"></NumberShow>
            </li>
            <li>
              <!--<TwoLineCompare title="近7日刀具使用米数" :dataArr="knifeNum"></TwoLineCompare>-->
              <ToolSurplusQuantity :toolSurPlusData="toolSurPlusData"></ToolSurplusQuantity>
            </li>
            <li>
              <ThreeColTable title="定检预警" :dataArr="dingjianData"></ThreeColTable>
            </li>
          </ul>
        </div>
        <div class="common-wrap-top-middle">
          <div class="common-wrap-top-middle-top">
            <KnifeMainLineCharts :toolData1="toolData1" :toolData2="toolData2"></KnifeMainLineCharts>
          </div>
          <div class="common-wrap-top-middle-bottom">
            <!--<KnifeMainTable :tableData="tableData"></KnifeMainTable>-->
          </div>
        </div>
        <div class="common-wrap-top-right">
          <ul>
            <li>
              <PieNormalCharts :type="true" title="量具状态分布" :data="pieData"></PieNormalCharts>
            </li>
            <li>
              <ToolWranLineCharts title="真空嘴使用次数预警" domId="toolWran1" :dataArr="warnData1"></ToolWranLineCharts>
            </li>
            <li>
              <ToolWranLineCharts title="热电偶使用次数预警" domId="toolWran2" :dataArr="warnData2"></ToolWranLineCharts>
            </li>
          </ul>
        </div>
      </div>
      <div class="common-wrap-bottom">
        <FucaiBottomCharts :data="bottomData"></FucaiBottomCharts>
      </div>
    </section>
</template>

<script>
import { toolSurPlusData, toolData1, toolData2 } from '../components/tool/data/mainLineCharts';
import NumberShow from '../components/commonComponents/NumberShow';
import ThreeColTable from '../components/commonComponents/ThreeColTable';
import PieNormalCharts from '../components/commonComponents/PieNormalCharts';
import FucaiBottomCharts from '../components/commonComponents/FucaiBottomCharts';
import KnifeMainLineCharts from '../components/tool/KnifeMainLineCharts';
import KnifeMainTable from '../components/tool/KnifeMainTable';
import ToolSurplusQuantity from '../components/tool/ToolSurplusQuantity';
import ToolWranLineCharts from '../components/tool/ToolWranLineCharts';
import { warnData1, warnData2 } from '../components/tool/data/rightLineData';
import tableData from '../components/tool/data/table';


export default {
  components: {
    NumberShow,
    ThreeColTable,
    PieNormalCharts,
    KnifeMainLineCharts,
    KnifeMainTable,
    ToolSurplusQuantity,
    ToolWranLineCharts,
    FucaiBottomCharts,
  },
  data() {
    return {
      toolData1,
      toolData2,
      toolSurPlusData,
      warnData1,
      warnData2,
      tableData,
      cpuWendu: 36,
      knifeNum: [230, 170, 320, 80],
      dingjianData: [
        {
          name: '量具1232000将于4月2日定检',
        },
        {
          name: '刀具1232002将于4月2日定检',
        },
        {
          name: '工具1232004将于4月2日定检',
        },
        {
          name: '刀具1232005将于4月2日定检',
        },
        {
          name: '工具1232004将于4月2日定检',
        },
        {
          name: '刀具1232005将于4月2日定检',
        },
        {
          name: '工具1232004将于4月2日定检',
        },
        {
          name: '刀具1232005将于4月2日定检',
        },
        {
          name: '工具1232004将于4月2日定检',
        },
        {
          name: '刀具1232005将于4月2日定检',
        },
      ],
      pieData: [
        {
          name: '正常使用',
          value: 289,
        },
        {
          name: '定检预警',
          value: 32,
        },
        {
          name: '定检中',
          value: 19,
        },
      ],
      bottomData: [
        {
          type: 1,
          title: 'CPU风扇',
          data: {
            value: 2042,
            rValue: '',
            valueUnit: '',
            rValueUnit: '',
            maxValue: 2200,
            minValue: 0,
          },
        },
        {
          type: 1,
          title: 'GPU风扇',
          data: {
            value: 338,
            rValue: '',
            valueUnit: '',
            rValueUnit: '',
            maxValue: 2200,
            minValue: 0,
          },
        },
        {
          type: 1,
          title: 'PCH风扇',
          data: {
            value: 1031,
            rValue: '',
            valueUnit: '',
            rValueUnit: '',
            maxValue: 2200,
            minValue: 0,
          },
        },
        {
          type: 1,
          title: 'PUMP风扇',
          data: {
            value: 1,
            rValue: '',
            valueUnit: '',
            rValueUnit: '',
            maxValue: 2200,
            minValue: 0,
          },
        },
        {
          type: 1,
          title: 'CH2风扇',
          data: {
            value: 24.5,
            rValue: '',
            valueUnit: '',
            rValueUnit: '',
            maxValue: 2200,
            minValue: 0,
          },
        },
      ],
    };
  },
  mounted() {
    this.initData();
    this.funList.push('initData');
  },
  methods: {
    initData() {
      this.newToolRemindWarningInit();
      this.newToolSevenDataInit();
      this.newToolDustDataInit();
      this.newToolTemDataInit();
      this.newToolListDataInit();
      this.newToolRealtimeDataInit();
      this.newToolPieDataInit();
      this.newToolThermocoupleDataInit();
      this.newToolWarnInfoDataInit();
      this.newToolToolTotalDataInit();
      this.newToolStockTotalDataInit();
      this.newToolLiangTotalDataInit();
      this.newToolMouthWarnDataInit();
    },
    newToolMouthWarnDataInit() {
      window.vaApi.newToolMouthWarnData(null, {
        'Content-MD5': 'JDEkUy5sM3FyUDkkTGVLM25vUW1xckZwazlQVnlHU0w2MQ==',
        'X-AURORA-APPKEY': 'c6c1bdc0ec4a4afab044f5e62f40951e',
        'X-AURORA-SIGN': 'MDVhZjcwMDFkZGYzYzk1ZDMwMzZlYjZjMjhlZjZiZGUxNjliYWZiYjc0ZDJmMTc1MzUzNTI4NDQwYzU4OTU5Yg==',
        'X-AURORA-TIMESTAMP': '1590650133462',
      }).then((res) => {
        if (res.data.success) {
          this.warnData1 = res.data.content.values.map(n => ({ value: n[2], name: n[1].substr(4) }));
        }
      });
    },
    newToolLiangTotalDataInit() {
      window.vaApi.newToolLiangTotalData(null, {
        'Content-MD5': 'JDEkZDdFcHQyNE4kSmhNbllhUzBPRUJDVWJlL05Ud0RTMQ==',
        'X-AURORA-APPKEY': 'd2bd6b33e4484192aedf46975c09c251',
        'X-AURORA-SIGN': 'NTk1MWY5MWU3NGQwNzNkMTdiNzM3MGFkMTJmNGI4YTkxNzllZWRkMDU4MWMzYmNiYWI4MzdkYjg5NzU2OTM2Zg==',
        'X-AURORA-TIMESTAMP': '1590649358057',
      }).then((res) => {
        if (res.data.success) {
          this.bottomData[1].data.value = res.data.content.values[0][2];
          this.bottomData[1].data.rValue = res.data.content.values[1][2];
        }
      });
    },
    newToolStockTotalDataInit() {
      window.vaApi.newToolStockTotalData(null, {
        'Content-MD5': 'JDEkSVpMSEpuSFkkUlJoaWNOcFFORUg4WFlXNXUzby94MQ==',
        'X-AURORA-APPKEY': 'da67e8f5829c403bba4eb5d92d014125',
        'X-AURORA-SIGN': 'ZjkyNjA1YTQxOTMxMTIxNmI5NmQ5MzM5ZmE5NTJhZTc3OTk3MjViYzlkNjk2ZGIzMGUyMDFhMjNiMDQyOGJmOA==',
        'X-AURORA-TIMESTAMP': '1590649696596',
      }).then((res) => {
        if (res.data.success) {
          this.bottomData[0].data.value = res.data.content.values[0][2];
          this.bottomData[0].data.rValue = res.data.content.values[1][2];
        }
      });
    },
    newToolToolTotalDataInit() {
      window.vaApi.newToolToolTotalData(null, {
        'Content-MD5': 'JDEkcFpULjBNQ1gkOVlWdGxQWDJIUUtYUXZwZ0ZRSnZrLw==',
        'X-AURORA-APPKEY': '0e081923b69848918685a412d75556ed',
        'X-AURORA-SIGN': 'NmY3ZTc3ODI5NWRhZDJkZmQwYmM0ZWQxMTA1NDQzZTU0OTYwN2VjMWFkY2NmNGJjN2NiM2RmNTU5NzQ2NTEwYw==',
        'X-AURORA-TIMESTAMP': '1590648926002',
      }).then((res) => {
        if (res.data.success) {
          this.bottomData[2].data.value = res.data.content.values[0][2];
          this.bottomData[2].data.rValue = res.data.content.values[1][2];
        }
      });
    },
    newToolWarnInfoDataInit() {
      window.vaApi.newToolWarnInfoData(null, {
        'Content-MD5': 'JDEkRnpYU3VhMWkkNkI5U3pzM0JWUmlUekR4cGp5MGdJLw==',
        'X-AURORA-APPKEY': '44903e65b27c445bbc44ffddef22187b',
        'X-AURORA-SIGN': 'YzRhZDdiZGI1OTYyMzkxODUxNjNkZjNjNGQwYjY3N2UyYjYwNDc0OTE3ZjViOTVkMTFmNjI1NjM3MDViNmQ4Ng==',
        'X-AURORA-TIMESTAMP': '1590650578826',
      }).then((res) => {
        if (res.data.success) {
          const arr = res.data.content.values.map(n => ({ name: n[1] }));
          this.dingjianData = [...arr, ...arr, ...arr]; // 防止数据过少无法滚动
        }
      });
    },
    newToolThermocoupleDataInit() {
      window.vaApi.newToolThermocoupleData(null, {
        'Content-MD5': 'JDEkV0ZDblF0SlIkbkJtNFo3OTVJS1BPSlZZd2ZjaXc1Lg==',
        'X-AURORA-APPKEY': '73bfac2c62e445fc9f1813bd0fc985ae',
        'X-AURORA-SIGN': 'NGYwZWM5Y2JiZjFmMTk3MWE5OTQ0YTg0MWM4ZmYzZTI4YzY0OGNmOTUwMjQ2YTc0MjlkMmViMTU2ZmZiZDU3NQ==',
        'X-AURORA-TIMESTAMP': '1590647087025',
      }).then((res) => {
        if (res.data.success) {
          this.warnData2 = res.data.content.values.map(n => ({ value: n[2], name: n[1] }));
        }
      });
    },
    newToolPieDataInit() {
      window.vaApi.newToolPieData(null, {
        'Content-MD5': 'JDEkSlNOZWhDTHEkMjBHNnFMU0tLaDZpQUt6U2RwaG9kMQ==',
        'X-AURORA-APPKEY': '8fda4f56720c4ade820caf41f46d6c50',
        'X-AURORA-SIGN': 'Y2VmNGExODQ2M2U2Y2Y3NmNkZWY5OWYzZTk5NTA4YjNiZjI4ZjY4Mzc0ODNkN2M3YTI3YzQ3NzBlMWEyMmM3Zg==',
        'X-AURORA-TIMESTAMP': '1590646752361',
      }).then((res) => {
        if (res.data.success) {
          this.pieData = res.data.content.values.map(n => ({ value: n[2], name: n[1] }));
        }
      });
    },
    newToolRealtimeDataInit() {
      window.vaApi.newToolRealtimeData1(null, {
        'Content-MD5': 'JDEkWEFvb2ZwMFUkZ1RjVlIvekVIUGg4VktNWnpiSldyMQ==',
        'X-AURORA-APPKEY': 'c0e94dc4651b47bd92a7770e1bf273f2',
        'X-AURORA-SIGN': 'NTA2YzI0ODdhODBjNjgyMWEyMzE5YTZiOTcxMTdjNWMzMzI2YjdlZDA3ZDk4MjQxYzQwYjgyNmNhMjRkMTdkOQ==',
        'X-AURORA-TIMESTAMP': '1590646127277',
      }).then((res) => {
        if (res.data.success) {
          this.toolData1 = res.data.content.values.map(n => ({ xData: n[1], yData: n[2].replace('kpa', '') }));
        }
      });
      window.vaApi.newToolRealtimeData2(null, {
        'Content-MD5': 'JDEkZDJHckd1L3IkRVlXVEU4bE14MVJFNEd3eUJ2WVFQMA==',
        'X-AURORA-APPKEY': '19c958679aa94ba284112cf18b04bbf6',
        'X-AURORA-SIGN': 'ZWExMDRkMTM4ZmQzMzVkNWFiNWVhY2MzNzA3NTJiYjJhZDhkZGFjNzY4NWJlMzMzZjcwMDg1YmU0ZTcwNDIyMQ==',
        'X-AURORA-TIMESTAMP': '1590646400524',
      }).then((res) => {
        if (res.data.success) {
          this.toolData2 = res.data.content.values.map(n => ({ xData: n[1], yData: n[2].replace('℃', '') }));
        }
      });
    },
    newToolListDataInit() {
      window.vaApi.newToolListData(null, {
        'Content-MD5': 'JDEkRU0uUDRyR0gkMXhsdWpOSVpPaHFwandZeWlwVE1oMQ==',
        'X-AURORA-APPKEY': '1b1e64c9a9514cfba83cfab5ffd3a7ef',
        'X-AURORA-SIGN': 'ZDE1OTU0Mzg4NmE4YTgxM2EwZDBkMzAyNzE0OGViYTEwZjhkYzJjYmQ1MDdkMjg5MGVkMmM2YjI3NjRhOGNlYg==',
        'X-AURORA-TIMESTAMP': '1590645686202',
      }).then((res) => {
        if (res.data.success) {
          const arr = [];
          res.data.content.values.forEach((item) => {
            const obj = {};
            obj.id = item[1];
            obj.name = item[2];
            obj.startTime = item[3];
            obj.endTime = item[4];
            obj.time = item[5];
            obj.value = item[6];
            obj.parts = item[7];
            arr.push(obj);
          });
          this.tableData = arr;
        }
      });
    },
    newToolTemDataInit() {
      window.vaApi.newToolTemData(null, {
        'Content-MD5': 'JDEkaEo1SGRPcHckZ3hWMnpnek0uSzNSSUJnUVJaVXlLLg==',
        'X-AURORA-APPKEY': 'c7de7a5bf4ed4243b9982543ccaa58ea',
        'X-AURORA-SIGN': 'OTU4N2E1YTRkMTE5M2M0ODdkNzg1MmI1MzE2ZmFjMWMwNjI3M2Q4NTA2MzQ5YmZiYmJkZGRlZDA1NGU5ZjA2Zg==',
        'X-AURORA-TIMESTAMP': '1590644783406',
      }).then((res) => {
        if (res.data.success) {
          this.bottomData[4].data.value = res.data.content.values[0][2];
          this.bottomData[4].data.rValue = Number(res.data.content.values[1][2]) * 100;
        }
      });
    },
    newToolDustDataInit() {
      window.vaApi.newToolDustData(null, {
        'Content-MD5': 'JDEkNmtibTBycjIkRFdRdHpWeFR4UER1aDBLUDkybFpILg==',
        'X-AURORA-APPKEY': '1dacbcbee0ec41599dada3922dc33f02',
        'X-AURORA-SIGN': 'NzEyOWVlMzhiNTY5MTllNThkOGNkZDI1MzEzMGIzY2YzZmNlNDIxY2JlOGEyYjBhMmQ0ODZiMWQxZTExMzM2MA==',
        'X-AURORA-TIMESTAMP': '1590645062379',
      }).then((res) => {
        if (res.data.success) {
          this.bottomData[3].data.value = res.data.content.values[0][2];
          this.bottomData[3].data.rValue = res.data.content.values[1][2];
        }
      });
    },
    newToolSevenDataInit() {
      window.vaApi.newToolSevenData(null, {
        'Content-MD5': 'JDEkTU1pTzlyZkckNi5MZEpFZEYueDlwRzQ4d0twQTNJLw==',
        'X-AURORA-APPKEY': '2040788ac6da4d8482a587689f5c3a65',
        'X-AURORA-SIGN': 'NGZhYzY0MDAyZmE3MjgxYWRiMzBjN2UwY2Y0MmFmNDkxMTYxMWE0OWJiYTM1Yzg1N2NlODVlYjc5YmM1ZGZlNw==',
        'X-AURORA-TIMESTAMP': '1590644503986',
      }).then((res) => {
        if (res.data.success) {
          this.sevenDaysLength = res.data.content.values[0][2];
        }
      });
    },
    newToolRemindWarningInit() {
      window.vaApi.newToolRemindWarning(null, {
        'Content-MD5': 'JDEkZ0ZrQWlublIka1dvT0ovVUxzRUU2UHJBR3VpMmt2MQ==',
        'X-AURORA-APPKEY': 'fb0574a6e2d3456b841d6391fc92905c',
        'X-AURORA-SIGN': 'MTc2Y2JmOTI4NDg3M2YyNTczODAzMDI5MzdjM2RhMDYyY2ExZjdiMTc0NWFmMzgxMWFkMjMyMjM1OGExYTBhZg==',
        'X-AURORA-TIMESTAMP': '1590645387632',
      }).then((res) => {
        if (res.data.success) {
          this.toolSurPlusData = res.data.content.values.map(n => ({ value: n[2], name: n[1] })).slice(0, 5);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
  .toolsWrap{
    .common-wrap-top-left{
      ul{
        height: 100%;
        li{
          height: 33%;
          width: 100%;
        }
      }
    }
    .common-wrap-top-right{
      ul{
        height: 100%;
        li{
          height: 33%;
          width: 100%;
        }
      }
    }
    .common-wrap-top-middle-top{
      height: 64%;
      width: 100%;
    }
    .common-wrap-top-middle-bottom{
      height: calc(36% - 20px);
      margin-top: 20px;
    }
  }
</style>
