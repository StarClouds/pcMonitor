<template>
    <div class="CircleCahrts">
      <div class="charts-box">
        <div class="charts-title">
          <span>{{title}}</span>
          <div class="cen-line"></div>
        </div>
      </div>
      <div class="content">
        <el-progress class="data-picture" :show-text="false" type="circle" :stroke-width="12" color="#75d219" :percentage="rate"></el-progress>
        <div class="content-txt">
          {{rate}}
          <span style="font-size: 20px">%</span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'CircleCahrts',
  props: ['title', 'rate'],
};
</script>

<style lang="scss">
  .CircleCahrts {
    height: calc(100% - 80px);
    .content{
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      position: relative;
      .el-progress /deep/ path:first-child {
        stroke: rgba(255,255,255,.15);
      }
      .content-txt{
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size:35px;
      }
    }
  }
</style>
