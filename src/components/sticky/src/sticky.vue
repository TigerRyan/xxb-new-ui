<template>
  <div class="xxb-sticky">	
		<div class="xxb-sticky-item" :id="stickyId" >
			<div class='xxb-stickyContent' :class="searchBarFixed == true ? 'xxb-isFixed' :''">
				<slot name='sticky'></slot>
			</div>
		</div>		
  </div>
</template>
<script>
export default {
  name: 'xxb-sticky',
  props: {
		//传入不同的id(当页面有多个吸顶效果时必传)
		stickyId: {
			type: String,
			default: 'stickyId'
		}
	},
  data () {
    return {
			searchBarFixed:false,    //控制固定定位
    }
  },
  
	mounted () {
		//监听页面滑动
		window.addEventListener('scroll', this.handleScroll)
	},

  methods: {
    handleScroll () {
			var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
			let stickyId ='#'+ this.stickyId
			if(document.querySelector(stickyId)){
				var offsetTop = document.querySelector(stickyId).offsetTop
				if (scrollTop > offsetTop) {
					this.searchBarFixed = true
				} else {
					this.searchBarFixed = false
				}
			}
		},
  }
}
</script>

<style lang="less">	
	.xxb-flexview{
		height:auto;
		.xxb-scrollview{
			height: auto;
		}
	}
  .xxb-sticky{
		width: 100%;
		.xxb-sticky-item{
			.xxb-isFixed{
				position:fixed;
				background-color:#Fff;
				top:0;
				z-index:999;
			}
			.xxb-stickyContent {
				width:100%;
			}
		}
  }
</style>