<template>
  <div 
    class="xxb-infinites-scroll" 
    @touchmove="touchMove($event)" 
    @touchstart='touchstart($event)' 
    @touchend="touchEnd($event)"
    :style="{ 'height': scrollContentHeight+'px' }" 
  >
    <!-- 下拉展示区域 -->
    <div class="xxb-pull-down-drag" ref="dragArea" :class="isPull" :style="{'height':top+'px'}">
      <slot name="top" v-if="!isRefreshs">
        <div class="xxb-pull-down-drag-content">
          <i class="iconfont icon-refresh xxb-icon-refresh" :style="{'transform': 'rotate(' + diff + 'deg'}"></i>
          <div class="xxb-update">
            <span class="xxb-update-span">{{pullDownText}}</span>
            <p v-if="pullDownTime" class="xxb-update-p">上次更新 {{pullDownTime}}</p>
          </div>
        </div>
      </slot>

      <div class="xxb-refresh" v-if="isRefreshs">
        <img class="xxb-refresh-img" src="../../../assets/pullDown/loading.gif" />
        <div class="xxb-update">
          <span class="xxb-update-span">刷新中...</span>
          <p v-if="pullDownTime" class="xxb-update-time">上次更新 {{pullDownTime}}</p>
        </div>
      </div>
    </div>

    <!-- 内容区域 -->
    <div ref="srcollViewConent" class="xxb-scoll-view-content" :class="isPull" :style="{'transform': 'translate3d(0, ' + top + 'px, 0)'}" >
      <!-- 列表 -->
      <slot></slot>
      
      <div ref="tag" class="xxb-sign-tag"></div>

      <div class="xxb-infinites-scroll-donetip" v-show="!isLoading && isDone">
        <slot name="doneTip">没有更多数据了</slot>
      </div>

      <div class="xxb-infinites-scroll-loading" v-show="isLoading">
        <slot name="loadingTip">加载中...</slot>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
window.$xxb = window.$xxb || new Vue()
export default {
  name:'xxb-infinite-scroll',
  data(){
    return {
      clientHeight: null,                // 浏览器视口高度 
      scrollContentHeight: null,         // 内容高度
      startY: 0,                         // 按下的y抽距离
      startX: 0,                         // 按下的x抽距离
      startScroll: 0,                    // 滚动的距离
      top: 0,                            // 下拉的距离
      isPull: '',                        // 放下拉class
      isRefreshs: false,                 // 是否刷新
      diff: null,                        // 旋转的度数
      pullDownText: '下拉可以刷新',        // 文本(下拉可以刷新，释放刷新，刷新完成）
      pullDownTime: '',                  // 上次刷新时间
      isLoading: false,                  // 正在加载状态
      isDone: false                      // 是否加载完毕 
    }
  },

  props:{
    // 下拉刷新调用方法
    onRefresh: {                                                    
      type: Function,
      default: ()=>{}
    },
    
    // 上拉加载调用方法
    onInfinite: {  
      type: Function,
      default: ()=>{}
    },
  },

  mounted(){
    // 内容高度       
    this.scrollContentHeight = this.$refs.srcollViewConent.offsetHeight 
    // 浏览器视口高度
    this.clientHeight = document.body.clientHeight || document.documentElement.clientHeight
    // 等待 DOM 更新后执行
    this.$nextTick(this.init)
  },

  activated() {
    // 等待 DOM 更新后执行
    this.$nextTick(this.init)
  },

  methods:{
    init(){
      // 事件监听：单次数据加载完毕
      window.$xxb.$on('xxb.infinitescroll.loadedOnce', () => {
        this.isLoading = false
        this.isDone = false
      })

      // 事件监听：全部数据加载完毕
      window.$xxb.$on('xxb.infinitescroll.loadedAll', () => {
        this.isLoading = false
        this.isDone = true
      })
    },

    touchstart(e){
      this.isPull = ''                          // 清除‘pull’class名
      this.startY = e.targetTouches[0].pageY;   // 按下的y抽距离
      this.startX = e.targetTouches[0].pageX;   // 按下的x抽距离
    },

    touchMove(e){
      // 移动的距离
      let diff = e.targetTouches[0].pageY - this.startY 
      // 滚动区域上边距离页面上边的距离
      let scrollTop = this.$refs.srcollViewConent.getBoundingClientRect().top

      if(scrollTop <= 146 && scrollTop >= 0){
        if(diff > 0){
  　　　　  e.preventDefault()  // 取消事件的默认动作                                      
  　　　 }else{
  　　　　  return 　　
  　　　 }
        // 改变拉取的幅度
        this.top = Math.floor(diff*0.25)
        // 改变旋转幅度
        this.diff = Math.floor(diff*0.6)

        if (this.top >= 47) {
          this.pullDownText = '释放立即刷新'
        }else{
          this.pullDownText = '下拉可以刷新'
        }

        // 设置最大旋转度数
        if(this.diff >= 241){
          this.diff = 241
        }

        // 禁止上拉
        if(this.top <= 0 ){
          this.top = 0
        };

        // 设置下拉最大高度
        if(this.top >= 100){
          this.top = 100
        };
      }else{
        const tagOffsetTop = this.$refs.tag.getBoundingClientRect().top
        if(this.isLoading || this.isDone){
          return
        }
        if (diff <0 && tagOffsetTop <= this.clientHeight + this.clientHeight / 10) {
          this.isLoading = true
          this.onInfinite()
        }
      }
    },

    touchEnd(e){
      this.isPull = 'pull'
      let scrollTop = this.$refs.srcollViewConent.getBoundingClientRect().top
      if(scrollTop <= 146 && scrollTop >= 0){
        // 当滑动的距离大于等于47,则刷新,否则不刷新
        if (this.top >= 47) {
          //获取系统当前时间
          var date = new Date();
          var pullDownTime = (date.getMonth()+1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes();

          if(localStorage.getItem('pullDownTime')){
            this.pullDownTime = localStorage.getItem('pullDownTime')
          }

          localStorage.setItem('pullDownTime',pullDownTime);
          this.isRefreshs = true

          // 调用刷新事件传 （关闭loading方法）
          this.onRefresh(this.refreshDone)
        } else {
          this.top = 0
        }
      }
    },
    
    refreshDone(){
      this.isRefreshs = false
      this.pullDownText = '刷新完成'
      this.top = 0
      this.diff = 0
    },
  }
}
</script>
<style lang='less'>
.xxb-infinites-scroll{
  position: relative;
}
.pull{
  transform: translate3d(0, 0, 0);
  transition: all 0.65s;
}
.xxb-scoll-view-content{
  position: absolute;
  left: 0;
  width: 100%;
}
.xxb-pull-down-drag{
  position: absolute;
  width: 100%;
  left: 0;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.xxb-pull-down-drag-content{
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
}
.xxb-icon-refresh{
  font-size: 1.1rem
}
.xxb-update{
  margin-left: .4rem;
  text-align: center;
}
.xxb-update-span{
  font-size: 0.75rem;
  color: #333;
}
.xxb-update-time{
  font-size: 0.55rem;
  color: #666;
}
.xxb-refresh{
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.xxb-refresh-img{
  width: 1.5rem;
  height: 1.5rem;
}

.xxb-infinites-scroll-loading {
  margin-top: .25rem;
  text-align: center;
  font-size: .65rem;
  color: #999;
  height: 1.65rem;
  line-height: 1.65rem;
  img {
    height: inherit;
    display: inline-block;
  }
}

.xxb-infinites-scroll-donetip{
  font-size: .6rem;
  text-align: center;
  padding: .625rem 0;
  color: #777;
}
</style>