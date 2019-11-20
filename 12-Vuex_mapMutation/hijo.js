Vue.component('hijo', {
    template: //html
    ` 
    <div class="bg-success text-white p-5"> 
      <button @click="increment">+</button>
      <button @click="decrement(2)">-</button>
      <h1> my son number is {{count}} </h1>
      <h1> my son random number is {{randomNumber}} </h1>
    </div>
    `,
    computed: {
      ...Vuex.mapState(['count','randomNumber'])
    },
    methods: {
      ...Vuex.mapMutations(['increment','decrement'])
    }
  })