<template>
 <div class="dashboard">
        <Sidebar />
        <div class="content" >
        <router-link to="/cautareProduse" class='router'>
<button class="button is-primary is-outlined" >Inapoi</button>
     </router-link>
      <p class="title is-2 is-spaced">{{this.post.denumire}} - {{this.post.autor}} </p>
           <img class="imag" v-bind:src="this.post.imagine" alt="" />
           <div>
        
         <label class='desc'>{{this.post.descriere}}</label>
         
           </div>
           
            
          
          
            
            <div class="proj">
                
          </div>
 
       </div>
    </div>
</template>
<script>

import axios from 'axios'

import Sidebar from "../components/Sidebar.vue"
export default{
    data(){
      return{
         post:{},
           postProba: {},
          imagine:"",
           denumire:"",
           descriere:"",
           autor:"",
           editura:"",
           categorie:"",
           posts:[],
           stoc:0,
           pret:0,
           idP:"",
        
           }},
    
    components:{
        Sidebar,
        
       
       
    },
    methods:{
        savePost: function () {
      // Some save logic goes here...

      this.close();
    },
    async afisare(){
        console.log("da")
    },
    

    
    },
    async mounted()
  {
       
     let idProdDet= localStorage.getItem("idDet")
    console.log("idProdDet")
    
          const response = await axios.get(
            ` http://localhost:5001/posts/getProdusId/${idProdDet}`);
            this.post =response.data.data
          
         console.log(this.post.data)
         this.imagine=this.post.imagine
          this.denumire=this.post.denumire,
    this.descriere=this.post.descriere,
    this.categorie=this.post.categorie,
    this.editura=this.post.editura,
    this.autor=this.post.autor,
    this.stoc=this.post.stoc,
    this.pret=this.post.pret
    this.idP=this.post._id

          
          },
       watch: {
    postProba: function () {
      this.post = this.postProba;
    }},
    


        
          
        
          
   
}

</script>
<style scoped>
.dashboard {
    display: grid;
    grid-template-columns: 1fr 5fr;
    background-color: rgb(136, 245, 178);
    height: 100vh;
    width: 100vw;
    
}
.content {
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
     margin: 6px 6px 6px 6px;

    width: 81.5vw;
	height: 100vh;
	overflow: auto; 

}
.sidebar{
    position: relative;
}
.dashboard {
    display: grid;
    grid-template-columns: 1fr 5fr;
    background-color: rgb(136, 245, 178);
    height: 100vh;
    width: 100vw;
    
}



.imag{
  width: 250px;
  height: 400px;
  margin-left: 100px;
}
.router{
  margin-left: 1000px;
  margin-top: 100px;
}
p{
  margin-left: 300px;
}
.desc{
  padding:100px;
}
</style>
