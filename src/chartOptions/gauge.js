let gaugeOption = {
  tooltip: {
    formatter: '{a} <br/>{b} : {c}%'
  },
  toolbox: {
    feature: {
      restore: {},
      saveAsImage: {}
    }
  },
  series: [
    {
      name: '业务指标',
      center: ['20%', '20%'],
      type: 'gauge',
      detail: { formatter: '{value}%' },
      data: [{ value: 50, name: '完成率' }]
    },
    {
      name: '业务指标',
      type: 'gauge',
      detail: { formatter: '{value}%' },
      data: [{ value: 50, name: '完成率' }]
    }
  ]
}

export default gaugeOption
