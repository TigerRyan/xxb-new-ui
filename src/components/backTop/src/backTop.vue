<template>
	<div class="xxb-backTop" @click.stop="scrollTop" v-if="isShow">
	  <slot><i class='iconfont icon-backtop'></i></slot>
	</div>
</template>

<script>
export default {
	name: 'xxb-backTop',

	data() {
		return {
			scroll: '',		     // 顶部滚动距离
			isShow: false	     // 是否显示
		}
	},

	props: {
		content: {           // 滚动区域(class or id, 默认 '#scrollView')
      type: String 
    }
	},

	computed: {
    scrollContent() {
      return document.querySelector(this.content ? this.content : '#scrollView')
    }
  },

	mounted() {
		// 注册滚动事件
		this.scrollContent.addEventListener('scroll', this.handleScroll, true)
	},

	destroy() {
    this.scrollContent.removeEventListener('scroll', this.handleScroll);
  },

	methods: {
		// 滚动监听
		handleScroll() {
			this.scroll = this.scrollContent.scrollTop
			if(this.scroll>100){
				this.isShow=true
			}else{
				this.isShow=false
			}
		},

		// 滚动到顶部
		scrollTop () {
			let timer = setInterval(() => {
				this.scroll -= 100
				this.scrollContent.scrollTop = this.scroll
				//到达顶部，清除定时器
			    if (this.scroll <= 0) {
					clearInterval(timer)
					this.isShow = false
				}
			}, 0)
		}
	}
}
</script>

<style lang="less">
  .xxb-backTop{
		position: fixed;
		bottom: 1rem;
		right: 1rem;
		text-align: center;
		border-radius: 50%;
		i{
			font-size: 2.2rem;
			color: #dedede;
		}
  }
</style>