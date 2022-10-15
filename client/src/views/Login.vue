<template>
    <div>
         <div class="card-header text-white bg-primary">
          <h4   class=" title is-1">Autentificare student</h4>
        </div>
        
    <div class="row">
      <div class="card mx-auto" >
         
       
        <div class="card-body">
          <form >
            <div class="form-group">
              <label id="formular" for="username">Email</label><br/>
              <input   class="input is-focused"
                id="email"
                type="text"
                placeholder="Email"
                name="email"
                v-model="email"
              
              >
            </div>
            <div class="form-group">
              <label id="formular" for="parola">Parola</label><br/>
              
              <input class="input is-focused"
                type="password"
               
                placeholder="Parola"
                name="parola"
                id="parola"
                v-model="parola"
              >
            </div>
            <router-link to="/profil" >
     <button v-on:click="loginStudent()"  id="btnLogin" class="button is-info is-rounded">Log in</button>
        </router-link>
           </form>
     
    
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
          parola:"",
        
      }
  },
    methods:{
     async loginStudent(){
       this.email=document.getElementById("email").value;
       this.parola=document.getElementById("parola").value
       let auth={email:this.email,parola:this.parola}
        let stud = await axios.post(`http://localhost:5001/posts/loginStudent`, auth);
        let student=stud.data
        if(student){
         // console.log(student)
          localStorage.setItem('student', JSON.stringify(student));
          
        }
        console.log("Se afiseaza localstorage "+localStorage.studentLogat)
        localStorage.setItem('logat', 'true');
      let ceva= localStorage.getItem('logat')
      console.log(ceva)
         
    
    }
  }
 
  }
</script>
<style scoped>
.row{
  width: 50%;
   
}
.card {
  width: 60%;
 
  margin-top: 100px;
  margin-left: 500px;

}
.btn {
  border-radius: 0;
}
.form-control {
  border-radius: 0;
}
.imag{
  position: absolute;
  right: 0px;  
  
   height: 91%;
    overflow-y: hidden
 
 
}
.box{
    padding-left: 400px;
   
}
.title{
     
     font: italic small-caps bold 24px/2 cursive;
   
      padding: 75px;
      margin-left: 550px;
    
}
#formular{
    margin-top: 10px;
    margin-bottom: 10px;
}
#btnLogin{
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 200px;
}
</style>
