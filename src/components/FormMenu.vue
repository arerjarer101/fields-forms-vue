<script setup>

</script>

<template>
  <div id="formmenu">
    <div class="logo_image"></div>
    <div class="sidemenu">
      <span class="menuitem_active">Формы</span>
      <span class="">Пользователи</span>
    </div>
    <div class="login_footer">
      <router-link :to="'/'">
        <button  class="button button_outline form_button">Выход</button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>

</style>
