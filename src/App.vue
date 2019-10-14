<template>
  <div id="app">
    <div class="echart-demo" ref="gaugeChart" style="width:100%;height:435px;"></div>
    <div style="display:flex;">
      <div class="echart-demo" ref="barChart" style="width:50%;height:435px;"></div>
      <div class="echart-demo" ref="lineChart" style="width:50%;height:435px;"></div>
    </div>
  </div>
</template>

<script>
import echart from 'echarts'
import gaugeOption from '@/chartOptions/gauge'
import barOption from '@/chartOptions/bar'
import lineOption from '@/chartOptions/line'
export default {
  name: 'app',
  components: {
  },
  methods: {
    initChart () {
      this.gaugeChart = echart.init(this.$refs.gaugeChart)
      this.barChart = echart.init(this.$refs.barChart)
      this.lineChart = echart.init(this.$refs.lineChart)
      this.gaugeChart.setOption(gaugeOption)
      this.barChart.setOption(barOption)
      this.lineChart.setOption(lineOption)

      // setInterval(function () {
      //   echartOption.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0
      //   chart.setOption(echartOption, true)
      // }, 2000)
    }
  },
  mounted () {
    this.initChart()
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
