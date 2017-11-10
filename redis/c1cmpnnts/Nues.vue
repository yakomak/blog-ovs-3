<template>

  <div>     <!-- <div class='blog container'> --> 

    <h2>{{title}}</h2>

    <!-- <button type="button" v-on:click="createnews()">ДобавьНовость</button> -->
    <input type="button" value="ДобавьНовость" v-on:click="createNews">

    <hr style="width:280px"> <!-- =============================================================== -->
    <div class="row">
    <!-- <div class="col-sm-6 col-md-4" v-for="post in posts" style="height: 400px;"> -->
    <div class="col-sm-6 col-md-4" v-for="post in posts" style="height: 100px;">
      <div class="thumbnail">
        <!-- <img src="http://placehold.it/250x100">            картинкозаменитель  -->
        <div class="caption">
          <h3>{{post.title | uppercase}}</h3>
           <p>{{post.body}}</p>
           <p>User: {{post.autorName}}</p>
           <p>{{post.date_time}}</p>
          <p>
            <a href="#" class="btn btn-primary" role="button" v-on:click="rdMorePost(post)">More..</a>
            <a href="#" class="btn btn-danger" role="button" v-on:click="deletePost(post)">Del</a>
          </p>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
// var moment = require('moment')

export default {
  name: 'newslist',
  props: ['posts'],
  data () {
    return {
      title: 'Blog App',
      newPost: {},
      posts: this.postes
   // postes: postes
    }
  },
  methods: {
    deletePost: function (post) {
      console.log(post)
      this.posts.splice(this.posts.indexOf(post), 1)
    },
    rdMorePost: function (post) {
      this.posts.rm = true
    },
    createNews () {
      this.$router.push('/createnews')
    }
  }
}

 // ,

  // created: function () {
  //   this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function (response) {
  //
     // console.log(response.data);
  //     this.posts = response.data
  //   })
  // }

</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->

<style scoped>

</style>


