Vue.component('titulo', {
  template: //html
  ` 
    <div class="p-5 bg-dark text-white">
      <h1>Esto es vuex</h1>
      <h3>numero: {{$store.state.count}}</h3>
      <hijo></hijo>
    </div>
  `,
  data() {
    return {
      numeroPadre: 0,
    }
  }
})


  
