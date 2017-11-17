// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import moment from 'moment'
import _ from 'lodash'

Vue.use(Vuex)

Vue.config.productionTip = false
router.hashbang = false

const store = new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    addNews (state) {
      state.push()
    },
    addTask (state, taskItem) {
      state.taskList.push({...taskItem})
    }
  },
  getters: {
    getTaskByDate: (state, getters) => (date) => {
      const day = Math.floor(moment(date).valueOf() / 86400)
      return _.filter(state.taskList, (e) => { return e.day <= day })
    }
  }

})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
