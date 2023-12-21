<script setup>
import {  useFormStore  } from '../stores/formStore'
const formStore = useFormStore()

function createForm() {
  formStore.addForm({})
}

function editForm(formId) {
  formStore.editForm(formId)
}

</script>

<template>
  <div id="formlist">
    <div class="formlist_head">
      <h1>Формы</h1>
      <button @click="createForm" class="button">Создать форму</button>
    </div>
    <div class="formlist_main">
      <div v-for="form in formStore.currentForms" class="form">
        <div>
          <h3>Форма регистрации участников</h3>
          <span class="info author">Автор: user1</span>
        </div>
        <div style="text-align: right;">
          <router-link :to="'/fields'" @click="editForm(form.id)">
            <button class="button button_outline form_button">Редактировать</button>
          </router-link>
        </div>
        
        <span class="info">Дата создания {{ form.creationDate }}</span>
        <button @click="formStore.deleteForm(form.id)" class="button button_outline form_button">Удалить</button>
      </div>
    </div>
    
  </div>
  
</template>

<style scoped>

</style>
