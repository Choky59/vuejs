Vue.component('hijo', {
    template: //html
    ` 
    <div class="bg-success text-white p-5"> 
      <button @click="increment">+</button>
      <button @click="decrement(2)">-</button>
      <h1> my son number is {{count}} </h1>
      <ul v-for="item of cursos">
        <li> {{item.nombre}} </li>
      </ul>

    </div>
    `,
    computed: {
      ...Vuex.mapState(['count','cursos'])
    },
    methods: {
      ...Vuex.mapMutations(['increment','decrement']),
      ...Vuex.mapActions(['obtenerCursos'])
    },
    created: function(){
      this.obtenerCursos()
    }
  })