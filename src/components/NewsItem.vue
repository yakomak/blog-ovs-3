<template>
  <div>
    <!-- <h2> {{item.id}}) </h2> -->
    <h3> {{item.title}}</h3>
    <p class="il">{{ item.content }}</p>
    <button @click="deleteItem">X</button>
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
    width: 440px;
  }
  div {
    list-style-type: none;
    text-align: center;
    border: 2px solid red;
    margin: 3px;
    width: 340px;
  }

  .il {
    display: inline-block;
  }
</style>

