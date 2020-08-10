<template>
    <div></div>
</template>

<script>
export default { // 项目通用方法
  name: 'commonVue',
  methods: {
    dataChangeToArr(data) { // 输出为数组，每一项为json格式的对象
      if (!data) {
        return false;
      }
      const resArr = [];
      data.values.forEach((n) => {
        const item = {};
        n.forEach((m, index) => {
          item[data.columns[index]] = m;
        });
        resArr.push(item);
      });
      return resArr;
    },
  },
};
</script>

<style scoped>

</style>
