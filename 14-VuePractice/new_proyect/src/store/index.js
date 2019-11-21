import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    frutas: [
      { nombre: 'manzana', cantidad: 0 },
      { nombre: 'pera', cantidad: 0 },
      { nombre: 'platano', cantidad: 0 },
      { nombre: 'naranja', cantidad: 0 },
    ]
  },

  mutations: {
    //~~~~~~~~~~~~List~~~~~~~~~~~~
    increase(state, index) {
      state.frutas[index].cantidad++
    },
    reset(state) {
      for (let index = 0; index < state.frutas.length; index++) {
        state.frutas[index].cantidad = 0;
      }
    },
    ordenarArray(state) {
      state.frutas.sort(function(a, b) {
        return  b.cantidad-a.cantidad ;
      });
    }
    
  },
  actions: {
  },
  modules: {
  }
})
