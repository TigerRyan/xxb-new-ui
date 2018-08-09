<template>
  <article class="xxb-list" :class="classes">
    <slot></slot>
  </article>
</template>

<script type="text/babel">
  export default {
    name: 'xxb-list',
    props: {
      theme: {
        validator(value){
            return ['1', '2', '3', '4', '5'].indexOf(value + '') > -1;
        },
        default: '1'
      }
    },
    computed: {
      classes() {
        return 'list-theme' + this.theme;
      }
    }
  }
</script>

<style lang="less">
@import "../../../styles/mixins";
@import "../../../styles/variables";
.xxb-list {
  overflow: hidden;
  position: relative;
  .list-item:active {
    background: none; /* for firefox */
  }
}

.list-img {
  height: 0;
  width: 100%;
  padding: 50% 0;
  overflow: hidden;
  img {
    width: 100%;
    margin-top: -50%;
    background-color: #FFF;
    border: none;
  }
}

.list-mes {
  background-color: #FFF;
  .list-title {
    color: #505050;
    font-size: .26rem*2.5;
    text-align: justify;
    font-weight: 800;
  }
  .list-other {
    overflow: hidden;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    color: #999;
  }
}

.list-price {
  font-size: .75rem;
  color: #EB5211;
  > em {
    font-size: .55rem;
  }
}

.list-del-price {
  padding-left: .06rem*2.5;
  font-size: .2rem*2.5;
  margin-left: .02rem*2.5;
  position: relative;
  color: #8C8C8C;
  &:after {
    .top-line(#8C8C8C);
    top: auto;
    bottom: 50%;
  }
}

.list-theme1 {
  padding: 0 2px 0;
  .list-item {
    width: 50%;
    float: left;
    padding: 0 2px;
    margin-top: 4px;
    .list-mes {
      padding: .1rem*2.5;
      .list-title {
        .text-overflow();
        height: .36rem*2.5;
      }
    }
  }
}

.list-theme2 {
  .list-item {
    width: 50%;
    float: left;
    padding-top: 4px;
    &:nth-child(odd) {
      padding-right: 2px;
    }
    &:nth-child(even) {
      padding-left: 2px;
    }
    .list-mes {
      padding: .1rem*2.5;
      .list-title {
        .text-overflow();
        height: .36rem*2.5;
      }
    }
  }
}

.list-theme3 {
  .list-item {
    width: 50%;
    float: left;
    padding: .2rem*2.5;
    position: relative;
    z-index: 0;
    background-color: #FFF;
    &:before {
      .bottom-line(@line-color);
    }
    &:nth-child(odd):after {
      .right-line(@line-color);
    }
    .list-mes {
      padding-top: .1rem*2.5;
      .list-title {
        .text-overflow();
        height: .36rem*2.5;
      }
    }
    &:active {
      background: #FFF; /* for old android */
    }
  }
}

.list-theme4 {
  padding: 0 7px;
  background-color: #FFF;
  .list-item {
    overflow: hidden;
    display: flex;
    padding: 7px 0 8px 0;
    position: relative;
    &:not(:last-child):after {
      .bottom-line(@line-color);
    }
    .list-img {
      width: 2rem*2.5;
      padding: 1rem*2.5 0;
    }
    .list-mes {
      flex: 1;
      padding-left: 7px;
      .list-title {
        .line-clamp(3, .38rem*2.5);
      }
      .list-other {
        padding-top: .1rem*2.5;
      }
    }
  }
}

.list-theme5 {
  background-color: #FFF;
  .list-item {
    display: block;
    position: relative;
    z-index: 1;
    padding: .2rem*2.5 .2rem*2.5 0 .2rem*2.5;
    &:after {
      .bottom-line(@line-color);
    }
    .list-mes {
      padding: .2rem*2.5 0 .15rem*2.5;
      .list-other {
        padding-top: .06rem*2.5;
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .list-theme1 {
    padding: 0 4px;
    .list-item {
      padding: 0 4px;
      margin-top: 8px;
    }
  }

  .list-theme2 {
    .list-item {
      padding-top: 8px;
      &:nth-child(odd) {
        padding-right: 4px;
      }
      &:nth-child(even) {
        padding-left: 4px;
      }
    }
  }

  .list-theme4 {
    padding: 0 9px;
    .list-item {
      padding: 9px 0 10px 0;
      .list-mes {
        padding-left: 9px;
      }
    }
  }
}
</style>
