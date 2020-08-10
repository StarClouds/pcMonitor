
/* jshint esversion: 6 */
// export const computedLocationX = (x, y) => (x * 1056 / 187.3 - 1056 / 2) * Math.abs((y * 450 / 121.93) / 1323 - 1) + 1056 / 2 + 35;// uwb转地图点坐标X
// export const computedLocationY = y => y * 450 / 121.93 + 45;// uwb转地图点坐标Y
export const computedLocationX = (x, y) => (x * 1030 / 187.3 - 1030 / 2) * Math.abs((y * 432 / 121.93) / 1323 - 1) + 1030 / 2 + 35;// uwb转地图点坐标X
export const computedLocationY = y => y * 432 / 121.93 + 37;// uwb转地图点坐标Y
export const imgWidth = 1128;// 2280 1128
export const imgHeight = 510;// 484 510
export const computedLeft = (x, y) => computedLocationX(x, y) * 100 / imgWidth;// 计算position left 单位%
export const computedTop = y => (imgHeight - computedLocationY(y)) * 100 / imgHeight;// 计算position top 单位%
