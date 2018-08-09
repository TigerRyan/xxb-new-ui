<template>
  <xxb-layout class="demo-sticky">
  	<xxb-navbar class="top">
  		<div slot="left" @click="$router.go(-1)"><i class="iconfont icon-left"></i></div>
  		<div slot="center"><p>Sticky</p></div>
  	</xxb-navbar>

    <xxb-sticky stickyId='scrollTopA'>
			<p class="title" slot='sticky'>感觉有点燃</p>
		</xxb-sticky>

		<div class='content'>
			<ul>
				<li v-for="i in 20">看扶摇+{{i}}</li>
			</ul>
		</div>
    
		<xxb-sticky stickyId='scrollTopB'>
			<p class="title" slot='sticky'>这样挺好的O(∩_∩)O哈哈~</p>
		</xxb-sticky>

		<div class='content'>
			<ul>
				<li v-for="i in 20">2</li>
			</ul>
		</div>
		
		<xxb-sticky stickyId='scrollTopC' class='scrollTopC'>
			<ul slot='sticky'>
				<li v-for='(item,index) in textList' :key='index'>{{item}}</li>
			</ul>
		</xxb-sticky>		

		<div class='content'>
			<p v-for="i in 30">3</p>
		</div>
	</xxb-layout>
</template>

<script>

export default {
  name: 'demo-sticky',

  data () {
    return {
      textList: ['111','333','444','555'],
    }
  }
}
</script>

<style scoped lang="less">
  .demo-sticky{
		padding-top: 2.25rem;
		.scrollTopC ul{
			border-bottom: 1px solid #ddd;
			width:100%;
			height: 40px;
			line-height: 40px;
			display: flex;
			margin: 0;
			padding: 0;
			list-style: none;
			li{
				font-size: 0.8rem;
				text-align: center;
				flex: 1;
				i {
					font-size: 0.9rem;
					padding-left: 5px;
					color: #ccc;
				}
			}		
		}
		.title{
			color: #999;
			height: 2.25rem;
			line-height: 2.25rem;
			padding-left: .7rem;
		}
		.content{
			ul{
				margin: 0;
				padding: 0;
				list-style: none;
				li{
					height: 50px;
					background: #ddd;
					margin-bottom: 5px;
				}
			}
			p{
				height: 2rem;
			}
		}
  }
</style>