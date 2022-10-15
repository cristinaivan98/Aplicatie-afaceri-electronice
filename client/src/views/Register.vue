<template>
  <div class="about">
    <div>
      <div class="card-header text-white bg-primary">
        <h4 class="title is-1">Inregistrare student</h4>
      </div>

      <div class="row">
        <div class="card mx-auto">
          <div class="card-body">
            <form>
              <div class="form-group">
                <label id="formular" for="username">Email</label><br />
                <input
                  class="input is-focused"
                  id="email"
                  type="text"
                  placeholder="Email"
                  name="email"
                  v-model="email"
                />
                <div class="form-group">
                  <label id="formular" for="nume">Nume</label><br />
                  <input
                    class="input is-focused"
                    id="nume"
                    type="text"
                    placeholder="Nume"
                    name="nume"
                    v-model="nume"
                  />
                </div>
                <div class="form-group">
                  <label id="formular" for="prenume">Prenume</label><br />
                  <input
                    class="input is-focused"
                    id="prenume"
                    type="text"
                    placeholder="Prenume"
                    name="prenume"
                    v-model="prenume"
                  />
                </div>
                <div class="form-group">
                  <label id="formular" for="facultate">Facultate</label><br />
                  <input
                    class="input is-focused"
                    id="facultate"
                    type="text"
                    placeholder="Facultate"
                    name="facultate"
                    v-model="facultate"
                  />
                </div>
                <div class="form-group">
                  <label id="an" for="an">An studiu</label>
                  <div class="select is-link">
                    <select id="anStudiu">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <label id="an" for="program">Program universitar</label>
                  <div class="select is-link">
                    <select id="programUniversitar">
                      <option>Licenta</option>
                      <option>Master</option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <label id="an" for="medie">Medie</label>
                  <input
                    class="input is-focused"
                    id="medie"
                    type="text"
                    placeholder="Medie"
                    name="medie"
                    v-model="medie"
                  />
                </div>
                <div class="form-group">
                  <label id="an" for="finantare">Forma finantare</label> 
                  <div class="select is-link">
                    <select id="formaFinantare">
                      <option>Taxa</option>
                      <option>Buget</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label id="formular" for="parola">Parola</label><br />

                <input
                  class="input is-focused"
                  type="password"
                  placeholder="Parola"
                  name="parola"
                  id="parola"
                  v-model="parola"
                />
              </div>
               <router-link to="/profil" >
     <button v-on:click="postStudent()" id="btnRegister" class="button is-info is-rounded">
                Register
              </button>
     </router-link>
            </form>
          </div>
        </div>
      </div>
    </div>
    
      
   
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data(){
      return{
          email:"",
          nume:"",
          prenume:"",
          facultate:"",
          anStudiu:0,
          programUniversitar:"",
          medie:0,
          formaFinantare:"",
          parola:"",
        
      }
  },
  methods:{
     postStudent(){
       this.email=document.getElementById("email").value
       this.nume=document.getElementById("nume").value
        this.facultate=document.getElementById("facultate").value
        this.anStudiu=document.getElementById("anStudiu").value
        this.programUniversitar=document.getElementById("programUniversitar").value;
        this.medie=document.getElementById("medie").value;
        this.formaFinantare=document.getElementById("formaFinantare").value
        this.parola=document.getElementById("parola").value;
        let student={email:this.email,nume:this.nume,facultate:this.facultate,
        anStudiu:this.anStudiu,programUniversitar:this.programUniversitar,parola:this.parola,medie:this.medie,formaFinantare:this.formaFinantare}
        axios.post(`http://localhost:5001/posts/postStudent`, student);
      
    }
  }
  
  }
</script>
<style scoped>
.row {
  width: 50%;
}
.card {
  width: 60%;

  margin-top: 10px;
  margin-left: 500px;
}
.btn {
  border-radius: 0;
}
.form-control {
  border-radius: 0;
}
.imag {
  position: absolute;
  right: 0px;

  height: 91%;
  overflow-y: hidden;
}
.box {
  padding-left: 400px;
}
.title {
  font: italic small-caps bold 24px/2 cursive;

  padding: 75px;
  margin-left: 550px;
}
#formular {
  margin-bottom: 10px;
}
#btnRegister {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 200px;
}
</style>

