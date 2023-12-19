<script setup>
import {  useFormStore  } from '../stores/formStore'
const formStore = useFormStore()

function addField() {
  formStore.addFieldToSelectedForm()
}

function deleteField(fieldId) {
  formStore.deleteFieldById(fieldId)
}

</script>

<template>
  <div id="fieldedit">
    <h1>Поля</h1>
    <h3>Скрытые поля</h3>
    <div class="add_field">
      <span>Добавить поле</span>
      <div class="icon_plus"></div>
    </div>
    <h3>Поля</h3>
    <div class="field" v-for="field in formStore.selectedForm.fields">
      <div class="field_header">
        <div>
          <span>{{ field.name }}</span>
          <span>Контакт</span>
        </div>
        <span @click="deleteField(field.id)">Удалить поле</span>
      </div>
      <div>
        <input v-model="field.name" type="text">
      </div>
      <div class="confirm">
        <input class="checkbox" v-model="field.necessary" type="checkbox" :id="field.id">
        <label :for="field.id">Сделать поле обязательным</label>
      </div>
    </div>
    <div class="add_field add_field_action"  @click="addField">
      <span>Добавить поле</span>
      <div class="icon_plus"></div>
    </div>
    <div class="add_field add_form">
      <span>Добавить страницу формы</span>
      <div class="icon_plus"></div>
    </div>
  </div>
</template>

<style scoped>

</style>
