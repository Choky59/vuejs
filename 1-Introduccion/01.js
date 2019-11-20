
var app = new Vue({
    el: '#app',
    data: {
      message: 'Radikales',
      radikales: [
      { nombre: "Abel",  state: true,  edad: 22} , 
      { nombre: "David", state: true,  edad: 25},
      { nombre: "Gad",   state: true,  edad: 24}  ,
      { nombre: "Lore",  state: false, edad: 25}],
      nuevoRadik: ""
    },

}) 
