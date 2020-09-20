<template>
  <div id="app">
    <router-view></router-view>
    
  <div class="first" @click="AcChangeNum" ref="change">变色吧</div>
  <div @click="MuChangeNum ">Mu加1</div>
  <h1>{{num}}</h1>
  <h1>{{changeNum}}</h1>

   <a-button type="primary">
      Primary
    </a-button>
    <hr>
    <a-date-picker @change="onChange" />
    <br />
    <!-- <a-month-picker placeholder="Select month" @change="onChange" />
    <br />
    <a-range-picker @change="onChange" />
    <br />
    <a-week-picker placeholder="Select week" @change="onChange" /> -->
  
  
 
 <router-link :to="{name:'home'}">首页</router-link>
  </div>
</template>


<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'

import {fun} from './new.js'

 export default {
  data(){
    return{
     
    }
  },
  methods:{
   
           clickme(){

           },
           ...mapMutations(['MuChangeNum']),
           ...mapActions(['AcChangeNum']),
           onChange(date, dateString) {
      console.log(date, dateString);
    },
    
  },
  computed:{
    ...mapState({
      num:state=>state.num
    }),
    ...mapGetters(['changeNum'])
  }
   
  
  
}
</script>

<style>
#app {
 position: relative;
}
.header{
  width: 100%;
  height: 4rem;
  background: rgb(64, 64, 172);
  color: white;
  text-align: center;
  line-height: 4rem;
  font-size: 2rem;
}
.sp{
  position: absolute;
  left: 1rem;
}
.message{
  border-bottom: 2px solid rgb(209, 206, 206) ;
}
 .message span{
  color: rgb(8, 8, 8);
  font-size: 2rem;
  background: bisque;
}
</style>
