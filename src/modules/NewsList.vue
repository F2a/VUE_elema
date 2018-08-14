<template>
  <div>
    <router-link to="/"><h3>首页</h3></router-link>
    <ul>
      <li v-for="item in this.$store.state.newsList">
        <router-link :to="'content/'+item.aid">
          {{ item.title }}
        </router-link>
      </li>
    </ul>
    <h4>
      <button @click="postStore('+')">+</button>
      {{ this.$store.state.count }}
      <button @click="postStore('-')">-</button>
    </h4>
    <p>
      {{ this.$store.getters.computed }}
    </p>
  </div>
</template>
<script>
  import * as request from './service'
  import store from '../vuex/store'
  export default {
    name: 'Content',
    data () {
      return {
        title: 'Content',
        newsList: [],
      }
    },
    store,
    methods: {
      postStore(val) {
        if(val === '+'){
          this.$store.commit('increment')
        }else
          if(val === '-'){
          this.$store.commit('decrement')
        }
      },
      async getList () {
        const { data } = await request.getNewsList();
        console.log(data);
        if(data)
          this.$store.commit('getLists', data.result);
          //this.newsList = data.result;
      }
    },
    mounted() {
      const list = this.$store.state.newsList;
      console.log(list);
      if(!(list&&list.length)){
        this.getList();
      }
//      var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
//      this.$http.get(api).then(response => {
//        console.log(response.body);
//        // 注意this的指向
//        this.newsList = response.body.result;
//
//      }, error => {
//        console.log(error);
//      });
    },
  }
</script>
<style>

</style>
