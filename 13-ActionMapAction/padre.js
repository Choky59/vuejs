Vue.component('titulo', {
  template: //html
  ` 
    <div class="p-5 bg-dark text-white">
      <h1>Esto es vuex</h1>
      <h3>numero: {{count}}</h3>
      <hijo></hijo>
    </div>
  `,
  computed: {
    ...Vuex.mapState(['count','cursos'])
    /*
    numero() {
      return store.state.count
    }
    */
  },
  data() {
    return {
      numeroPadre: 0,
    }
  }
})


  