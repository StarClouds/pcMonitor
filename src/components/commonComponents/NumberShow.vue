<template>
  <div class="NumberShow">
    <div class="charts-box">
      <div class="charts-title">
        <span>{{title}}</span>
        <div class="cen-line"></div>
      </div>
      <!--<todayTableCom :tableData="tableData"></todayTableCom>-->
    </div>
    <div class="content">
      <slot>
        <div class="warpper">
          <span class="number">{{num}}</span>
          <span class="unit">
            {{txt}}
          </span>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'NumberShow',
  props: ['num', 'txt', 'title'],
  components: {
  },
};
</script>

<style lang="scss" scoped>
.NumberShow {
  height: calc(100% - 80px);
  .content{
    font-family: 'ds-digit';
    color: #00dbf9;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    .warpper{
      display: flex;
      align-items: flex-end;
      padding-right: 6px;
      .number{
        font-size: 70px;
      }
      .unit{
        display: inline-block;
        font-size: 24px;
        position: relative;
        left: 6px;
        top: -8px;
      }
    }
  }
}
</style>
