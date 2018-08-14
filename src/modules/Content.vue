<template>
  <div id="content">
    <router-link to="/news"><h3>上一页</h3></router-link>
    <h3>{{ news.title }}</h3>
    <div v-html="news.content"></div>
  </div>
</template>
<script >
  export default {
    name: 'Content',
    data () {
      return {
        title: 'Content',
        news: {
          title: '111'
        }
      }
    },
    methods: {},
    mounted() {
      console.log(this.$route.params);
      var api = `http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid=${this.$route.params.aid}`;
      this.$http.get(api).then(response => {
        console.log(response.body);
        // 注意this的指向
        this.news = response.body.result[0];

      }, error => {
        console.log(error);
      });
    }
  }
</script>
<style >
</style>
