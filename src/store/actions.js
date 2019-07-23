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
          this.dispatch('getTodos')
        }
      }).catch(error => console.log(error))
  }
}

export default action;