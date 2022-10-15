<template>
    <div class="dashboard">
        <Sidebar />
        <div class="content" >
           <router-view/>
        </div>
    </div>
</template>
<script>

import Sidebar from "../components/Sidebar.vue"
export default{
    name:"Home",
    components:{
        Sidebar
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
</style>
