<template>
  <xxb-layout class="demo-foot-tabbar">
    <xxb-navbar slot="navbar" class="top">
      <div slot="left" @click="$router.go(-1)"><i class="iconfont icon-left"></i></div>
      <div slot="center"><p>TabBar</p></div>
    </xxb-navbar>

    <ul>
      <li v-for="n in 30">
        <xxb-cell-item>
          <span slot="left">{{n<10?'0'+n:n}}、从来不会告诉你，自己写的tabbar会有bug哦~</span>
      </xxb-cell-item>
      </li>
    </ul>

    <xxb-tabbar slot="tabbar">
      <xxb-tabbar-item
        v-for="(item, index) in foots"
        :key="index"
        :title="item.text"
        :link="item.link"
        :active="item.link ==  pathname"
        :dot="false"
      >
      <img 
        slot="icon" 
        :src= "require('../assets/tabbar/' + (item.link == pathname ? item.activeIcon : item.icon))" alt="" :class="['iconfont', 'iconfont' + index] ">
      </xxb-tabbar-item>
    </xxb-tabbar>
  </xxb-layout>
</template>

<script>
export default {
    name: 'demo-tabbar',

    data () {
        return {
            foots: [{
                link: '/',
                text: '首页',
                icon: 'home.png',
                activeIcon: 'home_active.png'
            },{
                link: '/course',
                text: '课程',
                icon: 'course.png',
                activeIcon: 'course_active.png'
            },{
                link: '/intellectually',
                text: '智学',
                icon: 'zhixue_active.png',
                activeIcon: 'zhixue_active.png'
            },{
                link: '/message',
                text: '消息',
                icon: 'message.png',
                activeIcon: 'message_active.png'
            },{
                link: '/user',
                text: '我的',
                icon: 'user.png',
                activeIcon: 'user_active.png'
            }],
            pathname: this.$route.path
        }
    },

    watch: {
      // 如果路由有变化，会再次执行该方法: 修复返回bug
      $route (val, old) {
        this.pathname = val.path
      }
    },
}
</script>

<style scoped lang="less">
.demo-foot-tabbar{
  padding-top: 2.25rem;
  padding-bottom: 2.25rem;
  .xxb-tabbar{
    &:after{
      border-top-color: #fff;
    }
    .iconfont{
      width: 1.1rem;
      height: 1.1rem;
    }
    .iconfont1{
      width: 1rem;
      height: 1rem;
    }
    .iconfont2{
      width: 2rem;
      height: 2rem;
      z-index: 10000;
    }
  }
}
    
</style>
<style lang="less">
.demo-foot-tabbar{ 
  .xxb-tabbar{
    height: 2.75rem;
    padding: 0;
    position: fixed;
    bottom: 0;
    .xxb-tabbar-item{
      height: 100%;
      background: #fff;
      .xxb-tabbar-txt{
        display: inline-block;
        font-family: PingFang-SC-Medium;
        font-size: .55rem;
        height: 1.1rem;
        line-height: 1.1rem;
      }
      .xxb-tabbar-icon{
        position: relative;
        .iconfont{
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-42%);
        }
        .iconfont2{
          transform: translate(-50%,-60%);
        }
        .iconfont0{
          transform: translate(-50%,-43%);
        }
      }
    }
  }
  .xxb-tabbar-active{
    color: #6782f5;
    .iconfont0{
      width: 1.1rem;
      height: 1.15rem;
      transform: translate(-50%,-41%);
    }
  }
}
</style>