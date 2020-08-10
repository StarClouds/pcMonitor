/**
 * columnFields key数组
 * columnDatas  value数组
 * @param {*} columnFields
 * @param {*} columnDatas
 */
export const column2Object = function column2Object(columnFields, columnDatas) {
  const objs = [];
  for (let i = 0; i < columnDatas.length; i += 1) {
    const cd = columnDatas[i];
    const obj = {};
    for (let j = 0; j < columnFields.length; j += 1) {
      obj[columnFields[j]] = cd[j];
    }
    objs.push(obj);
  }
  return objs;
};
export const column2Object2 = (data) => { // 输出为数组，每一项为json格式的对象
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
};
export const column2Echarts = (data) => { // 输出为对象，key值为一维数组，记录当前key值数据集合
  if (!data) {
    return false;
  }
  const resObj = {};
  data.columns.forEach((n, index) => {
    resObj[n] = [];
    data.values.forEach((m) => {
      resObj[n].push(m[index]);
    });
  });
  return resObj;
};
export const getMapItemInfo = (data, key, cnName) => { // data:数据 key要取值的值 cnName区域中文名称。key:0 计算日期， 1：区域名称 2：采集时间 3：温度 4：湿度 5：开工FO号
  if (!data) {
    return false;
  }
  if (data.values.findIndex(n => n[1] === cnName) !== -1) {
    return data.values[data.values.findIndex(n => n[1] === cnName)][key];
  }
  return ''; // 应要求没有就显示空
};
export const getMapItemInfo2 = (data, key, cnName) => { // data:数据 key要取值的值 cnName区域中文名称。key:temper温度 humidity湿度
  if (!data) {
    return false;
  }
  let keys;
  if (key === 3) {
    keys = 'temper';
  } else if (key === 4) {
    keys = 'humidity';
  }
  if (data.findIndex(n => n.storeName === cnName) !== -1) {
    return data[data.findIndex(n => n.storeName === cnName)][keys];
  }
  return ''; // 应要求没有就显示空
};
