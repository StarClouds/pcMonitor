<template>
    <div class="ThreeColTable">
      <div class="charts-box">
        <div class="charts-title">
          <span>{{title}}</span>
          <div class="cen-line"></div>
        </div>
      </div>
      <div class="content">
        <vue-seamless-scroll :class-option="classOption" :data="dataArr">
          <el-row v-for="item in dataArr" :key="item.id">
            <el-col :span="24">
              {{item.name}}
            </el-col>
            <el-col :span="8">
              {{item.id}}
            </el-col>
            <el-col :span="12">
              {{item.value}}
            </el-col>
          </el-row>
        </vue-seamless-scroll>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ThreeColTable',
  props: ['title', 'dataArr'],
  data() {
    return {
      classOption: {
        step: 1,
        limitMoveNum: 5,
        singleHeight: 40,
        waitTime: 1000,
      },
    };
  },
};
</script>

<style lang="scss">
  .ThreeColTable {
    height: calc(100% - 80px);
    .content{
      width: 100%;
      height: 100%;
      color: #fff;
      line-height: 40px;
      box-sizing: border-box;
      padding-left: 30px;
      overflow: hidden;
    }
  }
</style>
