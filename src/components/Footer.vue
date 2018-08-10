<template>
  <div>
    <button @click="onNews">非父子传值接收</button>
  </div>
</template>
<script>
  import VueEvent from '../common/emit.js'
  export default {
    name: 'Footer',
    // 父传子
    props: ['txt', 'getJson', 'home'],
    data () {
      return {
        title: 'son02Footer',
      }
    },
    methods: {
      onNews (){
        VueEvent.$on('news', (data) => {
          console.log(data);
        })
      }
    },
    mounted() {
      VueEvent.$on('news', (data) => {
        console.log(data);
      })
    }
  }
</script>
<style >
</style>
