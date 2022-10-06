import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    user: false,
  }),
  getters: {},
  actions: {},
})
