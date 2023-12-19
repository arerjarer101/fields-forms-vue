<script setup>
import {  useFormStore  } from '../stores/formStore'
const formStore = useFormStore()

function createForm() {
  formStore.addForm({name: 'new form'})
}

</script>

<template>
  <div id="fieldpreview">
    <h3>Форма регистрации участников</h3>
    <div class="inputgroup">
      <input v-for="field in formStore.selectedForm.fields" readonly class="input" type="text" :placeholder="field.name">
    </div>
    <div class="confirm">
      <input class="checkbox" type="checkbox" id="field.id">
      <label class="preview_label" for="field.id">Нажимая кнопку «Отправить», я принимаю условия политики конфиденциальности</label>
    </div>
  </div>
</template>

<style scoped>

</style>
