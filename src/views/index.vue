<template>
    <div class="home">
      <div class="top-nav">首页</div>
      <div class="plate">
        <div class="aa">
          <div>采购地点</div>
         <div class="xz"></div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style lang="less" scoped>
  .home{
    height: 100vh;
    background-color: #f4f4f4;
    overflow: hidden;
    .plate{
      width: 80%;
      margin: 200px auto 0;
      background-color: #fff;
      text-align: center;
      padding: 25px 15px;
      .aa{
        text-align: center;
        color: #eb2211;
        font-weight: bolder;
        font-size: 14px;
        .xz{
          border-width: 100px;
          border-color: #eb2211;
        }
      }
    }
    .top-nav{
      text-align: center;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 666;
      width: 100%;
      height: 50px;
      line-height: 50px;
      color: #fff;
      background-color: #eb2211;
    }
  }
</style>
