<template>
    <div class="tabbar">
      <div :class="isHome?'':'active'" @click="changeTab('/home')"><van-icon name="wap-home"></van-icon>
      <div>首页</div></div>
      <div @click="changeTab('/personalCenter')" :class="isHome?'active':''">
        <van-icon name="contact"></van-icon>
      <div>我的</div>
      </div>
      <div class="center">
        <van-icon name="plus"></van-icon>
      </div>
    </div>
</template>

<script>
    export default {
        name: "tabbar",
      data() {
          return {
            isHome: true
          }
      },
      methods: {
        changeTab(router) {
          if (router ==='/home') {
            this.isHome = true
          } else {
            this.isHome = false
          }
          this.$router.push(router)
          }
      }
    }
</script>

<style lang="less" scoped>
  .tabbar{
    display: flex;
    justify-content: space-between;
    padding: 6px 15%;
    position: fixed;
    left: 0;
    width: 70%;
    bottom: 0;
    z-index: 99999;
    background-color: #fff;
    .center{
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: -30px;
      left: 40vw;
      width: 20vw;
      height: 20vw;
      border-radius: 50%;
      background-color: #fff;
      z-index: 6666;
      color: #afafaf;
      i{
        font-size: 26px;
        font-weight: bold;
      }
    }
    >div{
      text-align: center;
      color: #eb2211;
      font-size: 12px;
      i{
        font-size: 22px;
        font-weight: bold;
      }
    }
    .active{
      color: #afafaf;
    }
  }
</style>
