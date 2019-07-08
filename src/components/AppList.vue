<template>
  <div>
        <h2 class="sub-header">Hero List</h2>
        <a class="btn btn-success" href="add.html">Add</a>
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Header</th>
                <th>Header</th>
                <th>Header</th>
                <th>Header</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(value,index) in list :key="index">
                <td>1,001</td>
                <td>Lorem</td>
                <td>ipsum</td>
                <td>dolor</td>
                <td>sit</td>
                <td>
                  <a href="edit.html">edit</a>
                  &nbsp;&nbsp;
                  <a href="javascript:window.confirm('Are you sure?')">delete</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
      return{
        list:[]
      }
    },
    mounted(){
      this.getData()
    },
    methods:{
      getData(){
        axios.get('http://localhost:3000/heros')
        .then((res)=>{
          console.log(res)
          if(res.status === 200){
            this.list = res.data
          }
        })
      }
    }
}
</script>

<style>
    
</style>