<template>
    <div class="KnifeMainTable">
      <div class="charts-box">
        <div class="charts-title">
          <span>实时数据</span>
          <div class="cen-line"></div>
        </div>
      </div>
      <div class="content fucaiTableCom">
        <el-table
          :data="tableData"
          border
          height="100%"
          style="width: 100%">
          <el-table-column
            prop="id"
            label="定检号">
          </el-table-column>
          <el-table-column
            prop="name"
            label="量具名称">
          </el-table-column>
          <el-table-column
            prop="startTime"
            label="开始使用时间">
          </el-table-column>
          <el-table-column
            prop="endTime"
            label="结束使用时间">
          </el-table-column>
          <el-table-column
            prop="time"
            label="持续时长">
          </el-table-column>
          <el-table-column
            prop="value"
            label="当前测量值">
          </el-table-column>
          <el-table-column
            prop="parts"
            label="用于零件">
          </el-table-column>
        </el-table>
      </div>
    </div>
</template>

<script>

export default {
  name: 'KnifeMainTable',
  props: ['tableData'],
};
</script>

<style lang="scss" scoped>
  .KnifeMainTable {
    height: calc(100% - 80px);
    .content{
      height: 100%;
    }
  }
</style>
