<template>
 <div class="dashboard">
        <Sidebar />
        <div class="content" >
        
            <h1 class='titlu'>Cos de cumparaturi</h1>
 <table class="table is-striped is-narrow is-hoverable is-fullwidth" id="table1">
          
          <tbody>
            <tr
              class="hover:bg-gray-200"
              v-for="produs in posts"
              :key="produs._id"
            >
              <td class="py-2 px-3 border-b text-gray-700 text-lg">
                {{ produs.denumire}}
              </td>
             
              <td class="py-2 px-3border-b text-gray-500">
                {{ produs.pret }} lei
              </td>
              <td class="py-2 px-3 border-b text-gray-500">
                {{ produs.categorie }}
                
              </td>
              <td class="py-2 px-3 border-b text-gray-500">
                <img class="imag" v-bind:src="produs.imagine" alt="" />
                
              </td>
               <td class="py-2 px-3 border-b text-gray-500">
                <button v-on:click="stergereProd()" class="button is-primary is-light"> 
   
         <img :src="require('../images/remove.png') " class="imag2" />Sterge</button>
                
              </td>
          
              
             
              
            </tr>
          </tbody>
        </table>
          <h1 class="total">Total-{{total}}</h1>
            
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
        
           posts:[],
           total:0
         
        
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
    async stergereProd(){
      let rez=await axios.patch(`http://localhost:5001/posts/editClientProdus2/6342af90a58e680676c3c874&${this.idP}`)
          console.log(rez.data)
    }
    

    
    },
    async mounted()
  {
       
     let idProdDet= localStorage.getItem("idDet")
    console.log(idProdDet)
    
          const response = await axios.get(
            ` http://localhost:5001/posts/getClient/6342af90a58e680676c3c874`);
            this.posts=response.data.data.cosCumparaturi
         console.log(this.posts.stoc)
         for(let item of this.posts){
          this.total+=item.pret
         }
  

          
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



.titlu{
    margin-top: 20px;
    margin-left: 500px;
}
#btnAdauga{
    margin-left: 40px;
    margin-top: 40px;
    margin-bottom: 40px;
}
.statistici{
     border: 5px outset rgb(20, 41, 34);
  background-color: rgb(168, 238, 205);
  text-align: center;
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
.cautareDiv {
  padding-left: 50px;
  padding-top: 20px;
  padding-bottom: 50px;
}
.search {
  width: 30px;
  height: 35px;
  margin-left: 10px;
  transition: transform 0.2s;
}
p,
label {
    font: 1rem 'Fira Sans', sans-serif;
}

input {
    margin: .4rem;
}
.imag{
    max-width: 50x;
   max-height: 50px;
}
.imag2{
    max-width: 10x;
   max-height: 10px;
}
.total{
  margin-left: 500px;
}
</style>
