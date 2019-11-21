<template>
  <div class="text-center">
    <ul class="list-group">
      <li
        v-for="(fruta,index) of frutas"
        :key="fruta.id"
        @click="[increase(index), ordenarArray()] "
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        {{index}}.-{{fruta.nombre}}
        <span class="badge badge-primary badge-pill">{{fruta.cantidad}}</span>
      </li>
    </ul>
    <div class="p-2">
      <button class="btn btn-danger btn-block" @click="reset">Reset</button>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "List",
  computed: {
    ...mapState(["frutas"]),
  },
  methods: {
    ...mapMutations(["increase", "reset","ordenarArray"])
  }
};
</script>