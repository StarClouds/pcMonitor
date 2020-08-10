<template>
  <el-container class="homePage">
    <el-header
      height=""
    >
      <!--<head-nav></head-nav>-->
      <!--<navTitle />-->
    </el-header>
    <el-main class="routePart" style="overflow: hidden;">
      <transition
        name="fade"
        mode="out-in"
      >
        <router-view></router-view>
      </transition>
    </el-main>
  </el-container>
</template>

<script>

export default {
};
</script>


<style lang="scss">
@import "~scss_vars";
$topLength: 40px;

.homePage {
  min-width: 1200px;
  height: 100%;

  .routePart {
    display: flex;
  }
  .commonPart {
    flex: 1;
    display: flex;
    .leftPart,
    .middlePart {
      margin-right: 20px;
      .bottomTable {
        width: 99.9%;
        /*解决产品页bug*/
        &, .el-table__empty-text {
          color: $td-font-color;
        }
        font-size: $font-size;
        thead {
          color: $blue-color;
        }
        &, &::before, th, tr, .el-table__body tr:hover>td {
          background-color: transparent;
        }
        th, td {
          border-color: $td-border-color;
        }
      }
    }
    .leftPart {
      width: 15.6%;
    }
    .middlePart {
      flex: 1;
    }
    .rightPart {
      width: 20.8%;
    }
    .leftPart, .rightPart, .middlePart {
        display: flex;
        flex-direction: column;
        .equalHeight {
            flex: 1;
        }
        >section:not(:last-Child){
          margin-bottom: 20px;
        }
    }
    .topPart {
      /*background: url(~@/assets/images/middle/mainPart.png) no-repeat center;*/
      background-size: contain;
    }
    .boxBorder {
      border: 1px solid #065484;
      /*<!--border: 1px solid $border-color;-->*/
      background-color: rgba(5,16,83,0.50);
    }
    .tabCommon {
      .el-tabs__header, .el-tabs__nav, .el-tabs__item {
          border: 0;
      }
      .el-tabs__content {
          overflow: visible;
      }
      .el-tabs__nav {
          border-top: 1px solid $tabMenu-borderColor;
          border-left: 1px solid $tabMenu-borderColor;
      }
      .el-tabs__item {
          border-right: 1px solid $tabMenu-borderColor;
          border-bottom: 1px solid $tabMenu-borderColor;
          color: $font-color;
          background-color: rgba($color: $tabMenu-bgColor, $alpha: 0.2);
          font-size: 16px;
          &.is-active, &:hover {
              background-color: rgba($color: $tabMenu-bgColor, $alpha: 0.6);
              border-bottom: 1px solid $tabMenu-borderColor;
          }
      }
  }
  }
}
</style>
