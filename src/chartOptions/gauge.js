const COE_MAX = 10.98
const COE_MIN = -19.82
let option = {
  series: [
    {
      name: '风险系数',
      center: ['30%', '50%'],
      radius: '60%',
      type: 'gauge',
      detail: {
        fontSize: 18,
        fontFamily: 'Microsoft YaHei'
      },
      title: {
        show: true,
        offsetCenter: [0, '-120%']
      },
      min: COE_MIN,
      max: COE_MAX,
      axisLine: { // 坐标轴线
        lineStyle: { // 属性lineStyle控制线条样式
          width: 20,
          color: [[1, 'rgba(65,225,174,1)']]
        }
      },
      splitLine: { // 分隔线
        length: 20 // 属性length控制线长
      },
      data: [{ value: COE_MIN, name: '风险系数' }]
    },
    {
      name: '风险系数分位数',
      center: ['70%', '50%'],
      radius: '60%',
      type: 'gauge',
      detail: {
        offsetCenter: [0, '55%'],
        formatter (value) {
          let degree = '高风险'
          if (value <= 20) {
            degree = '高风险'
          }
          if (value > 20 && value <= 40) {
            degree = '中风险'
          }
          if (value > 40 && value <= 100) {
            degree = '低风险'
          }
          return value.toFixed(2) + '%' + '\n' + '\n' + degree
        },
        fontSize: 18,
        fontFamily: 'Microsoft YaHei'
      },
      title: {
        show: true,
        offsetCenter: [0, '-120%']
      },
      axisLine: { // 坐标轴线
        lineStyle: { // 属性lineStyle控制线条样式
          width: 20,
          color: [
            [0.25, 'rgba(193,0,41,1)'],
            [0.4, 'rgba(17,82,214,1)'],
            [1, 'rgba(65,225,174,1)']
          ]
        }
      },
      axisLabel: {
        formatter: '{value} %'
      },
      splitLine: { // 分隔线
        length: 20 // 属性length控制线长
      },
      data: [{ value: 0, name: '风险系数分位数' }]
    }
  ]
}

export default option

/**
 *  设置风险系数
 * @param {number} coefficientValue 风险系数
 */
export let setCoefficient = function (coefficientValue = COE_MIN) {
  if (coefficientValue < COE_MIN || coefficientValue > COE_MAX) {
    throw Error('please check coefficient value range')
  }
  option.series[0].data[0].value = coefficientValue
  return option
}

/**
 *  设置风险系数分位数
 * @param {number} percentValue 风险系数分位数
 */
export let setPercent = function (percentValue = 0) {
  if (percentValue < 0 || percentValue > 100) {
    throw Error('please check percent value range')
  }
  option.series[1].data[0].value = percentValue
  return option
}
