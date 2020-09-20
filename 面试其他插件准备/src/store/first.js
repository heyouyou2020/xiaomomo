import createPersistedState from 'vuex-persistedstate'
export default{
    namespaced:true,
    plugins: [createPersistedState({
        reducer(state){
            return{
                count:state.count,
                
            }
        }
    }
        
    )],
    state:{
        count:5
    },
    getters:{
        changecount(state){
            return state.count+1
        }
    },
    mutations:{
        MuChangecount(state){
            state.count++
        }
    },
    actions:{
        AcChangecount({commit}){
     commit({
         type:'MuChangecount'
     })
        }
    },
    modules:{
         seconld:{
            namespaced:true,
            state:{
                count:10
            },
            getters:{
                change(state){
                    return state.count+2
                }
            },
            mutations:{
                MuChange(state){
                    state.count++
                }
            },
            actions:{
                AcChange({commit}){
             commit({
                 type:'MuChange'
             })
                }
            },
            
         },
    },
}