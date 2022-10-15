<template>
  <div id="app">
    
    <div id="nav">
      <router-link  to="/">Autentificare</router-link> |
      <router-link  to="/about">Inregistrare</router-link> |
      <router-link  to="/about"> Deconectare</router-link> 
  
    </div>
    <router-view/>
   
  </div>
</template>
<script>
export default {
 data(){
      return{
        
         
      }
    },
    mounted(){
      this.logat= localStorage.getItem('logat');
    },
    methods:{
     clickMe(){
      //console.log("MErge")
    },
  
  
  }
 
  }
  </script>
<style>

#app {

}

#nav {
  padding: 10px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
