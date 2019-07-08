<template>
  <div>
    <h2 class="sub-header">修改英雄</h2>
    <form>
      <div class="form-group">
        <label for="txtName">姓名</label>
        <input
          type="text"
          class="form-control"
          v-model="formData.name"
          id="txtName"
          placeholder="姓名"
        />
      </div>
      <div class="form-group">
        <label for="gender">性别</label>
        <select class="form-control" id="gender" v-model="formData.gender">
          <option value="男">男</option>
          <option value="女">女</option>
        </select>
      </div>
      <!-- 阻止button按钮默认提交事件 -->
      <button class="btn btn-success">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      // 封装表单数据
      formData:{
        name:'',
        gender:'男'
      }
    }
  },
  methods:{
    add(){
      axios
      .post('http://localhost:3000/heros',this.formData)
      .then((res)=>{
        if(res.status === 201){
          this.$router.push('/heroes')
        } else {
          alert('添加失败')
        }
      })
    }
  }
};
</script>

<style>
</style>
