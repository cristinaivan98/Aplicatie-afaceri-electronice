<template>
 <div class="dashboard">
        <Sidebar />
        
        <div class="content" >
        
            <h1 class='titlu'>Produse</h1>
            
            <div class="proj">
                <button
        class="btnAdauga button is-info is-focused"
        @click="showModal = true"
      >
        <i class="plus fas fa-plus"></i>Adauga un nou produs
         </button>
         <button  class=" button is-info is-focused" v-on:click="afisare()"  id="afisareProdus" >Afisare produse</button>
    
         
    <table  class="table is-striped is-narrow is-hoverable is-fullwidth" id="table1">
          <thead class="border-b">
            <tr>
              <th
                class="
                  py-3
                  px-5
                  bg-indigo-800
                  font-medium
                  uppercase
                  text-sm text-gray-100
                "
              >
                Denumire
              </th>
              <th
                class="
                  py-3
                  px-5
                  bg-indigo-800
                  font-medium
                  uppercase
                  text-sm text-gray-100
                "
              >
                Autor
              </th>
              <th
                class="
                  py-3
                  px-5
                  bg-indigo-800
                  font-medium
                  uppercase
                  text-sm text-gray-100
                "
              >
                Editura
              </th>
               <th
                class="
                  py-3
                  px-5
                  bg-indigo-800
                  font-medium
                  uppercase
                  text-sm text-gray-100
                "
              >
                Categorie
              </th>
              <th
                class="
                  py-3
                  px-5
                  bg-indigo-800
                  font-medium
                  uppercase
                  text-sm text-gray-100
                "
              >
                Stoc
              </th>
              <th
                class="
                  py-3
                  px-5
                  bg-indigo-800
                  font-medium
                  uppercase
                  text-sm text-gray-100
                "
              >
                Pret
              </th>
              
              
              
              
            </tr>
          </thead>
          <tbody>
            <tr
              class="hover:bg-gray-200"
              v-for="produs in produse"
              :key="produs._id"
            >
              <td class="py-4 px-6 border-b text-gray-700 text-lg">
                {{ produs.denumire }}
              </td>
              <td class="py-4 px-6 border-b text-gray-500">
                {{ produs.autor}}
              </td>
              <td class="py-4 px-6 border-b text-gray-500">
                {{ produs.editura }}
              </td>
              <td class="py-4 px-6 border-b text-gray-500">
                {{ produs.categorie }}
                
              </td>
              <td class="py-4 px-6 border-b text-gray-500">
                {{ produs.stoc }}
                
              </td>
              <td class="py-4 px-6 border-b text-gray-500">
                {{ produs.pret }}
                
              </td>
              <td class="py-4 px-6 border-b text-gray-500">
                 <button
        class="btnAdauga button is-info is-focused"
        @click="editare(produs._id)"
         style="margin-top:10px"
      >
        <i class="plus fas fa-plus"></i>Editeaza
      </button>
                </td>
                    <td class="py-4 px-6 border-b text-gray-500">
                 <button
        class="btnAdauga button is-info is-focused"
        @click="stergere(produs._id)"
         style="margin-top:10px"
      >
        <i class="plus fas fa-plus"></i>Sterge
      </button>
                </td>

              
            </tr>
          </tbody>
        </table>
        <Modal class="modal" v-if="showModal" @close="showModal = false">
       <div slot="body">
          <div class="card-body">
            <form @submit.prevent="postProdus">
              <div class="form-group">
                  

   <div class=nume>
   </div>
    <p>
   <label>Denumire</label>
   <input id="denumire" type="text">
    </p>
     <p>
   <label>Descriere</label>
   <input id="descriere" type="text">
    </p>
       <p>
   <label>Pret</label>
   <input id="pret" type="text">
    </p>
    <p>
    <label>Autor</label>
   <input id="autor" type="text">
    </p>
    <p>
    <label>Editura</label>
   <input id="editura" type="text">
    </p>
    <p>
   <label>Stoc</label>
   <input id="stoc" type="text">
    </p>
   
   
   <div class=nume>
    <label>Categorie</label>
