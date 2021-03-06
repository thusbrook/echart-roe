
let option = {
  tooltip: {
    trigger: 'axis',
    type: 'cross',
    label: {
      backgroundColor: '#6a7985'
    }
  },
  color: ['rgb(79,129,189)', 'rgb(192,80,78)'],
  legend: {
    top: '5%',
    data: ['静资产收益率', '行业静资产收益率']
  },
  grid: {
    top: '15%',
    bottom: 70
  },
  xAxis: [
    {
      type: 'category',
      axisTick: { show: false },
      axisLabel: { rotate: 45 },
      data: ['2019-01-02', '2019-01-03', '2019-01-04', '2019-01-05', '2019-01-06', '2019-01-07', '2019-01-08']
    }
  ],
  yAxis: {
    type: 'value',
    axisLine: { show: false },
    axisTick: { show: false }
  },
  series: [
    {
      name: '净资产收益率',
      type: 'line',
      smooth: true,
      data: [320, 332, 50, 334, 390, 334, 390]
    },
    {
      name: '行业净资产收益率',
      type: 'line',
      smooth: true,
      data: [220, 182, 191, 234, 290, 380, 290]
    }
  ]
}

export default option

export let setROE = function (date, roe, industryRoe) {
  // TODO param check
  option.xAxis.data = date
  option.series[0].data = roe
  option.series[1].data = industryRoe
  return option
}
