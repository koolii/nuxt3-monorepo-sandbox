// import { acceptHMRUpdate, defineStore } from "pinia";

export const useCountStore = definePiniaStore("", {
  state: () => ({ count: 0 }),
  getters: {},
  actions: {},
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCountStore, import.meta.hot));
}
