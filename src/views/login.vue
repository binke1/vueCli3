<template>
    <div class="login">
      <h1>商旅伴侣</h1>
      <div class="select">
        <div><span></span>商户</div>
        <div><span></span>供应商</div>
      </div>
      <div class="user-info">
        <input v-model="loginData.name" placeholder="账号" type="text">
        <input v-model="loginData.password" placeholder="密码" type="password">
        <div class="forget">
          <span>忘记密码？</span>
        </div>
      </div>
      <div class="user-btn">
        <button @click="login">登录</button>
        <button @click="$router.push('/register')">注册</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      loginData: {
        name: null,
        password: null
      }
    }
  },
  mounted () {
    window.onresize = () => {
      // document.getElementsByClassName('login')[0].style.backgroundImage = "url('./../assets/login.jpg')"
      // document.getElementsByClassName('login')[0].style.backgroundSize = 'cover'
    }
  },
  methods: {
    login () {
      if (this.loginData.name==='test' && this.loginData.password==='123456') {
        this.$router.push('/home')
      } else {
        this.$toast('用户名或密码不正确')
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .login{
    background-image: url("./../assets/login.jpg");
    background-size: cover;
    height: 100%;
    color: #fff;
    overflow: hidden;
    .user-btn{
      padding: 0 10%;
      display: flex;
      justify-content: space-between;
      button{
        border: none;
        outline: none;
        background-color: #fe9f5d;
        color: #fff;
        width: 100px;
        height: 36px;
        border-radius: 18px;
      }
    }
    .forget{
      text-align: right;
      span{
        color: #fff;
        border-bottom: 1px solid #fff;
        font-size: 12px;
      }
    }
    .user-info{
      padding: 0 10%;
      text-align: center;
      margin: 60px 0 30px;
      input{
        color: #333;
        border: none;
        outline: none;
        background-color: #fff;
        width: 80%;
        height: 40px;
        border-radius: 20px;
        padding: 0 10%;
        margin: 20px 0 10px;
        &::-webkit-input-placeholder{
          color: red;
        }
      }
    }
    h1{
      text-align: center;
      color: #fff;
      margin-top: 80px;
      text-shadow: 1px 4px 5px rgba(128,128,128,.3);
      letter-spacing: 2px;
    }
    .select{
      display: flex;
      justify-content: space-around;
      align-items: center;
      >div{
        span{
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: 2px solid #fff;
          margin-right: 5px;
        }
        &:last-child{
          span{
            background-color: #fff;
          }
        }
      }
    }
  }
</style>