<div class="select is-link">
                     <select id="categ">
            
            <option>Fictiune</option>
            <option>Istorie</option>
            <option>Economie</option>
            <option>Psiholgie</option>
            
                          
                    </select>
                  </div>
   </div>
   <input
              required
                class="button is-link is-inverted"
                type="file"
                accept="image/*"
                @change="onChange"
                
              />
  
              </div>
              

              <button
                @click="close()"
                id="btnSalvare"
                class="button is-link is-rounded is-focused"
                style="width: 200px"
                
              >
                Adauga
              </button>
            </form>
          </div>
        </div>

        <h3 slot="header">Adauga un nou produs</h3>
    </Modal>
    
     
    <Modal2 class="modal" v-if="showModal2" @close="showModal2 = false">
      <div slot="body">
        <div class="card-body">
          <form @submit.prevent="editProdus()">
            <div class="form-group">
              <p>
              <label for="denumire">Denumire</label>
              <input value=""
               autocomplete="off"
                
                type="text"
                v-model="denumire"
                placeholder=""
                name="titlu"
               
                class="form-control"
                
              />
              </p>
            </div>

            <div class="form-group">
               
                <p>
              <label for="descriere">Descriere</label>
              <input
               autocomplete="off"
               
                
                type="text"
                name="descriere"
               v-model="descriere"
                class="form-control"
              />
              </p>
            </div>
            
            <div class="form-group">
                <p>
              <label for="descriere">Autor</label>
              <input
               autocomplete="off"
                
               
                type="text"
                name="descriere"
               v-model="autor"
                class="form-control"
              />
              </p>
            <div class="form-group">
                <p>
              <label for="descriere">Editura</label>
              <input
               autocomplete="off"
                
              
                type="text"
                name="descriere"
               v-model="editura"
                class="form-control"
              />
              </p>
            </div>
            
            <div class="form-group">
                <p>
              <label for="descriere">Categorie</label>
              <input
               autocomplete="off"
                
                type="text"
                name="descriere"
               v-model="categorie"
                class="form-control"
              />
              </p>
            </div>
            
            <div class="form-group">
                <p>
              <label for="descriere">Stoc</label>
              <input
               autocomplete="off"
               
                
                type="text"
                name="descriere"
               v-model="stoc"
                class="form-control"
              />
              </p>
            </div>
            
            <div class="form-group">
                <p>
              <label for="descriere">Pret</label>
              <input
               autocomplete="off"
               
                
                type="text"
                name="descriere"
               v-model="pret"
                class="form-control"
              />
              </p>
            </div>
            </div>
            <button
            @click="close()"
              id="btnSalvare"
              class="button is-link is-rounded is-focused"
              style="width: 500px"
            >
              Salveaza
            </button>
          </form>
        </div>
      </div>

      <h3 slot="header">Editeaza</h3>
    </Modal2>
    <div id="preview">
        <div invizibil style="display: none">
          <img id="imag" v-if="item.imageUrl" :src="item.imageUrl" />
        </div>
      </div>
          
        
      
      </div>
           <router-view/>
        </div>
    </div>
