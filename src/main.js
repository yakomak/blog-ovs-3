// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
// import moment from 'moment'
import _ from 'lodash'
// import axios from 'axios'
// import uuidv4 from 'uuid/v4'

Vue.use(Vuex)

Vue.config.productionTip = false
router.hashbang = false

const store = new Vuex.Store({
  state: {
    posts: [],
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    },
    addPost (state, post) {
      console.log('addPost', state, post)
      state.posts.push({...post})
    },
    deletePost (state, id) {
      state.posts = _.filter(state.posts, (p) => { return p.id !== id })
      // _.remove(state.posts, {id: id})
    }
  }
//     addNews (state) {
//       state.push()
//     },
//     addTask (state, taskItem) {
//       state.taskList.push({...taskItem})
//     },
//     methods: {
//       addPost () {
//         var post = {
//           ...this.newPost,
//           id: ++this.idCounter,
//           created_at: Date.now(),
//           author: 'anonim'
//         }
//         console.log(this.post.author)
//         this.posts.push(post)
//         axios.post('http://localhost:6500/newnews')
//       },
//       deleteItem (id) {
//         console.log(`deletefromroot ${id}`)
//         // debugger
//         if (confirm('Действительно удалить?')) {
//           _.remove(this.posts, (post) => { return post.id === id })
//           this.posts = _.clone(this.posts)
//           console.log(this.posts)
//           axios.post('http://localhost:6500/delnews', {id})
//         }
//       },
//       getNews () {
//         // var storeNews = this.posts  // хранилище новостей
//         // console.log(storeNews)
//         axios.get(`http://localhost:6500/newnews`)
//         .then(response => {
//           this.posts = response.data
//           this.loading = false
//         })
//         .catch(e => {
//           this.errors.push(e)
//         })
//       },
//       saveNews () {
//         this.newPost.id = uuidv4()
//         axios.post('http://localhost:6500/savenews', this.newPost).then((req) => {
//           console.log(req.data)
//         })
//         this.posts.push(this.newPost)
//         this.newPost = {
//           title: 'Novi post',
//           content: 'Novi-novi content',
//           created_at: Date.now(),
//           author: 'anonim'
//         }
//       }
//     }
//   },
//   getters: {
//     getTaskByDate: (state, getters) => (date) => {
//       const day = Math.floor(moment(date).valueOf() / 86400)
//       return _.filter(state.taskList, (e) => { return e.day <= day })
//     }
//   }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
