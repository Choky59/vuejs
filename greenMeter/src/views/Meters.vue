<template>
  <div :class= "[contentPadding]">

    <!---despliega el nombre del cliente--->
    <div class="row text-left ml-0" id="topbar">
      <div class="col-sm-12 center">
        <h5 >Meter: {{$route.params.meter}}</h5>
      </div>
    </div>
    <meterLog/>
  </div>
</template>

<script>
import { mapState,mapMutations, mapActions } from 'vuex'
import meterLog from '@/components/meter'
export default {
  name: 'home',
  data: function() {
  return {
       checkedNames: []
    };
  },
  components: {
    meterLog
  },
  computed: {
    ...mapState(['contentPadding'])
  },
  methods: {
    
  }
}
</script>
<style>

#topbar {
  background: rgba(70,225,189,.95) ; 
  position: fixed;
  width: 100%;
  z-index: 1;
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