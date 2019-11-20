Vue.component('hijo', {
    template: //html
    ` 
    <div class="bg-success"> 
      <h5 class="text-white p-5">Componente hijo: {{numero * 3}} </h5>
    </div>
    `,
    props: ['numero']

  })