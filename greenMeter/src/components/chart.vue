<template>
  <div class="example">
    <apexcharts width="100%" height="400" type="line" :options="chartOptions" :series="series"></apexcharts>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import { mapState,mapMutations, mapActions } from 'vuex'

export default {
  name: 'Chart',
  components: {
    apexcharts: VueApexCharts,
  },
  data: function() {
    return {
      number: 10,
      chartOptions: {
        chart: {
          id: 'kwht graph'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      },
      series: [{
        name: 'kwht',
        data: [50, 40, 45, 50, 49, 60, 70, 91]
      }]
    }
  },
  computed: {
    ...mapState(['metersInfo'])
  },
  methods: {
    ...mapMutations(['getReadings']),
    ...mapActions(['fetchJSON'])
  },


}
</script>