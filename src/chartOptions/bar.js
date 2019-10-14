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
    bottom: 70
  },
  calculable: true,
  xAxis: [
    {
      type: 'category',
      axisTick: { show: false },
      axisLabel: { rotate: 45 },
      data: ['2019-01-02', '2019-01-03', '2019-01-04', '2019-01-05', '2019-01-06', '2019-01-07', '2019-01-08']
    }
  ],
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
      data: [320, 332, 301, 334, 390, 334, 390]
    },
    {
      name: '营业成本',
      type: 'bar',
      data: [220, 182, 191, 234, 290, 234, 290]
    }
  ]
}

export default option
