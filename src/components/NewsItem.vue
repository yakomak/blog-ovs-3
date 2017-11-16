<template>
  <div class="blu">
    <!-- <h2> {{item.id}}) </h2> -->
    <button class="del il" @click="deleteItem" title="delete news">&times;</button> <!-- символ "х" -->
    <div>
      <h3 class="il"> {{item.title}}</h3>
      <br /><p class="il">{{ item.content }}</p>
      <br /><p class="il">{{ item.created_at }}</p>
      <p class="il">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ item.author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],
  methods: {
    deleteItem () {
      this.$emit('deleteitem', this.item.id)
    }
  }
}
</script>

<style scoped>
  hr {
    width: 430px;
  }
  div {
    list-style-type: none;
    text-align: center;
    border: 2px solid red;
    margin: 3px;
    width: 340px;
    height: 170px; 
  }

  .il {
    display: inline-block;
  }

  .del {
    /* position: relative; */
    position: absolute;
    top: 4%;
    right: 0.5%; 
  }
  .blu {
    border: 0px solid blue;
    position: relative;
  }
</style>

