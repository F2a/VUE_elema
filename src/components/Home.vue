<template>
  <div>
    <v-header ref="header" :txt="txt" :getJson="getJson" :home="this"/>
    <button @click="getSon">子传父</button>
    <button @click="getJson">数据请求</button>
    <v-footer />
  </div>
</template>
<script>
  /*
    请求数据的方式

    vue-resource  官方插件

    axios

    fetch-jsonp
  */
  import Header from './Header.vue';
  import Footer from './Footer.vue';
  import request from '../common/request'
  export default {
    name: 'Header',
    data () {
      return {
        txt: 'to TODO!',
        todo: [],
        data: {},
      }
    },
    components: {
      'v-header': Header,
      'v-footer': Footer,
    },
    methods: {
      getSon() {
        console.log(this.$refs.header.title, 1);
      },
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
      // request('users');
    }
  }
</script>
<style scoped>
</style>
