<template>
  <xxb-layout class="demo-dialog">
    <xxb-navbar class="top" slot="navbar">
      <div slot="left" @click="$router.go(-1)"><i class="iconfont icon-left"></i></div>
      <div slot="center">Dialog</div>
    </xxb-navbar>
    
    <div>
      <xxb-btn @click.native="toastSuccess" size="large" type="primary">Toast->Success</xxb-btn>
      <xxb-btn @click.native="toastError" size="large" type="danger">Toast->Error</xxb-btn>
      <xxb-btn @click.native="toastWarn" size="large" type="warning">Toast->Warn</xxb-btn>
      <xxb-btn @click.native="toastNone" size="large" type="hollow">Toast->自定义icon图片</xxb-btn>

      <xxb-btn @click.native="openConfrimDefault" size="large">Confirm->默认按钮</xxb-btn>
      <xxb-btn 
        @click.native="openConfrimSelf" 
        size="large" bgcolor="#1494d2" 
        color="#fff"
      >Confirm->自定义按钮</xxb-btn>

      <xxb-btn @click.native="openAlert" size="large" type="danger">Alert</xxb-btn>
    </div>
  </xxb-layout>
</template>

<script type="text/babel">
  export default {
    methods: {
      toastSuccess() {
        this.$dialog.toast({
          mes: '登录成功，有回调',
          timeout: 1500,
          icon: 'success',
          callback: () => {
            console.log('关闭toast')
          }
        });
      },

      toastError() {
        this.$dialog.toast({
          mes: '请填写手机号码！',
          timeout: 1500,
          icon: 'error'
        });
      },

      toastWarn() {
        this.$dialog.toast({
          mes: '请输入验证码！',
          timeout: 1500,
          icon: 'warn'
        });
      },

      toastNone() {
        this.$dialog.toast({
          mes: `<img src="${require('../assets/logo.png')}" alt="" style="width:50%;width:2rem;height:2rem"/>
              <div style="font-family:PingFangSC-Regular;">使用自定义图片</div>`,
          timeout: 1500
        });
      },

      openConfrimDefault() {
        this.$dialog.confirm({
          title: '选填标题',
          content: '我有一个小毛驴我从来也不骑！我有一个小毛驴我从来也不骑,我有一个小毛驴我从来也不骑,',
          opts: () => {
            this.$dialog.toast({mes: '你点了确定', timeout: 1000});
          }
        });
      },

      openConfrimSelf() {
        this.$dialog.confirm({
          content: '是否确定通过该退款申请？',
          opts: [{
            text: '取消',
            callback: () => {
              this.$dialog.toast({mes: '你点了取消', timeout: 1000});
            }
          },{
            text: '不通过',
            callback: () => {
              this.$dialog.toast({mes: '你点了不通过', timeout: 1000});
            }
          },{
            text: '通过',
            color: '#1494d2',
            callback: () => {
              this.$dialog.toast({mes: '你点了通过', timeout: 1000});
            }
          }]
        });
      },

      openAlert() {
        this.$dialog.alert({mes: '要学习，就上学训宝！'});
      },
    }
  }
</script>
<style lang="less" scoped>
  .demo-dialog{
    padding: 2.25rem .75rem 0 .75rem;

  }
</style>