import { defineStore } from "pinia";
import DataSet from "../assets/data/data.json";
import { wait } from "../utils/helpers";

export const useAssetStore = defineStore("asset", {
  state: () => ({
    assets: DataSet,
  }),
  getters: {},
  actions: {
    async postAsset(asset) {
      await wait(3000);
      this.assets.push(asset);
    },
  },
  persist: true,
});
