<script setup>
</script>

<template>
  <div id="logingroup">
    
    <div class="login_body">
      <div class="logo_image"></div>
      <h1 class="login_header">Авторизация</h1>
      <div class="inputgroup">
        <input class="input" type="text" placeholder="Логин">
        <input class="input" type="text" placeholder="Пароль">
      </div>
      <router-link :to="'/forms'">
        <button  class="button">Вход</button>
      </router-link>
    </div>
    <div class="sidemenu_footer">
      <span class="sidemenu_footer_info">Если возникла проблема, то можете написать <a href="">Алёне из Сибтеха</a></span>
      <span class="sidemenu_footer_info">С любовью, ваш <a href="">Сибтех</a></span>
    </div>

  </div>
  
  
</template>

<style scoped>

</style>
