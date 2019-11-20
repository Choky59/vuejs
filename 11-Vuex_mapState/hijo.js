Vue.component('hijo', {
    template: //html
    ` 
    <div class="bg-success text-white p-5"> 
      <button @click="$store.commit('increment')">+</button>
    </div>
    `,
    props: ['numero'],
    
  })