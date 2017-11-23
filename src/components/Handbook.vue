<template>
  <div>
    <div class="create-news-form" >
      <h1 for="handbook">Handbook</h1>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'NewsRoot',
  data () {
    return {
      newPost: {
        title: 'Title',
        content: 'Lorem etc.',
        created_at: 'now',
        author: 'anonimus'
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
    },
    deleteItem () {
    },
    getNews () {
    },
    saveNews () {
    }
  },
  components: {
  },
  created: function () {
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

