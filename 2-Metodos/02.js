
var app = new Vue({
    el: '#app',
    data: {
      message: 'Radikales',
      radikales: [
      { nombre: "Abel",  state: true,  edad: 22} , 
      { nombre: "David", state: true,  edad: 25},
      { nombre: "Gad",   state: false,  edad: 24}  ,
      { nombre: "Lore",  state: false, edad: 25}],
      nuevoRadik: "",
      edad: 0
    },

    methods: {
      addRadik() {
        if (this.nuevoRadik == "" || this.edad == 0) {
          console.log("You must input a name and an age")
          return null
        }
        this.radikales.push({
          nombre: this.nuevoRadik,
          state: true,
          edad: this.edad
        }),
        this.nuevoRadik = ""
        this.edad = 0
      }
    }
}) 
