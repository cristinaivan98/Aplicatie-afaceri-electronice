<template>
    <div class="sidebar">
        
        <div class="menu-items">
           
            <router-link to="/editareProdus" active-class="active" tag="button" class=side-btn>
            <div class="link-container">
               Editare produs
            </div>
            </router-link>
            <router-link to="/cautareProduse" active-class="active" tag="button" class=side-btn>
            <div class="link-container">
               Cautare produse
            </div>
            </router-link>
        </div>
        

    </div>
</template>
<script>
import {mapGetters} from "vuex";

export default{
data: function () {
            return {
            
            }
        },  
       
}
</script>
<style scoped lang="css">
.title {
    color: white;
    font-size: 24px;
    margin-top: 10px;
}
.menu-items {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    margin-left: 6px;
}
.menu-items > * {
    margin-top: 40px;
}
.side-btn {
    border: none;
    padding: 15px 0px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    color: rgb(0, 0, 0);
    background-color: transparent;
}
.side-btn:focus {
    outline: none;
}
.side-btn.active {
    position: relative;
    background-color: white;
    color: teal;
    font-weight: 600;
    margin-left: 10px;
    border-radius: 30px 0 0 30px;
}
.side-btn.active::before {
    top: -20px;
}
.side-btn.active::after {
    bottom: -30px;
}
.side-btn.active::before, .side-btn.active::after {
    position: absolute;
    content: "";
    right: 0;
    height: 30px;
    width: 30px;
    background-color: white;
}
.side-btn.active .link-container::before {
    top: -60px;
}
.side-btn.active .link-container::after {
    bottom: -60px;
    z-index: 99;
}
.side-btn.active .link-container::before, .side-btn.active .link-container::after {
    position: absolute;
    content: "";
    right: 0px;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background-color:rgb(136, 245, 178);
}
.imagine{
    display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  padding-top: 20px;
}
.link-container{
filter: grayscale(0%);
filter: gray;
-webkit-filter: grayscale(0%);
filter: none;
transition: 1s ease;
}
.sidebar{
    position: absolute;
  height: 60px;
}

</style>