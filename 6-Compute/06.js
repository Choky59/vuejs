
var app = new Vue({
    el: '#app',
    data: {
      mensaje: "tutorial 6",
      contador: 0
    },
    methods: {

    },
    created: function(){

    },
    computed: {
      invertido() {
        return this.mensaje.split('').reverse().join('')
      },
      color(){
        return{
          'bg-danger': this.contador <=10,
          'bg-warning': this.contador < 50 && this.contador > 10,
          'bg-success': this.contador >= 50 && this.contador < 80,
          'bg-progress': this.contador >= 80 
        }
      }
    }
}) 
