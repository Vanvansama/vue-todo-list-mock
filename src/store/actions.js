import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);



const action = {
  getTodos({ commit }) {
    Vue.axios
      .get("http://5d366dcf86300e0014b641f1.mockapi.io/api/v1/todolist")
      .then((response) => {
        commit('setTodoList', { list: response.data })
      }).catch(error => console.log(error))
  },
  addTodo(context, data) {
    Vue.axios
      .post("http://5d366dcf86300e0014b641f1.mockapi.io/api/v1/todolist", data)
      .then((response)=>{
        if (response.status === 201) {
          context.dispatch('getTodos')
        }
      }).catch(error => console.log(error))
  },
  updateTodo(context , data) {
    Vue.axios
      .put(`http://5d366dcf86300e0014b641f1.mockapi.io/api/v1//todolist/${data.id}`, data)
      .then((response)=>{
        if (response.status === 200) {
          context.dispatch('getTodos');
        }
      }).catch(error => console.log(error))
  },
  deleteTodo(context, data) {

  }
}

export default action;