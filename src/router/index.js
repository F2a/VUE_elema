import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/modules/HelloWorld'
import Todo from '@/modules/Todo'
import News from '@/modules/NewsList'
import Content from '@/modules/Content'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/todo',
      name: 'Todo',
      component: Todo
    }, {
      path: '/news',
      name: 'News',
      component: News
    }, {
      path: '/content/:aid',
      name: 'Content',
      component: Content
    }
  ]
})
