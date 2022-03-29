<template>
  <div class="top-bar">
    <div class="wrap">
      <div class="left">欢迎来到叩丁狼积分商城</div>
      <div class="right">
        <ul>
          <li class="user">
            <img src="@/assets/img/userImg.f8bbec5e.png" alt="" />
            用户名：游客
          </li>
          <li>我的积分：--</li>
          <li>获取积分</li>
          <li>叩丁狼官网</li>
          <li class="topbar-login">登录</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Topbar',
  data() {
    return {}
  },

  components: {},

  methods: {},

  mounted() {}
}
</script>

<style lang="less" scoped>
.top-bar {
  height: 40px;
  background: #242b39;
  .wrap {
    display: flex;
    justify-content: space-between;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    font-family: SourceHanSansSC;
    color: #fffefe;
    .left {
      height: 40px;
      width: 155px;
    }
    .right ul {
      display: flex;
      height: 40px;
      align-items: center;
      cursor: pointer;

      .user {
        display: flex;
        align-items: center;
      }

      li img {
        width: 26px;
        border: 1px solid #8891a1;
        border-radius: 50%;
      }

      li {
        margin-right: 22px;
        &.topbar-login {
          margin-right: 0;
          text-align: center;
          width: 124px;
          height: 40px;
          background: #0a328e;
        }
      }
    }
  }
}
</style>
