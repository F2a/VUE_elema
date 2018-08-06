<template>
  <div>
    Im Home
    <button @click="getJson">数据请求</button>
  </div>
</template>
<script>
  /*
    请求数据的方式

    vue-resource  官方插件

    axios

    fetch-jsonp
  */
  import request from '../common/request'
  export default {
    name: 'Header',
    data () {
      return {
        txt: '',
        todo: [],
        data: {},
      }
    },
    methods: {
      getJson() {
        console.log('JOSN');
        var api = 'http://jsonplaceholder.typicode.com/users';
        this.$http.get(api).then(response => {

          console.log(response.body);
          // 注意this的指向
          this.data = response.body;

        }, error => {
          console.log(error);
        });
      }
    },
    mounted() {
      request('users');
    }
  }
</script>
<style scoped>
</style>
