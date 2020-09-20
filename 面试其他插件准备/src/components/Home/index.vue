<template>
  <div id="home">
    
          我是home组件<br>
        
          <button @click="MuChangecount">MU加1</button><br>
           <button @click="AcChangecount">AC加1</button>
          <h1>{{count}}</h1>
          <h1>{{changecount}}</h1>
          <hr>
          <h1>{{count2}}</h1>
          <hr>
          <h1>{{change}}</h1>
           <button @click="MuChange">儿子Mu加1</button>
             <button @click="AcChange">儿子ac加1</button>
             
  </div>
</template>
<script>
import { createNamespacedHelpers,  } from 'vuex'
const {mapGetters,mapMutations,mapActions,mapState}=createNamespacedHelpers('first')

export default{
         data(){
     return{

    }
} ,
methods:{
        clickme(){

        },
        ...mapMutations(['MuChangecount']),
        ...mapMutations({
          MuChange:"seconld/MuChange"
        }),
         
        
        ...mapActions(['AcChangecount']),
         ...mapActions({
           AcChange:'seconld/AcChange'
         }),

},
computed:{
     ...mapGetters(['changecount']),
      ...mapGetters({
        change:"seconld/change"
      }),
     ...mapState({
          count:state=>state.count ,
          count2:state=>state.seconld.count
     })
     
},
  
}

</script>
