Vue.component('saludo', {
  template: //html
  ` 
    <div>
      <h1>{{saludo}}</h1>
      <h3>{{ingles}}</h3>
    </div>
  `,
  data() {
    return {
      saludo: 'Hola Mundo!',
      ingles: 'Hello World!'
    }
  }
})


  
