<template>
  <div>
    <div :class= "[contentPadding]">
        <div class="card container" style="margin-top: 100px;" >
            <div id="testContainer" style=" height: 300px">
                
            </div>
                <button class="mt-3" @click="testSomething">test </button>
            </div>

        </div>
  </div>
</template>
<script>

import {mapState,mapMutations} from 'vuex'



export default {
  data() {
    return {
      message: ""
    }
  },
  computed: {
      ...mapState(['contentPadding'])
  },
  created() {

    
  },
  methods: {

  }
}
</script>

<style>
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