Vue.component('contador', {
    template: //html
    ` 
    <div class="container"> 
        <h1> {{numero}} </h1>
        <button @click="numero++">add</button>
    </div>
    `,
    data() {
      return {
        numero: 0,
        ingles: 'Hello World!'
      }
    }
  })