import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counterStore', {
  state: () => ({
    counter: 0,
  }),
  actions: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
    reset() {
      this.counter = 0;
    },
  },
  getters: {
    count(state) {
      return state.counter;
    },
  },
});
