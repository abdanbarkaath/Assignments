import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  actions: {
    productaction:(store,employee)=>{
      store.commit('mutateproduct',employee)
      // console.log("action-"+employee);
    }
  },
  mutations: {
    mutateproduct:(store,employee)=>{
      store.employees = employee
      // console.log("mutate"+employee);
    }
  },
  state: {
    employees:{}
  },
  getters:{
    people: state=>state.employees
  }
});
