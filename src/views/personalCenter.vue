<template>
    <div class="personal-center">
      <div class="head">
        <img src="@/assets/logo.png" alt="">
        <div>我的名字</div>
        <div class="my"><van-icon name="phone"></van-icon>159848112356</div>
      </div>
      <div class="plate-list">
        <div>
          <img src="@/assets/1.jpg" alt="">
          <div>发布记录</div>
        </div>
        <div>
          <img src="@/assets/2.png" alt="">
          <div>我的需求</div>
        </div>
        <div>
          <img src="@/assets/3.png" alt="">
          <div>消费记录</div>
        </div>
        <div>
          <img src="@/assets/4.png" alt="">
          <div>我的余额</div>
        </div>
      </div>
      <div class="list">
        <van-cell is-link >
        <template slot="title">
          <div class="mt">
            <img src="@/assets/5.png" alt="">
            <span class="custom-title">提交截图</span>
          </div>
        </template>
      </van-cell>
        <van-cell is-link >
          <template slot="title">
            <div class="mt">
              <img src="@/assets/6.png" alt="">
              <span class="custom-title">个人资料</span>
            </div>
          </template>
        </van-cell>
        <van-cell is-link >
          <template slot="title">
            <div class="mt">
              <img src="@/assets/7.png" alt="">
              <span class="custom-title">关于我们</span>
            </div>
          </template>
        </van-cell>
        <van-cell is-link >
          <template slot="title">
            <div class="mt">
              <img src="@/assets/8.png" alt="">
              <span class="custom-title">投诉建议</span>
            </div>
          </template>
        </van-cell>
      </div>
    </div>
</template>

<script>
    export default {
        name: "personalCenter"
    }
</script>

<style lang="less" scoped>
  .personal-center{
    height: 100vh;
    background-color: #f4f4f4;
    .mt{
      display: flex;
      align-items: center;
      img{
        transform: scale(.9,.9);
      }
    }
    .plate-list{
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 20px 10px 10px 10px;
      font-size: 14px;
      background-color: #fff;
      margin-top: 10px;
    }
    .list{
      background-color: #fff;
      margin-top: 15px;
    }
    .head{
      height: 160px;
      background-image: url("./../assets/register.jpg");
      text-align: center;
      color: #fff;
      img{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin: 20px 0 5px;
      }
      .my{
        display: flex;
        align-content: center;
        justify-content: center;
        i{
          margin-right: 5px;
        }
      }
    }
  }
</style>
