<template>
    <xxb-layout class="checkbox">
        <xxb-navbar class="top" slot="navbar">
            <div slot="left" @click="$router.go(-1)"><i class="iconfont icon-left"></i></div>
            <div slot="center"><p>Checkbox</p></div>
        </xxb-navbar>

    </xxb-layout>
</template>
<script>
export default {
    name:'checkbox',
    data(){
      return{

      }
    }
}
</script>

<style scoped lang="less">

</style>

