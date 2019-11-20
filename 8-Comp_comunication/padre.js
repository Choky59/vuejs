Vue.component('padre', {
  template: //html
  ` 
    <div class="p-5 bg-dark text-white">
      <h1>Componente padre: {{numeroPadre}}</h1>
      <hijo :numero="numeroPadre"> </hijo>
      <button class="btn btn-primary" @click="numeroPadre++"> add </button>
    </div>
  `,
  data() {
    return {
      numeroPadre: 0,
      ingles: 'Hello World!'
    }
  }
})


  
