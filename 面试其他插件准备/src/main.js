import Vue from 'vue'
import App from './App'
import ElementUI, { Form } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' 
import 'jquery'
import {router } from './config'
// import Vuex from 'vuex'
// Vue.use(Vuex)
import store from './store'
import { Button ,DatePicker} from 'ant-design-vue';
Vue.use(Button)
Vue.use(DatePicker)

Vue.config.productionTip = false
Vue.use(ElementUI)


// const store=new Vuex.Store({
//   state:{
//     num:10,
//     persons: [
//       { id: '1', name: '李白', age: 18 },
//       { id: '2', name: '娜可露露', age: 28 },
     
//     ],
//     str:'我是映射得数据',
//   },
//   getters:{
//     newnum(state){
//       return state.num+"是偶数"
//     },
//     oldnum(state){
//           return function(num){
//              return state.num+num
//           }
//     },
//   },
//   mutations:{
//     commitchangenum(state,payload){
//       this.commit({
//         type:'changenum',
//         num:payload.num
//       })
//     },
//     changepersons(state,payload){
//       Vue.set(state.persons,2,{id: '3', name: '胡白', age: 38})
//         //  state.persons[2]={ id: '3', name: '胡白', age: 38}
//          console.log(state.persons)
//          console.log(this)
//     },
//     changenum(state,payload){
//             state.num+=payload.num
//     },
//     change(state,payload){
//       state.num+=payload.num
// }


//   },
//   actions:{
//     dispatch(context,payload){
//           context.commit({
//             type:'changenum',
//             num:payload.num
//           })  
//     }
//   },
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

