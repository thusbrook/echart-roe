let option = {
  color: ['rgb(79,129,189)', 'rgb(192,80,78)'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    top: '5%',
    data: ['营业收入', '营业成本']
  },
  grid: {
    top: '15%',
    bottom: 70,
    left: 70
  },
  calculable: true,
  xAxis: {
    type: 'category',
    axisTick: { show: false },
    axisLabel: { rotate: 45 },
    data: ['2019-01-02', '2019-01-03', '2019-01-04', '2019-01-05', '2019-01-06', '2019-01-07', '2019-01-08']
  },
  yAxis: [
    {
      type: 'value',
      axisLine: { show: false },
      axisTick: { show: false }
    }
  ],
  series: [
    {
      name: '营业收入',
      type: 'bar',
      // barGap: '5%',
      data: [320, 332, 301, 33400, 390, 334, 390]
    },
    {
      name: '营业成本',
      type: 'bar',
      data: [220, 182, 191, 234, 290, 234, 290]
    }
  ]
}

export default option

export let setIncomeAndCost = function (date = [], income = [], cost = []) {
  // TODO param check
  let all = income.concat(cost)
  let maxNum = Math.max.apply(null, all)
  let labelLength = String(maxNum).length
  if (labelLength > 5) {
    option.grid.left = 70 + (labelLength - 5) * 10
  }
  option.xAxis.data = date
  option.series[0].data = income
  option.series[1].data = cost
  return option
}
