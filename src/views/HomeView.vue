<template>
  <div class="home">
    <div class="center-wr">
      <h1>CRUD Operations in Vue.js (Without API)</h1>
      <input v-model="newItem" placeholder="Enter new item" />
      <button @click="addItem">Add Item</button>
      <ul>
        <li v-for="(item, index) in items" :key="index">
          <span v-if="!editIndex.includes(index)">{{ item }}</span>
          <input v-else v-model="items[index]" />
          <button @click="editItem(index)">Edit</button>
          <button @click="updateItem(index)" v-if="editIndex.includes(index)">Update</button>
          <button @click="deleteItem(index)">Delete</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newItem: "",          
      items: [],      
      editIndex: []
    };
  },
  methods: {
    // Create - Add new item
    addItem() {
      if (this.newItem.trim()) {
        this.items.push(this.newItem); 
        this.newItem = "";             
      }
    },
    editItem(index) {
      if (!this.editIndex.includes(index)) {
        this.editIndex.push(index);
      }
    },
    updateItem(index) {
      this.editIndex = this.editIndex.filter((i) => i !== index); 
    },
    deleteItem(index) {
      this.items.splice(index, 1);
    }
  }
};
</script>

<style scoped>
.home{
  padding: 80px 0px;
}
button {
  margin-left: 10px;
}
input {
  margin-right: 10px;
}
</style>

