<template>
  <div>
    <v-card flat class="bg-white">
      <template #title>
        <div class="p-1">
          <h5 class="text-xl font-semibold">List Asset</h5>
        </div>
      </template>
      <template #text>
        <div class="flex items-center gap-2">
          <router-link to="/asset/add">
            <v-btn variant="flat" prepend-icon="mdi-plus" class="bg-primary">
              <template v-slot:prepend>
                <v-icon color="white"></v-icon>
              </template>
              <span class="text-white"> Add Asset </span>
            </v-btn>
          </router-link>
          <v-text-field
            v-model="search"
            hide-details
            single-line
            label="Search Asset..."
            variant="outlined"
            density="compact"
            direction="horizontal"
            class="max-w-[240px]"
          ></v-text-field>
        </div>
      </template>

      <v-data-table :headers="headers" :items="filteredData">
        <template v-slot:item.Status="{ value }">
          <v-chip :color="getStatusColor(value)">
            {{ value }}
          </v-chip>
        </template>
        <template v-slot:item.PurchaseCost="{ value }">
          <span class="font-semibold"> Rp {{ formatPrice(value) }} </span>
        </template>
        <template v-slot:item.PurchaseDate="{ value }">
          <span>
            {{ formatDate(value) }}
          </span>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useAssetStore } from "../../store/asset";
import { formatDate, formatPrice } from "../../utils/helpers";

const assetStore = useAssetStore();
const search = ref("");
const data = ref([]);
const filteredData = ref([]);

const headers = [
  { title: "Asset ID/Tag", key: "AssetID" },
  { title: "Asset Name", key: "AssetName" },
  { title: "Description", key: "Description" },
  { title: "Purchase Cost", key: "PurchaseCost" },
  { title: "Purchase Date", key: "PurchaseDate" },
  { title: "Status", key: "Status" },
];

function getStatusColor(color) {
  switch (color) {
    case "Active":
      return "success";
    case "Inactive":
      return "error";
    case "In Repair":
      return "warning";
    default:
      return "primary";
  }
}

watch(search, (value) => {
  if (!value) {
    filteredData.value = data.value;
  } else {
    filteredData.value = data.value.filter((item) => {
      return (item.AssetName || "").toLowerCase().includes(value.toLowerCase());
    });
  }
});

onMounted(() => {
  data.value = assetStore.assets;
  filteredData.value = assetStore.assets;
});
</script>

<style lang="scss" scoped src="./Asset.scss"></style>
