<template>

    <div class="container" style="margin-top: 100px">
      <div class="card">

        <div style="border-bottom: groove; height: 50px">
             <h5 class="card-title mt-3" style=" text-align: center "> {{$route.params.meter}} - {{date}} </h5>
        </div>

        <div class="container scrollmenu text-left " style="background: #daecfe; height: 80px" >

          <div class="form-inline m-3">
            <select class="form-control m-1" v-model="selectDay" style="width: 55px;">
              <option v-for="(item,index) of days" :key="(item.id, index.id)" > 
                  {{item}}
              </option>
            </select>
            <select class="form-control m-1" v-model="selectMonth" style="width: 85px;">
              <option v-for="(item,index) of month" :key="(item.id, index.id)" > 
                  {{item}}
              </option>
            </select>
            <select class="form-control m-1" v-model="selectYear" style="width: 65px;">
              <option v-for="(item,index) of years" :key="(item.id, index.id)" > 
                  {{item}}
              </option>
            </select>
            <button class="btn btn-primary m-1" @click="inputSearch"> Search</button>
          </div>
          
        </div>
        <div id="loadingAnimation" class=" overflow-auto border-bottom: line mb-1" style="text-align: center; height: 500px; width: 100%;" >
                  
                  
                <div id='canvasID'></div>
                  <table class= "table nota table-striped">
                    <thead style="background: white;"> 
                      <tr class="space-header">
                        <th scope="col">time</th>
                        <th scope="col">V</th>
                        <th scope="col">KWht</th>
                        <th scope="col">W total</th>
                        <th scope="col">A1</th>
                        <th scope="col">W1</th>
                        <th scope="col">A2</th>
                        <th scope="col">W2</th>
                        <th scope="col">A3</th>
                        <th scope="col">W3</th>
                      </tr>
                    </thead>
                    <tbody>
                      <!---tr v-for="item of radiks" :key="item.id"--->
                        <tr v-for="read of meterQuery" :key="read.id">
                            <td>{{read.timestamp.slice(13,25)}}</td>
                            <td>{{read.V}}</td>
                            <td>{{read.kwht}}</td>
                            <td>{{parseFloat(read.w1 + read.w2 + read.w3).toFixed(2)}}</td>
                            <td>{{read.a1}}</td>     
                            <td>{{read.w1}}</td>
                            <td>{{read.a2}}</td>     
                            <td>{{read.w2}}</td>
                            <td>{{read.a3}}</td>     
                            <td>{{read.w3}}</td>

                        </tr>
                      <tr>
                        <th></th> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
      </div>
    </div>
</template>

<script>
import {mapMutations, mapActions, mapState} from 'vuex'

var load =  require("@/components/canvases/loading.js")

var d = new Date()
var start = new Date(`${d.getMonth()+1} ${d.getDate()} ${d.getFullYear()}`).getTime()
const month = {
  1:  'Jan',
  2:  'Feb',
  3:  'Mar',
  4:  'Apr',
  5:  'May',
  6:  'Jun',
  7:  'Jul',
  8:  'Aug',
  9:  'Sep',
  10:  'Oct',
  11: 'Nov',
  12: 'Dec'
}
export default {
    created() {
        
        this.noReadings("Loading...")
        this.date = `${d.getDate()}/${month[d.getMonth() + 1]}/${d.getFullYear()}`,
        this.meterRequest = {
          meter: this.$route.params.meter,
          start: start,
          end: Date.now()
        }
        this.fetchMeter(this.meterRequest)
    },
    mounted() {
      const P5 = require('p5')
      new P5(load.main) 
      load.notLoading();
    },
    computed: {
        ...mapState(['meterQuery'])
    },
    methods: {
        ...mapMutations(['noReadings']),
        ...mapActions(['fetchMeter']),
        inputSearch() {
          load.loading();
          this.noReadings("Loading...");
          this.date = `${this.selectDay}/${this.selectMonth}/${this.selectYear}`
          let start = new Date(`${this.selectMonth} ${this.selectDay} ${this.selectYear}`).getTime()
          let end   = new Date(`${this.selectMonth} ${parseInt(this.selectDay) + 1} ${this.selectYear}`).getTime()
          this.meterRequest = {
            meter: this.$route.params.meter,
            start: start,
            end: end
          },
          this.msg = this.fetchMeter(this.meterRequest);
          
          this.msg
              .then( () => {
                load.notLoading();
              }) 
        }

    },
    data() {
        return {
            days: ['day',1,2,3,4,5,6,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,23,25,26,27,28,29,30,31],
            date: ``,
            month: {
                0: 'month', 1:'Jan', 2:'Feb',3:'Mar', 4:'Apr',5:'May',6:'Jun',
                7:'Jul',8:'Aug', 9:'Sep',10: 'Oct',11: 'Nov',12: 'Dec'
              },
            years:['year',2019,2020,2021,2022,2023,2024,2025,2026,2027,2028,2029,2030],
            selectDay : 'day',
            selectMonth : 'month',
            selectYear : 'year',
            meterRequest: {},
        }
    },
}
</script>

<style>
div.scrollmenu {
  overflow: scroll;
  white-space: nowrap;
  display: inline-block;
}


</style>
