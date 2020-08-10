import echarts from 'echarts';

export const toThousands = (num) => {
  let number = (num || 0).toString();
  let result = '';
  while (number.length > 3) {
    result = `,${number.slice(-3)}${result}`;
    number = number.slice(0, number.length - 3);
  }
  if (number) { result = number + result; }
  return result;
};

export const colorList = {
  green: '#6DD400',
  smallGreen: '#7ED321',
  blue: '#1BA5F5',
  qing: '#6DD400',
  yellow: '#F7FF02',
  brown: '#F1A22E',
  cyan: '#00DBF9',
  grey: '#AAAAAA',
  red: '#F0453F',
  purple: '#B179FB',
  deepPurple: '#6C6BF4',
  paleBlue: '#85CF6F',
  linear: new echarts.graphic.LinearGradient(
    0, 0, 0, 1,
    [
      { offset: 0, color: '#A051FF' },
      { offset: 1, color: '#00DBF9' },
    ],
  ),
};
