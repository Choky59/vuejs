
var app = new Vue({
    el: '#app',
    data: {
      greet: "Hello World!",
      rawText: "",
      tareas: []
    },
    methods: {
      addTask() {
        if(this.rawText == "") {
          return null;
        }
        this.tareas.push({
          tarea: this.rawText,
          background: 'alert alert-primary'
        })
        localStorage.setItem('tareas-vue',JSON.stringify(this.tareas))
      },

      taskComplete(index) {
        this.tareas[index].background = 'alert alert-success'
        localStorage.setItem('tareas-vue',JSON.stringify(this.tareas))
      },
      taskNotComplete(index) {
        this.tareas[index].background = 'alert alert-danger'
        localStorage.setItem('tareas-vue',JSON.stringify(this.tareas))
      }

    },
    created: function(){
      let datosDB = JSON.parse( localStorage.getItem('tareas-vue'))
      if(datosDB != null) {
        this.tareas = datosDB;
      }

    },
    computed: {
      
    }
}) 
