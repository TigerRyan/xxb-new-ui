<template>
  <xxb-layout class="demo-infinite-scroll">
    <xxb-navbar class="top" slot="navbar">
      <div slot="left" @click="$router.go(-1)"><i class="iconfont icon-left"></i></div>
      <div slot="center">InfiniteScroll</div>
    </xxb-navbar>

    <xxb-infinite-scroll :onRefresh='onRefresh' :onInfinite="onInfinite">
      <div>
        <xxb-list theme="1" slot="list">
          <xxb-list-item v-for="(item,index) in list" :key="index">
            <img slot="img" :src="item.img">
            <span slot="title">{{item.title}}</span>
            <xxb-list-other slot="other">
              <div>
                <span class="list-price"><em>¥</em>{{item.marketprice}}</span>
                <span class="list-del-price">¥{{item.productprice}}</span>
              </div>
              <div>content</div>
            </xxb-list-other>
          </xxb-list-item>
        </xxb-list>
      </div>
    </xxb-infinite-scroll>

    <xxb-backTop/>
  </xxb-layout>
</template>
<script>
export default {
  name: 'xxb-infinite-scroll-demo',
  data() {
    return {
      page: 1,
      pageSize: 10,
      list: []
    }
  },

  created(){
    this.onInfinite()
  },

  methods:{
    // 数据更新事件
    onRefresh(done){
      setTimeout(()=>{
        // do something
        done();
      },2000)
    },

    onInfinite(){
      this.$http.jsonp('http://list.ydui.org/getdata.php?type=backposition', {
          params: {
            page: this.page,
            pagesize: this.pageSize
          }
      }).then(function (response) {
          const _list = response.body;

          this.list = [...this.list, ..._list];

          if (_list.length < this.pageSize || this.page == 3) {
              // 所有数据加载完毕
              window.$xxb.$emit('xxb.infinitescroll.loadedAll');
              return;
          }

          // 单次请求数据完毕
          window.$xxb.$emit('xxb.infinitescroll.loadedOnce');

          this.page ++;
      });
    }
  },
}
</script>
<style lang='less'>
.demo-infinite-scroll{
  padding-top: 2.25rem;
}
</style>

