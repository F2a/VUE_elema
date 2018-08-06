<template>
  <div style="width: 300px">
    <div id="header">
      <input type="text" v-model="txt" @keydown="enterAdd">
      <button @click="add">添加</button>
    </div>
    <h2>待完成</h2>
    <ul>
      <li v-for="(value, index) in todo" v-if="!value.finished">
        <input type="checkbox" v-model="value.finished" @change="changeStatus()">
        {{ index + 1 }}---{{ value.txt }}
        <span style="margin-left: 15px" @click="deleteTodo(index)">删除</span>
      </li>
    </ul>
    <h2>已完成</h2>
    <ul>
      <li v-for="(value, index) in todo" v-if="value.finished">
        <input type="checkbox" v-model="value.finished" @change="changeStatus()">
        {{ index + 1 }}---{{ value.txt }}
        <span style="margin-left: 15px" @click="deleteTodo(index)">删除</span>
      </li>
    </ul>
  </div>
</template>
<script>
  import storage from './../utils'
  export default {
    name: 'Todo',
    data () {
      return {
        txt: '',
        todo: [],
      }
    },
    mounted() {
      var todoList = storage.getStorage('todoList');
      if(todoList){
        this.todo = todoList;
      }
    },
    methods: {
      add() {
        this.todo.push({
          txt: this.txt,
          finished: false
        })
        this.txt = '';
        storage.setStorage('todoList', this.todo);
      },
      enterAdd(e) {
        if(e.keyCode === 13){
         this.add();
        }
      },
      deleteTodo(i) {
        this.todo.splice(i, 1)
      },
      changeStatus() {
        storage.setStorage('todoList', this.todo);
      }
    }
  }
</script>
<style scoped>
</style>
