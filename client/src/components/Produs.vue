<template>
     <div class="proiect">
       
        <div class="imagine_proiect">
       
       <img class="imag" v-bind:src="post.imagine" alt="" />
     
      </div>
      <div class="proiect_continut">
          
          <label>{{post.denumire}}</label><br/>
         <label>Pret: {{post.pret}}</label><br/>
        
       
          <div class="card-vot">
       </div>
        <button v-on:click="adaugaProdus(post._id)" class="button is-primary is-outlined">Adauga in cos</button>
        <router-link to="/detalii" >
<button v-on:click="afisareDetalii(post._id)" class="button is-primary is-outlined" >Detalii</button>
     </router-link>
        
      </div>
    </div>
</template>
<script>


import axios from 'axios'
export default ({
  props:["post"],
  data(){
      return{
          denumire:"",
         pret:0,
         nrProdus:0,
         
         
        
      }
    },
    methods:{
     afisareDetalii(id){
       localStorage.setItem("idDet", id);
     
     },
     async adaugaProdus(idProd){
      let rez=await axios.patch(`http://localhost:5001/posts/editClientProdus/6342af90a58e680676c3c874&${idProd}`)
          console.log(rez.data)
      
    
       
        // let idProdus=localStorage.getItem("nrProd")
      //   console.log("ce0"+idProdus)
      // if(idProdus){
      //    localStorage.setItem("nrProd",idProdus++)
      // }else idProdus=1
      // console.log("ce1"+idProdus)
   
      
     }
      
    }
})
</script>
<style scoped>
.proiect{
    width: 200px;
    text-align: center;
}
.proiect_continut{
   padding-left: 20px;
    text-align: center;
}
.imag{
    max-width: 400px;
   max-height: 220px;
}
</style>