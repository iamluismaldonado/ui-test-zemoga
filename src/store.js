import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import data from "../src/assets/data.json"

export const useMainStore = defineStore({
  id: 'main',
  state: () => ({
    people: useStorage('people', data),
  }),
  getters: {
    getAllPeople() {
      return this.people
    },
    todoEmpty() {
      return this.people.length <= 0
    }
  },
  actions: {
    addPeople(person) {
      this.people.push(person);
    },
    removePeople(index) {
      this.people.splice(index, 1)
    }
  },
})