<template>
 <div class="dashboard">
        <Sidebar />
        <div class="content" >
         
          <div class="cos">
            <router-link to="/cos" >
         <button class="button is-primary is-light"> 
   
         <img :src="require('../images/buying.png') " class="imag" />Cos de cumparaturi</button>
              </router-link>
             </div>
             
            
            <div class="proj">
                
          </div>
    <button v-on:click="afisare()"  id="afisareProdus" class="button is-info is-rounded">Afisare</button>
        <input
       
          id="search"
          class="input is-rounded"
          type="text"
          autocomplete="off"
          v-on:keyup.enter="afisare()"
        />
        <img
          :src="require('../images/search.png')"
          class="search"
          v-on:click="afisare()"
        />
        <fieldset class='checkbox'>
    <legend>Alege categoria:</legend>

    <div>
      <input type="checkbox" id="fictiune" name="scales" >
      <label for="scales">Fictiune</label>
    </div>
   

    <div>
      <input type="checkbox" id="istorie" name="horns">
      <label for="horns">Istorie</label>
    </div>
    <div>
      <input type="checkbox" id="economie" name="horns">
      <label for="horns">Economie</label>
    </div>
</fieldset>
    <div class="proj">
           <div class="card" v-for="post in posts" :key="post._id">
        <Produs :post="post"></Produs>
      </div>
      </div>
          
        
      
      </div>
           <router-view/>
       
    </div>
</template>
<script>

import axios from 'axios'
import Produs from "../components/Produs.vue"
import Sidebar from "../components/Sidebar.vue"
export default{
    data(){
      return{
           showModal:false,
           
           denumire:"",
            postsProba: [],
           descriere:"",
           posts:[],
           stoc:0,
           pret:0,
          nrProd:0,
         
           item: {
               imageUrl: "",
               
           },
           }},
    
    components:{
        Sidebar,
        Produs
       
       
    },
      watch: {
    postProba: function () {
      this.posts = this.postsProba;
       
    }
    },
     async mounted()
  {
    
    
          const response = await axios.get(
            ` http://localhost:5001/posts/getProduse`);
            this.posts =response.data
            console.log(this.posts)
          
          },
    
    methods:{
        savePost: function () {
      // Some save logic goes here...

      this.close();
    },
    
    async afisare(){
      
        let valDenumire=document.getElementById("search").value
        // if(valDenumire){
        //      const response = await axios.get(`http://localhost:5001/posts/getProduseDenumire/${valDenumire}`);  
        //   this.posts = response.data;
        //    console.log("dfsf");
        // }
        let categorieBifata;
        if (document.getElementById("fictiune").checked) {
        categorieBifata = "Fictiune";
      } else if (document.getElementById("istorie").checked) {
        categorieBifata = "Istorie";
      }else if (document.getElementById("economie").checked) {
        categorieBifata = "Economie";
      }
      if(categorieBifata){
        const response = await axios.get(`http://localhost:5001/posts/getProduseCateg/${categorieBifata}`);  
        this.posts = response.data;
      }else if(valDenumire){
         const response =await axios.get(`http://localhost:5001/posts/getProduseDenumire/${valDenumire}`); 
         this.posts = response.data;
      }
 //this.posts = response.data;
        //      const response = await axios.get(`http://localhost:5001/posts/getProduse`);  
        //   this.posts = response.data;

    },
    

    },
    


        
          
        
          
   
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



.titlu{
    margin-top: 10px;
    margin-left: 500px;
}
#btnAdauga{
    margin-left: 40px;
    margin-top: 40px;
    margin-bottom: 40px;
}


.card {
  margin: 10px;
  width: 300px;
  border-style: solid;
  border-width: thin;
  border-color: #2a0d5a;
  box-shadow: rgb(75, 121, 170) 0px 20px 30px -10px;
}
.proj {
  margin-left: 50px;
  display: grid;
  grid-template-columns: repeat(3, minmax(80px, 1fr));
  gap: 12px;
  margin-bottom: 100px;
}
.titlu{
    margin-top: 20px;
    margin-left: 500px;
}
.cautare {
  margin-right: 20px;
}

.search {
  width: 30px;
  height: 35px;
  margin-left: 10px;
  transition: transform 0.2s;
}
#search{
  width: 600px;
}

input {
    margin: .4rem;
}
.imag{
    width: 20px;
    height: 20px;
}
.cos{
  margin-left:1050px;
  margin-top:30px
}
#afisareProdus
{
  width: 200;
}
</style>
