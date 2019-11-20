Vue.component('hijo', {
    template: //html
    ` 
    <div class="bg-success text-white p-5"> 
      <h5>Componente hijo: {{numero * 3}} </h5>
      <h3> Nombre: {{nombre}} </h3>
      <button @click="numero++">+</button>
    </div>
    `,
    props: ['numero'],
    
    data() {
      return{
        nombre: "Choki"
      }
    },

    mounted() {
      this.$emit('nombreHijo',this.nombre)
    }
  })