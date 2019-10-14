<template>
  <div id="app">
    <div>echart</div>
    <div class="echart-demo" refs="chart" style="width:100%;height:500px;"></div>
  </div>
</template>

<script>
import echart from 'echarts'
import echartOption from '@/chartOptions/gauge'
console.log(echart)
export default {
  name: 'app',
  components: {
  },
  methods: {
    initChart () {
      let echartDom = this.$refs.chart
      if (!echartDom) {
        console.warn('没有找到可渲染的chart-body')
        return
      }
      this.chart = echart.init(echartDom)
      let chart = this.chart
      console.log(this.chart)
      chart.setOption(echartOption)
      setInterval(function () {
        echartOption.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0
        chart.setOption(echartOption, true)
      }, 2000)
    },
    mounted () {
      this.initChart()
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* text-align: center; */
  /* margin-top: 60px; */
}
</style>
