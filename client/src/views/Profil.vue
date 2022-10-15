<template>
 <div class="dashboard">
        <Sidebar />
        <div class="content" >
         <h1 id="titlu">Profilul meu</h1>
        <div class="split left">
   
    <Modal class="modal" v-if="showModal" @close="showModal = false">
       <div slot="body">
          <div class="card-body">
            <form @submit.prevent="editareProfil">
              <div class="form-group">
                    <label>Nume </label>
       <input id="mnume" style="margin-left:20px" v-model="student.nume">

   <div class=nume>
    <label id="ceva">Prenume</label>
     <input id="mprenume" type="text" style="margin-left:20px" v-model="student.prenume" >
   </div>
   <div class=nume>
    <label>Email</label>
     <input id="memail" style="margin-left:20px" v-model="student.email">
   </div>
    <div class=nume>
    <label>Facultate</label>
     <input id="mfacultate" style="margin-left:20px" v-model="student.facultate">
   </div>
   <div class=nume>
    <label>An de studiu</label>
     <input id="manStudiu" style="margin-left:20px" v-model="student.anStudiu">
   </div>
   <div class=nume>
    <label>Medie de cazare</label>
     <input id="mmedie" style="margin-left:20px" v-model="student.medie">
   </div>
    <div class=nume>
    <label>Forma finantare</label>
     <input id="mformaFinantare" style="margin-left:20px" v-model="student.formaFinantare">
    </div>
    <div class=nume>
    <label>Parola</label>
     <input type="password" id="mparola" style="margin-left:20px" v-model="student.parola">
    </div>
    <div class=nume>
    <label>Data incepere contract</label>
     <input type="date" id="mdataincepere" style="margin-left:20px" v-model="student.dataIncepereContract">
    </div>
      <div class=nume>
    <label>Data expirare contract</label>
     <input type="date" id="mdataincheiere" style="margin-left:20px" v-model="student.dataIncheiereContract">
    </div>
    <div class=nume>
    <label>Camin</label>
     <div class="select is-link">
                    <select id="mcamin">
                      <option>Belvedere Nou</option>
                      <option>Moxa</option>
                      <option>Belvedere Vechi</option>
                        <option>Tei</option>
                          <option>Agronomie</option>
                    </select>
                  </div>
    </div>
    <div>
    <label>Camera</label>
     <input type="text" id="mcamera" style="margin-left:20px" v-model="student.camera">
    </div>
    
  
              </div>
              

              <button
                @click="close()"
                id="btnSalvare"
                class="button is-link is-rounded is-focused"
                style="width: 200px"
                
              >
                Salveaza modificari
              </button>
            </form>
          </div>
        </div>

        <h3 slot="header">Editare date personale</h3>
    </Modal>
     <div class="cardProfil">
       <img :src="require('../images/profil.png') " class="imag" />
       <div class="date">
        <div class="nume">

     <label>Nume </label>
       <label style="margin-left:20px">{{student.nume}}</label>
    </div>
   <div class=nume>
    <label>Prenume</label>
     <label style="margin-left:20px">{{student.prenume}}</label>
   </div>
   <div class=nume>
    <label>Email</label>
     <label style="margin-left:20px">{{student.email}}</label>
   </div>
    <div class=nume>
    <label>Facultate</label>
     <label style="margin-left:20px">{{student.facultate}}</label>
   </div>
   <div class=nume>
    <label>An de studiu</label>
     <label style="margin-left:20px">{{student.anStudiu}}</label>
   </div>
   <div class=nume>
    <label>Medie de cazare</label>
     <label style="margin-left:20px">{{student.medie}}</label>
   </div>
    <div class=nume>
    <label>Forma finantare</label>
     <label style="margin-left:20px">{{student.formaFinantare}}</label>
    </div>
     <div class=nume>
    <label>Data incepere contarct</label>
     <label style="margin-left:20px">{{student.dataIncepereContract}}</label>
    </div>
     <div class=nume>
    <label>Data expirare contract</label>
     <label style="margin-left:20px">{{student.dataIncheiereContract}}</label>
    </div>
     <div class=nume>
    <label>Camin</label>
     <label style="margin-left:20px">{{student.camin}}</label>
    </div>
     <div class=nume>
    <label>Camera</label>
     <label style="margin-left:20px">{{student.camera}}</label>
    </div>
   </div>
   <button   @click="showModal = true" class="button is-primary is-light">Editeaza profilul </button>
      </div>
        </div>

           <router-view/>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import Sidebar from "../components/Sidebar.vue"
import Modal from "../components/Modal.vue"
export default{
   data() {
    return {
    
      student:'',
      showModal: false,

    }},
    components:{
        Sidebar,
        Modal
    },
    async mounted() {
    if (localStorage) {
     this.student= JSON.parse(localStorage.getItem('student'));
    }
    },
    methods:{
       async editareProfil(){
           let mnume=document.getElementById("mnume").value
               let mprenume=document.getElementById("mprenume").value
                 let memail=document.getElementById("memail").value
                let mfaculta=document.getElementById("mfacultate").value;
                let manStudiu=document.getElementById("manStudiu").value;
                let mmedie=document.getElementById("mmedie").value;
                let mparola=document.getElementById("mparola").value;
                let mformaFinantare=document.getElementById("mformaFinantare").value
                let mdataincepere=document.getElementById("mdataincepere").value
                let mdataincheiere=document.getElementById("mdataincheiere").value
                let mcamin=document.getElementById("mcamin").value
                let mcamera=document.getElementById("mcamera").value
            
          let studentEditat={nume:mnume,prenume:mprenume,email:memail,facultate:mfaculta,anStudiu:manStudiu
          ,medie:mmedie,parola:mparola,formaFinantare:mformaFinantare, dataIncepereContract:mdataincepere,
          dataIncheiereContract:mdataincheiere,camin:mcamin,camera:mcamera}
          console.log(studentEditat)
           await axios.patch(
            `http://localhost:5001/posts/editStudent/${this.student._id}`,
            studentEditat
          );
          this.student=studentEditat
           //localStorage.setItem('student', JSON.stringify(studentEditat));
       },
        close () {
      
      this.$emit("close");
    },
    }
  
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
#titlu{
    margin-left: 500px;
    margin-top: 50px;
}
.imag{
  width: 130px;
  height: 130px;
  margin-left: 522px;
}
.date{
    margin-left: 50px;
}
.button{
    margin-left: 200px;
    margin-top: 50px;
}
</style>
