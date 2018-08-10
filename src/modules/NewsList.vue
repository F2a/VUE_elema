<template>
  <div>
    <ul>
      <li v-for="item in newsList">
        <router-link :to="'content/'+item.aid">
          {{ item.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  import request from '../common/request'
  export default {
    name: 'Content',
    data () {
      return {
        title: 'Content',
        newsList: [],
      }
    },
    methods: {},
    mounted() {
      var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
      this.$http.get(api).then(response => {
        console.log(response.body);
        // 注意this的指向
        this.newsList = response.body.result;

      }, error => {
        console.log(error);
      });
    },
  }
</script>
<style>

</style>
