import Vue from 'vue'
import Vuex from 'vuex'
import first from './first'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)
export default new Vuex.Store({
    plugins: [createPersistedState({
        // reducer(state){
        //     return{
        //         num:state.num,
        //         count:first.state.count
        //     }
        // }
    }
        
    )],
  
    state:{
        num:20
    },
    getters:{
        changeNum(state){
            return state.num+1
        }
    },
    mutations:{
        MuChangeNum(state){
            state.num++
        }
    },
    actions:{
        AcChangeNum({commit}){
               commit({
                   type:'MuChangeNum',
               })
        }
    },
    modules:{ 
        first:first,
    }
    
})


