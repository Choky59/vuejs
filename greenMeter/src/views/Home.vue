<template>
<div>
  <div :class= "[contentPadding]" >

    <!---despliega el nombre del cliente--->
    <div class="row text-left" id="topbar">
      <div class="col-sm-12 center">
        <h5 >Medidores radika</h5>
      </div>
    </div>
    <!---!!!--->

    <!---contenedor que tiene toda la informacion de la pagina--->
    <div class="container" style="margin-top: 100px; width: 100% ">
      <div class="row">
    <!--- Muestra las ultimas lecturas de un medidor --->
      <div class="container col-sm-12 col-lg-12 mb-3" style="height: 500px">
          <lastRead/>
      </div>
        <!---!!!--->
        <!---  grafica de linea
        <div class="col-md-12 col-lg-6 ">
          <div class="card mb-3" style="width: 100%;">
            <div class="card-body">
              <h5 class="card-title" style="border-bottom: groove; text-align: center">Test Graph</h5>
                
               
            <Chart /> 
            </div>
          </div>
        </div>
        --->
      </div>
    </div>
    <!---
    <div>
      <button class="btn btn-primary mr-5" @click="fetchJSON"> Fetch</button>
      <button class="btn btn-primary" @click="getToken"> Token</button>
    </div>
     <div id='example-3'>
        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
        <label for="jack">Jack</label>
        <input type="checkbox" id="john" value="John" v-model="checkedNames">
        <label for="john">John</label>
        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
        <label for="mike">Mike</label>
  <br>
  <span>Checked names: {{ checkedNames }}</span>
</div>
    --->
  </div>
</div>
</template>

<script>
import { mapState,mapMutations, mapActions } from 'vuex'
import Chart from '@/components/chart.vue'
import lastRead from "@/components/lastRead.vue";

export default {
  name: 'home',
  data: function() {
  return {
       array: [1,2,3,4,5],
       checkedNames: []
    };
  },
  components: {
    Chart,
    lastRead
  },
  computed: {
    ...mapState(['contentPadding','metersInfo'])
  },
  methods: {
    ...mapMutations(['onCollapseClick','getReadings','getToken']),
    ...mapActions(['fetchJSON'])
  }
}
</script>

<style>

#topbar {
  background: rgba(70,225,189,.95) ; 
  position: fixed;
  width: 100%;
  z-index: 1;
  margin-left: 0px
}
.Home {
  position: absolute;
  top: 58px;
  left: 160px;
  width: calc(100% - 160px);
  z-index: 1;
  background: white;
}
.HomeCollapsed {
  position: absolute;
  top: 58px;
  left: 160px;
  width: calc(100% - 160px);
  z-index: 1;
  background: white;
}
.center {
  margin-top: 15px;
  margin-bottom: 10px;
}

ul{ 
    list-style-type: none;
    list-style-position: outside;
    padding-left: 0;
}

.changeBackground:hover {
  background: #E8E8E8;
  transition: .7s;
  cursor: pointer;
}

@media (max-width: 767px) {
      .Home {
        left: 0px;
        width: 100%;
      }
      .HomeCollapsed {
        position: absolute;
        left: 160px;
        width: calc(100% - 160px);
  }
}

</style>