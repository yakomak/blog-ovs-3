<template>
<div class="flex">
  <newsitem v-for="item in items" :item="item" :key="item.id" @deleteitem="deleteItem"></newsitem>
</div>
</template>

<script>
import newsitem from './NewsItem'
export default {
  name: 'NewsList',
  props: ['items'],
  components: {
    'newsitem': newsitem
  },
  methods: {
    deleteItem (id) {
      console.log(`delete ${id}`)
      this.$emit('deleteitem', id)
    }
  }
}
</script>

<style scoped>
  ul {
    list-style-type: none;
  }

  .flex {
    display: flex;
    flex-direction: row;
    /* justify-content: space-around; */
    /* justify-content: space-between; */
    justify-content: center;
    flex-wrap: wrap;
  }
</style>

