<template>
  <div id="app">
    <!-- 指定那个组件需要缓存，不用销毁，这样就不用每次都要请求了 -->
    <keep-alive include="My">
      <router-view></router-view>
    </keep-alive>
  <div class="menu">
      <router-link to="/Home"><img src="../assets/home-icon.png"></router-link>
      <router-link to="/Release"><img src="../assets/release-icon.png"></router-link>
      <router-link to="/My"><img src="../assets/my.png"></router-link>
    </div>
  </div>
</template>
  <style>
      *{
          margin: 0px;
          padding: 0px;
      }
      body{
        background-color: rgb(255, 235, 197);
      }
      .menu{
          width: 100%;
          height: 3rem;
          background-color: pink;
          display: flex;
          position: fixed;
          bottom: 0rem;
          z-index: 999;
      }
      .menu a{
            text-decoration: none;
            width: 33.33%;
            height:100%;
            color: #ccc;
            background-color: rgb(255, 92, 71);
            line-height: 4.5rem;
            text-align: center;
            font-size: 1.20rem;
        }
        .menu a img{
          width: 40%;
          height: 70%;
        }
  </style>
  <script>
    export default {
    }
  </script>

