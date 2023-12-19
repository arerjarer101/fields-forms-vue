import { defineStore } from "pinia";

const formsLocalStorage = localStorage.getItem('currentForms')
const selectedLocalStorage = localStorage.getItem('selectedForm')

export const useFormStore = defineStore('gameStore', {
  state: () => ({
    currentForms: formsLocalStorage ? JSON.parse(formsLocalStorage) : [],
    selectedForm: selectedLocalStorage ? JSON.parse(selectedLocalStorage) : {}
  }),
  
  actions: {
    addForm(form) {
      form.id = Date.now()
      const today = new Date(form.id)
      form.creationDate = `${today.getDate()}.${today.getMonth()}.${today.getFullYear()%100}`

      form.hiddenFields = []

      form.fields = []
      form.fields.push({
        name: 'Фамилия',
        necessary: false,
        id: 1
      })
      form.fields.push({
        name: 'Имя',
        necessary: false,
        id: 2
      })

      this.currentForms.push(form)
      localStorage.setItem('currentForms', JSON.stringify(this.currentForms))
    },
    deleteForm(formId) {
      this.currentForms.splice(this.currentForms.findIndex(e => e.id === formId), 1)
      localStorage.setItem('currentForms', JSON.stringify(this.currentForms))
    },
    editForm(formId) {
      this.selectedForm = this.currentForms.find(e => e.id === formId)
      localStorage.setItem('currentForms', JSON.stringify(this.currentForms))
      localStorage.setItem('selectedForm', JSON.stringify(this.selectedForm))
    },
    addFieldToSelectedForm() {
      const field = {}
      field.id = Date.now()
      field.name = ''
      field.necessary = false
      this.selectedForm.fields.push(field)
    },
    deleteFieldById(fieldId) {
      this.selectedForm.fields.splice(this.selectedForm.fields.findIndex(e => e.id === fieldId), 1)
    },
    saveCurrentState() {
      localStorage.setItem('currentForms', JSON.stringify(this.currentForms))
      localStorage.setItem('selectedForm', JSON.stringify(this.selectedForm))
    }
  }
});