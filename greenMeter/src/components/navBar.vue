<template>
  <!--- menu de navegacion --->
  <div>
    <div class="d-md-block collapse sidenav" id="sidebar">
      <ul>
        <li>
          <router-link to="/" class="nav-link" >Home</router-link>
        </li>
        <li>
          <router-link to="/about" class="nav-link" >About</router-link>
        </li>
      </ul>
    </div>

    <nav class="navbar navbar-light navbar-expand-md fixed-top white-bg  " style="background: white">
      <!-- icono para sidebar en modo responsive -->
      <button @click="onCollapseClick" 
        class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#sidebar" 
        aria-controls="sidebar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- logo de greenapsis -->
      <span class="navbar-brand mx-auto mb-0 h1">
        <img @click="goHome" id="logoHome" src="@/assets/logo_greenapsis.png" class="text-center mx-auto" height="30" alt="logo" />
      </span>

      <!-- control de sesion de usuario -->
      <div class="dropdown mr-sm-2">
        <!-- Mostrar el nombre del usuario -->
        <a class="btn white-bg dropdown-toggle" href="#" role="button" id="user_name" name="radika"
          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">radika</a>
        <!-- opciones del usuario -->
        <div class="dropdown-menu dropdown-menu-right white-bg">
          <a class="dropdown-item" href="#">Aplicaciones</a>
          <!-- link para cerrar sesion -->
          <a class="dropdown-item" href="/logout">Cerrar sesion</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>

import { mapState, mapMutations} from 'vuex'

export default {
  name: "navBar",
  props: {},
  computed: {
  ...mapState(["contentPadding"]),
  },
  methods: {
  ...mapMutations(["onCollapseClick"]),
    goHome(){
      const path = '/'
      if (this.$route.path !== path){
        this.$router.push("/")
      } 
    }
  }
};
</script>



<style>
/* Change the color of links on hover */
#sidebar {
  height: 100%;
  top: 58px;
  width: 160px;
  position: fixed;
  background: rgb(16, 42, 53);
  overflow-x: hidden;
}

#sidebar a {
  color: white;
  opacity: 1;
  transition: 0.5s;

}
#sidebar li {
  color: white;
  opacity: 1;
  transition: 0.5s;
  padding-top: 10px;

}

#sidebar ul{ 
    list-style-type: none;
    list-style-position: outside;
    padding-left: 0;
}
#sidebar li:hover {
  opacity: 0.6;
  background: rgb(48, 62, 68);
  cursor: pointer;
}

#logoHome:hover {
  cursor: pointer;
}


</style>