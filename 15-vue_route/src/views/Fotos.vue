<template>
  <div>
    <h1>Galeria de fotos</h1>
    <Foto></Foto>

    <router-link v-for="(foto,index) of fotos" :key="foto.id"
    :to="{name: 'fotos' , params: {id: foto}}" class="p-2">
      <button class="btn btn-danger"> {{foto}}:{{index}}</button>
    </router-link>

    <button @click="home">Home</button>
    <button @click="siguiente">siguiente</button>
    <button @click="anterior">anterior</button>

  </div>
</template>

<script>
import Foto from "@/components/Fotografia.vue";
export default {
  components: {
    Foto
  },
  data() {
    return {
      fotos: [1, 2, 3, 4, 5, 6, 7]
    }
  },
  methods: {
      home() {
          this.$router.push('/')
      },
      anterior() {
          this.$router.go(-1)
      },
      siguiente(){
          this.$router.go(1)
      }
  }
};
</script>
