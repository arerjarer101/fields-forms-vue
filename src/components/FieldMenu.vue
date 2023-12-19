<script setup>
import {  useFormStore  } from '../stores/formStore'
const formStore = useFormStore()
</script>

<template>
  <div id="fieldmenu">
    <div class="logo_image"></div>
    <router-link :to="'/forms'" class="menu_back">
      <div class="icon_arrow_left"></div>
      <span>Назад</span>
    </router-link>
    
    <div class="sidemenu">
      <span class="">Тип формы</span>
      <span class="">Сущности</span>
      <span class="menuitem_active">Поля</span>
      <span class="">Правила показа полей</span>
      <span class="">Другие настройки</span>
    </div>
    <div class="sidemenu_footer">
      <button  class="button button_outline">Скрипт</button>
      <button @click="formStore.saveCurrentState" class="button">Сохранить</button>
    </div>
  </div>
</template>

<style scoped>

</style>
