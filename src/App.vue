<template>
  <div id="app">
    <div class="echart-demo" ref="gaugeChart"></div>
    <div style="display:flex;">
      <div style="width:50%;padding: 0 20px;">
        <div class="echart-demo-title">营业收入与营业成本</div>
        <div class="echart-demo border" ref="barChart"></div>
      </div>
      <div style="width:50%;padding: 0 20px;">
        <div class="echart-demo-title">净资产收益率</div>
        <div class="echart-demo border" ref="lineChart"></div>
      </div>
    </div>
    <!-- <div style="display:flex;">
      <div class="echart-demo" ref="barChart"></div>
      <div class="echart-demo" ref="lineChart"></div>
    </div> -->
  </div>
</template>

<script>
import echart from 'echarts'
import gaugeOption, { setCoefficient, setPercent } from '@/chartOptions/gauge'
import barOption, { setIncomeAndCost } from '@/chartOptions/bar'
import lineOption, { setROE } from '@/chartOptions/line'
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
    },
    // 设置风险系数
    setCoefficient (val) {
      let newOption = setCoefficient(val)
      this.gaugeChart.setOption(newOption)
    },
    // 设置风险系数分位数
    setPercent (val) {
      let newOption = setPercent(val)
      this.gaugeChart.setOption(newOption)
    },
    // 设置营业收入与营业成本
    setIncomeAndCost (date, income, cost) {
      let newOption = setIncomeAndCost(date, income, cost)
      this.barChart.setOption(newOption)
    },
    // 设置静资产收益率
    setROE (date, roe, industryRoe) {
      let newOption = setROE(date, roe, industryRoe)
      this.lineChart.setOption(newOption)
    }
  },
  mounted () {
    this.initChart()
    this.setIncomeAndCost(
      ['2019-01-02', '2019-01-03', '2019-01-04', '2019-01-05', '2019-01-06', '2019-01-07', '2019-01-08'],
      [320, 332, 301, 33400, 390, 334, 390],
      [320, 332, 301, 3340000, 390, 334, 390]
    )
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* text-align: center; */
  margin-bottom: 60px;
}
.echart-demo {
  width: 100%;
  height: 435px;
  &-title{
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
}
.border {
  border: 1px solid rgb(205, 208, 217);
}
</style>
