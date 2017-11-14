<template>
  <div>
    <div class="create-news-form" >
      <label for="title">Title</label>
      <input type="text" name="title" id="post-title" v-model="newPost.title"><br>
      <label for="content">Content</label>
      <textarea name="content" id="post-content" cols="37" rows="4" v-model="newPost.content"></textarea><br>
      <button @click="saveNews">Add Post</button>
    </div>
    <hr> 
    <!-- Кнопки получения (GET) и сохранения (SAVE) новостей -->
    <!-- <button class="il" @click="getNews">GET News</button>  -->
    <!-- <button class="il" @click="saveNews">save News</button> @click="saveNewsInArchiv"-->
    <button @click="saveNewsInArchiv">Add Posts in Archiv</button>
    <!-- Список новостей  -->
    <newslist :items="posts" @deleteitem="deleteItem"></newslist>
  </div>
</template>

<script>
import newslist from './NewsList'
import _ from 'lodash'
import axios from 'axios'
import uuidv4 from 'uuid/v4'

export default {
  name: 'NewsRoot',
  data () {
    return {
      newPost: {
        title: 'Title',
        content: 'Lorem etc.'// ,
        // created_at: 'now',
        // author: 'anonimus'
      },
      idCounter: 0,
      posts: []
    }
  },
  // created () {
  //   debugger
  //   this.$on('deleteitem', this.deleteItem)
  // },
  methods: {
    addPost () {
      var post = {
        ...this.newPost,
        id: ++this.idCounter,
        created_at: Date.now(),
        author: 'anonim'
      }
      console.log(this.post.author)
      this.posts.push(post)
      axios.post('http://localhost:6500/newnews')
    },
    deleteItem (id) {
      console.log(`deletefromroot ${id}`)
      // debugger
      _.remove(this.posts, (post) => { return post.id === id })
      this.posts = _.clone(this.posts)
      console.log(this.posts)
      axios.post('http://localhost:6500/delnews', {id})
    },
    getNews () {
      // var storeNews = this.posts  // хранилище новостей
      // console.log(storeNews)
      axios.get(`http://localhost:6500/newnews`)
      .then(response => {
        this.posts = response.data
        this.loading = false
      })
      .catch(e => {
        this.errors.push(e)
      })
    },
    saveNews () {
      this.newPost.id = uuidv4()
      axios.post('http://localhost:6500/savenews', this.newPost).then((req) => {
        console.log(req.data)
      })
      this.posts.push(this.newPost)
      this.newPost = {
        title: 'Novi post',
        content: 'Novi-novi content'
      }
    },
    saveNewsInArchiv () {
      axios.post('http://localhost:6500/savenewsinarchiv', this.newPost).then((req) => {
        console.log('in Archiv')
      })
    }
  },
  components: {
    'newslist': newslist
  },
  created: function () {
    axios.get(`http://localhost:6500/newnews`)
    .then(response => {
      this.posts = response.data
      this.loading = false
    })
  }
}
</script>

<style scoped>
hr {
  width: 400px
}

.il {
  display: inline;
}
</style>

