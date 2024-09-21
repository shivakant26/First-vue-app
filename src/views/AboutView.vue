<script>
import Instance from "../api/apiConfig.js"
export default{
  data(){
    return{
      isLoading:true,
      data:[],
    }
  },
  mounted() {
    this.fetchData();
  },
  methods:{
    async fetchData() {
      try {
        const response = await Instance.get('/posts');
        this.data = response.data;
        this.isLoading = false;
      } catch (error) {
        console.error('Error fetching data:', error);
        this.isLoading = false;
      }
    },
  },
}
</script>
<template>
  <div class="about">
    <div class="center-wr">
      <div class="loader" v-if="isLoading">Loading...</div>
      <div class="card-container">
        <div class="cards" v-for="item in data" :key="item.id">
            <h5>{{item.title}}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.about{
  padding: 70px 0px;
}
.card-container{
  text-align: center;
}
.cards{
  width: 22%;
  border-radius: 5px;
  display: inline-block;
  margin: 10px;
  padding: 40px;
  box-shadow: 0px 0px 8px rgba(175, 17, 17, 0.2);
}

.loader{
  display: flex;
  height: 80vh;
  justify-content: center;
  align-items: center;
}
</style>
