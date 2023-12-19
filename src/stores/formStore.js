import { defineStore } from "pinia";

export const useFormStore = defineStore('gameStore', {
  state: () => ({
    currentForms: [],
    selectedForm: {}

  }),

  getters: {

  },

  actions: {
    addForm(form) {
      form.id = Date.now()
      const today = new Date(form.id)
      form.creationDate = `${today.getDate()}.${today.getMonth()}.${today.getFullYear()%100}`
      this.currentForms.push(form)
    },
    deleteForm(formId) {
      this.currentForms.splice(this.currentForms.findIndex(e => e.id === formId), 1)
    },
    setSelectedForm(form) {
      this.selectedForm = form
    }
  }
});