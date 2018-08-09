<template>
  <xxb-layout class="not-found">
     <div class="shuzi">
			    <!-- <img src="../assets/logo.png" alt=""> -->
			</div>
			<div class="katong">
				<img src="../assets/logo.png" alt="">
				<p>Sorry,您访问的页面不存在哦...</p>
			</div>
			<div class="btn">
			    <button type="primary" round @click="go(0)">返回系统首页</button>
			    <button type="danger" round @click="go(1)">返回继续操作</button>
			</div>  
  </xxb-layout>
</template>

<script>
export default {
  name: 'notFound',
  data(){
    return{

    }
  },
  methods: {  
    go(type){ 
      type ? window.history.go(-1):this.$router.push({path: '/'})
    }  
  }
  
}
</script>

<style lang="less" scoped>
  .not-found {
    width:20rem;
    margin: 0 auto;
    text-align: center;
    box-sizing: border-box;
    padding-top:10rem;
    color:#444;
    button{
      border:0;
      background-color: #a9d9f0;
      color:#fff;
      width: 5rem;
      height: 1.5rem;
      border-radius: .4rem;
      line-height: 1.5rem;
      margin-top:1rem;
    }
  }
</style>