</template>
<script>
import Modal from "../components/Modal.vue"
import Modal2 from "../components/Modal.vue"
import axios from 'axios'
import Sidebar from "../components/Sidebar.vue"
export default{
    data(){
      return{
           showModal:false,
           showModal2:false,
           autor:"",
           postsProba:[],
           produse:[],
           denumire:"",
           descriere:"",
           stoc:0,
           pret:0,
           categorie:"",
           editura:"",
           idProdus:"",
           item: {
               imageUrl: "",
               
           },
           }},
    
    components:{
        Sidebar,
        Modal,
        Modal2
       
    },
    watch: {function () {
      this.produse= this.postsProba;
       
    }
 
    },
      async mounted()
  {
    
    
          const response = await axios.get(
            ` http://localhost:5001/posts/getProduse`);
            this.produse =response.data
            console.log(this.produse)
          
          },
    methods:{
         savePost: function () {
      // Some save logic goes here...

      this.close();
    },
     async close () {
       this.afisare()
      this.$emit("close");
    
      console.log("sa vedem")
        //if(this.denumire && this.descriere && this.stoc){
            this.showModal= false
           
         
           
     // }
    
    },
    async afisare(){
        console.log("da");
             const response = await axios.get(`http://localhost:5001/posts/getProduse`);  
          this.produse = response.data;
          console.log(this.produse)

    },
    
    onChange(e) {
      const file = e.target.files[0];
      this.image = file;
      this.item.imageUrl = URL.createObjectURL(file);
      var reader = new FileReader();
      reader.readAsDataURL(file);
      //const imagine;
      reader.onload = function () {
        this.imagine = reader.result;
        // console.log(reader.result)
        //console.log(""+this.imagine)
      };
      // console.log(this.imagine)
    },
    getBase64Image(img) {
      var canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      var dataURL = canvas.toDataURL("image/png");
      return dataURL;
    },
    async editare(id){
         localStorage.removeItem("idProdus");
        localStorage.setItem("idProdus", id);
       
        this.showModal2=true;

        let idProdus=localStorage.getItem("idProdus")
        console.log("afisare1   "+idProdus)
        const response = await axios.get(
            ` http://localhost:5001/posts/getProdusId/${idProdus}`);
            console.log("afisare2   "+response)
            let prodAfis=response.data
          console.log(prodAfis.data.denumire)
          this.denumire=prodAfis.data.denumire
        console.log("afisare2   "+this.denumire)
          this.descriere=prodAfis.data.descriere
          this.autor=prodAfis.data.autor
          this.categorie=prodAfis.data.categorie
          this.stoc=prodAfis.data.stoc
          this.pret=prodAfis.data.pret
          this.editura=prodAfis.data.editura
        console.log("afisare1  "+id)
        const response2 = await axios.get(`http://localhost:5001/posts/getProduse`);  
            this.produse= response2.data;
        
        
    },
    async stergere(id){
         localStorage.removeItem("idProdus");
        localStorage.setItem("idProdus", id);
        let idProdus =localStorage.getItem("idProdus");
         await axios.delete(
            ` http://localhost:5001/posts/deleteProdus/${idProdus}`);

    },
    async editProdus(){
       let idProd=localStorage.getItem("idProdus")
     let produsEditat = {
            denumire:this.denumire,
          descriere:this.descriere,
          autor:this.autor,
          categorie:this.categorie,
          stoc:this.stoc,
          pret:this.pret,
          editura:this.editura,
          };
          console.log("idulvietii"+idProd)
          await axios.patch(
            `http://localhost:5001/posts/editProdus/${idProd}`,
            produsEditat
          );
        localStorage.removeItem("idProdus");
         this.showModal2= false
        
        
    },
    async postProdus() {
      
    
        // var imag=this.onChange();
        var base64 = this.getBase64Image(document.getElementById("imag"));
        let denumire1=document.getElementById("denumire").value;
        let descriere1=document.getElementById("descriere").value;
        let pret1=document.getElementById("pret").value;
        let categorie1=document.getElementById("categ").value;
         let stoc1=document.getElementById("stoc").value;
          let editura1=document.getElementById("editura").value;
           let autor1=document.getElementById("autor").value;
           console.log("___________________."+editura1)
        let produs = {
          denumire: denumire1,
          descriere: descriere1,
          cantitate: 0,
          pret:pret1,
          categorie:categorie1,
          imagine: base64,
          stoc:stoc1,
          editura:editura1,
          autor:autor1
        };
        console.log(produs)
        await axios.post(`http://localhost:5001/posts/postProdus`, produs);
         
      
        
     
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


.card {
  margin: 10px;
  width: 300px;
  border-style: solid;
  border-width: thin;
  border-color: #2a0d5a;
  box-shadow: rgb(75, 121, 170) 0px 20px 30px -10px;
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
#afisareProdus{
    width: 130px;
    height: 40px ;
}
.icon {
  width: 30px;
  height: 30px;
}
#table1{
    margin-top: 50px;
    margin-left: 10px;
}
form  { display: table;      }
p     { display: table-row;  }
label { display: table-cell; }
input { display: table-cell; }
</style>
