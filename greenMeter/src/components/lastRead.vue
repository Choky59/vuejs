<template>
    <div class="container card">
        <div style="border-bottom: groove;">
             <h5 class="card-title mt-3" style=" text-align: center "> Real time - {{selectedGateway}} </h5>
        </div>
        <div class="overflow-auto border-bottom: line mb-1" style="text-align: center; height: 300px;" >
            <div class=" mt-3 mb-3 overflow-auto" style="width: 100%;">
                <!--- Meters asociados a un gateway hardcodeado--->
                  <table class= "table">
                    <thead>
                      <tr>
                        <th scope="col">Meter</th>
                        <th scope="col">KWh</th>
                        <th scope="col">timestamp</th>
                      </tr>
                    </thead>
                    <tbody>
                      <!---tr v-for="item of radiks" :key="item.id"--->
                        <tr v-for="(meter,index) of metersInfo" :key="(meter.id,index.id)" class="changeBackground" @click="doSomething(index)">
                            <td> 
                                    <button class="btn btn-info">
                                        {{meter.meter}}
                                    </button>
                            </td>
                            <td>{{meter.kwht}}</td>
                            <td>{{meter.timestamp}}</td>    
                        </tr>
                      <tr>
                        <th></th> <td></td> <td></td>
                      </tr>
                    </tbody>
                  </table>
              </div>

        </div>
        <div class="container text-center">
            <div class=" form-group" style="width: 75%">
                <label for="exampleFormControlSelect1">Select gateway</label>
                <select class="form-control" id="exampleFormControlSelect1" v-model="selectedGateway">
                <option v-for="(item,index) of gateways" :key="(item.id, index.id)" > 
                    {{item.gatewayID}}
                </option>
            </select>
            </div>
            <div class="text-center">
                <button @click="fetchJSON(selectedGateway) " class="btn btn-primary text-right mb-3">Refresh</button>
            </div>
        
        </div>
    </div>
</template>


<script>

import { mapState,mapMutations, mapActions } from 'vuex'
export default {
  name: 'lastRead',
  data: function() {
  return {
       array: [1,2,3,4,5],
       gateways: [{
           gatewayID: 'GTW4030',
           alias: 'radika',
           },{
           gatewayID: 'Test option',
           alias: 'test',
           },
           
           ],
       selectedGateway: '',
       message: '',


    };
  },
  components: {
    
  },
  computed: {
    ...mapState(['metersInfo'])
  },
  methods: {
    ...mapMutations(['getToken']),
    ...mapActions(['fetchJSON']),
    doSomething(index){
        this.$router.push(`/${this.metersInfo[index].meter}`)
    }
  },
  created: function() {
    this.fetchJSON(this.gateways[0].gatewayID)
    this.selectedGateway = this.gateways[0].gatewayID

  }
}
</script>