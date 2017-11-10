<template>
  <div>
     <div class="modal-dialog">
          <!-- Add Post Content  -->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Add New Post</h4>
          </div>

          <div class="modal-body">
            <div class="form-group">
              <label for="title">Title:</label>
               <input type="title" class="form-control" id="title" v-model="newPost.title"> 
              <!-- <input type="title" class="form-control" id="title" > -->
            </div>

            <div class="form-group">
              <label for="body">Content:</label>
               <textarea class="form-control" rows="5" id="body" v-model="newPost.body"></textarea> 
              <!-- <textarea class="form-control" rows="5" id="body" ></textarea> -->
            </div>

            <div class="form-group">
              <label for="autorName">Autor:</label>
               <input type="autorName" class="form-control" id="autorName" v-model="newPost.autorName"> 
              <!-- <input type="autorName" class="form-control" id="autorName" > -->
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal" v-on:click="AddPost()">Add</button>
          </div>
        </div>
      </div> 
      
      <!-- <form action="">
        <div class="form-group">
          <label for="title">Title:</label>
          <input type="title" class="form-control" id="title">
        </div>
      </form> -->
      <newslist posts="posts123"></newslist>
    </div>
</template>

<script>
export default {
  name: 'createnews',
  props: ['postes'],
  data () {
    return {
      title: 'Blog App',
      newPost: {},
      posts123: this.postes
    }
  },
  methods: {
    AddPost: function () {
      this.posts.push({
        'userId': 1,
        'userName': this.newPost.userName || 'anonimus',
        'id': this.posts.length + 1,
        'title': this.newPost.title,
        'body': this.newPost.body,
        'rm': false
     //   'date_time': moment().format('LT') + '   ' + moment().format('L')
      })

      this.newPost = {}
    }
  }
}
</script>

<style scoped>

</style>


