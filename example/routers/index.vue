<template>
  <xxb-layout class="demo-index">
    <div class="top">
      <p class="top-dec" @click="$router.push('/jsBridge')"><span>JS</span><span>API</span></p>
      <div class="logo">
        <img src="../assets/logo.png"><i>v0.0.1</i>
      </div>
      <xxb-sticky stickyId='scrollTopA'>
        <p class="title" slot='sticky'>一只基于Vue2.x的移动端UI组件库。</p>
      </xxb-sticky>
    </div>

    <!-- <iframe src="../index.html" width="750" height="700" frameborder="0" scrolling="auto"style="position:fixed;right: 0px;top: 0px;"></iframe> -->

    <div v-for="(items,index) in lists" :key="index" class="container">
      <h3 class="title title-left">{{items.name}}</h3>
      <ul>
          <li v-for="(item,i) in items.list"
            :key="i" @click='goComponent(item.link)'
            :class="((i>3&&(i+1)%4>0))||items.list.length%4==0?'no-bottom':''"
          >
            <i :class="['iconfont',item.icon]"></i>
            <p>{{item.name}}</p>
          </li>
      </ul>
    </div>
  </xxb-layout>
</template>
<script>
  export default {
    data() {
      return {
        lists: [{
          name: '布局类',
          list: [
            {icon: 'icon-button', name: 'Button', link: '/button',color:'#FF685E'},
            {icon: 'icon-cell', name: 'Cell', link: '/cell'},
            {icon: 'icon-scrollnav', name: 'Navbar', link: '/navbar'},
            {icon: 'icon-tabbar', name: 'Tabbar', link: '/tabbar'},
            {icon: 'icon-clip', name: 'Clip', link: '/clip'},
          ]
        },{
          name: '弹出层',
          list: [
            {icon: 'icon-dialog', name: 'Dialog', link: '/dialog'},
            {icon: 'icon-lightbox', name: 'ImagePreview', link: '/imagePreview'},
            {icon: 'icon-popup', name: 'Popup', link: '/popup'},
            {icon: 'icon-picker', name: 'Picker', link: '/picker'},
            {icon: 'icon-datetime', name: 'DatePicker', link: '/datePicker'},
            {icon: 'icon-cityselect', name: 'Cityselect', link: '/cityselect'},
            // {icon: 'icon-keyboard', name: 'Keyboard', link: '/keyboard'},
          ]
        },{
          name: '滚动类',
          list: [
            {icon: 'icon-slider', name: 'Slider', link: '/slider'},
            // {icon: 'icon-scrollnav', name: 'Scrollnav', link: '/scrollnav'},
            // {icon: 'icon-scrolltab', name: 'Scrolltab', link: '/scrolltab'},
            {icon: 'icon-backtop', name: 'Backtop', link: '/backtop'},
            {icon: 'icon-pulldown', name: 'InfiniteScroll', link: '/infiniteScroll'},
            {icon: 'icon-Sticky', name: 'Sticky', link: '/sticky'},
            {icon: 'icon-srcollLeft', name: 'ScrollItem', link: '/scrollItem'},
          ]
        },{
          name: '表单类',
          list: [
            // {icon: 'icon-search', name: 'Search', link: '/search'},
            {icon: 'icon-switch', name: 'Switch', link: '/switch'},
            {icon: 'icon-radio', name: 'Radio', link: '/radio'},
            {icon: 'icon-checkbox', name: 'CheckBox', link: '/checkBox'},
            {icon: 'icon-wenben01', name: 'Textarea', link: '/textarea'},
          ]
        }]
      }
    },
    methods:{
      goComponent(link){
        this.$router.push({path:link})
      }
    }
  }
</script>
<style lang="less" scoped>
@import "../../src/styles/mixins.less";
.demo-index{
	font-size: .75rem;
	text-align: center;
  .top{
    background: #baddee;
    padding: 1rem 0 2rem 0;
    position: relative;
    &:before{
      display:block;
      position: absolute;
      top: 0;
      right: 0;
      content: "";
      border-width:1.8rem;
      border-style:solid;
      border-color:#fff #fff transparent transparent;
    }
  .top-dec{
    position: absolute;
    top:.6rem;
    right: .1rem;
    font-size: .75rem;
    color:#1494d2;
    span{
      width: 2rem;
      display: block;
    }
  }
  .title-left{
    text-align: left;
    text-indent: .5rem;
    font-weight: normal;
    padding-bottom: 0;

  }
    .logo{
      margin-bottom: .5rem;
      i{
        color: #888;
      }
    }
    .title{
      color: #444;
      height: 2.25rem;
      line-height: 2.25rem;
      background: #baddee;
    }
  }

  .container{
    color:#444;
    .title{
      line-height: 2.25rem;
    }
    ul{
      display: flex;
      flex-wrap: wrap;
      position: relative;
      box-sizing: border-box;
      border-top: 0.003rem solid #ccc;
      background-color: #fff;
      border-bottom: 0.003rem solid #ccc;
      li{
        width:25%;
        font-size: .7rem;
        padding: 1rem 0;
        border-right: 0.003rem solid #ccc;
        box-sizing: border-box;
        position: relative;
        border-bottom: 0.003rem solid #ccc;
          i{
            font-size:1.5rem;
            color:#1494d2;
          }
          .icon-Sticky{
            font-size:1.1rem;
            display: inline-block;
            margin-bottom: .4rem;
          }
          p{
            line-height: 1rem;
          }
      }
      li:nth-child(4n){
        border-right:0;
      }
      .no-bottom{
        border-bottom:0;
      }

    }
  }
}
</style>
