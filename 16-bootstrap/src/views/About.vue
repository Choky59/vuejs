<template>
  <div class="about container">
    <h1>This is an about page</h1>

    <ul v-for="tarea in tasks" :key="tarea.id">
      <li>{{tarea}}</li>
    </ul>
    <h1>{{counter}}</h1>
    <button @click="increase()" class="btn btn-success">add</button>
  </div>
</template>


<script>
import { mapState,mapMutations } from "vuex";
export default {
  computed: {
    ...mapState('tareas', ["tasks"]),
    ...mapState('contador', ["counter"]),
  },
  methods: {
    ...mapMutations('contador',['increase'])
  },
};
</script>