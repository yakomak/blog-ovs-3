<template>
  <div>
    <div class="create-news-form" >
      <label for="title">Title</label>
      <input type="text" name="title" id="post-title" v-model="newPost.title">
      <label for="author">Author</label>
      <input type="text" name="author" id="post-author" v-model="newPost.author"><br>
      <br>
      <div>
        <label id="for_textarea" for="content">Content</label>
        <textarea name="content" id="post-content" cols="53" rows="4" v-model="newPost.content"></textarea>
      </div><br>
      <button @click="saveNews">Add Post</button>
    </div>
    <hr>
    <!-- Кнопки получения (GET) и сохранения (SAVE) новостей -->
    <!-- <button class="il" @click="getNews">GET News</button>  -->
    <!-- <button class="il" @click="saveNews">save News</button> @click="saveNewsInArchiv"-->
    <!-- <button @click="saveNewsInArchiv">Add Posts in Archiv</button> -->
    <button>Add Posts in Archiv</button>
    <!-- Список новостей  -->
    <div id = 'state'>   <!-- Список новостей  -->
      <p>state: added - {{ this.$store.state.countadded}}</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;deleted - {{ this.$store.state.countdeleted }}</p>
    </div>
    <newslist :items="$store.state.posts" @deleteitem="deleteItem"></newslist>
  </div>
</template>

<script>
import newslist from './NewsList'
// import _ from 'lodash'
import axios from 'axios'
import uuidv4 from 'uuid/v4'
import moment from 'moment'

var now = moment().format('DD.MM.YYYYг, hh:mm')

export default {
  name: 'NewsRoot',
  data () {
    return {
      newPost: {
        title: 'Title',
        content: 'Content etc.',
        created_at: now,
        author: 'Author'
      },
      idCounter: 0,
      posts: []
    }
  },
  // created () {
  //   debugger
  //   this.$on('deleteitem', this.deleteItem)
  // now1},
  methods: {
    addPost () {
      var now1 = moment()
      var post = {
        ...this.newPost,
        id: ++this.idCounter,
        created_at: now1,
        author: 'anonim'
      }
      console.log(this.post.author)
      this.posts.push(post)
      axios.post('http://localhost:6500/newnews')
    },
    deleteItem (id) {
      console.log(`deletefromroot ${id}`)
      this.$store.commit('deletePost', id)
      this.$store.commit('incrementdeleted')
      axios.post('http://localhost:6500/delnews', {id})
    },
    getNews () {
      axios.get(`http://localhost:6500/newnews`)
      .then(response => {
        for (let post of response.data) {
          this.$store.commit('addPost', post)
        }
        this.loading = false
      })
    },
    saveNews () {
      this.newPost.id = uuidv4()
      axios.post('http://localhost:6500/savenews', this.newPost).then((req) => {
        console.log(req.data)
      })
      // this.posts.push(this.newPost)
      this.$store.commit('addPost', this.newPost)
      this.$store.commit('incrementadded')
      this.newPost = {
        title: 'Novi post',
        content: 'Novi-novi content',
        created_at: Date.now(),
        author: 'anonim'
      }
    }
  },
  components: {
    'newslist': newslist
  },
  created: function () {
    axios.get(`http://localhost:6500/newnews`).then(response => {
      console.log(response.data)
      for (let post of response.data) {
        this.$store.commit('addPost', post)
      }
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

#state {
  position: fixed;
  left: 20px; 
  top: 30px;
  background: lightseagreen
}

/* div {
  position: relative;
}

#for_textarea {
  position: absolute;
  left: 120px;
  top: 0px;
}

textarea { 
  position: absolute;
  left: 180px; 
  top: 0px; 
}  */
</style>

