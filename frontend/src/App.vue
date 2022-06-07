<template>
  <div class="container">
    <div class="text">Todo App</div>
    <todo-list></todo-list>
    <modal-add></modal-add>
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";
import ModalAdd from "./components/ModalAdd.vue";

export default {
  name: "App",
  components: { TodoList, ModalAdd },
};
</script>

<style>
.text {
  color: #ffdd29;
  font-size: 80px;
  margin-top: 8vw;
  margin-bottom: 30px;
  text-align: center;
}
body {
  background-color: #15336c;
}
</style>
