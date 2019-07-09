<template>
  <div>
    <h2 class="sub-header">Hero List</h2>
    <router-link :to="{name:'heroesadd'}" class="btn btn-success">添加</router-link>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>姓名</th>
            <th>性别</th>
            <th>口头禅</th>
            <th>技能</th>
            <th>职业</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in list" :key="item.id">
            <td>{{index+1}}</td>
            <td>{{item.name}}</td>
            <td>{{item.gender}}</td>
            <td>{{item.fath}}</td>
            <td>{{item.hobby}}</td>
            <td>{{item.rule}}</td>
            <td>
              <router-link :to="{name:'heroedit',params:{id:item.id}}">编辑</router-link>
              &nbsp;&nbsp;
              <a href="javascript:" @click="del(item.id)">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 存储获取到的列表数据
      list: []
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.axios
      .get("heros")
      .then(res => {
        if (res.status === 200) {
          this.list = res.data;
        } else {
          alert('获取数据失败')
        }
      }).catch((err)=>{
        alert('服务器异常'+err)
      })
    },
    del(id){
      // 弹出确认框
      if(!confirm('确认删除英雄吗？')){
        return false
      }
      // 发请求，删除
      this.axios
      .delete(`heros/${id}`)
      .then((res)=>{
        if(res.status === 200){
          // 重新加载
          this.getData()
        } else (
          alert('删除失败')
        )
      })
      .catch((err)=>{
        alert('删除失败'+err)
      })
      
    }
  }
};
</script>

<style>
</style>