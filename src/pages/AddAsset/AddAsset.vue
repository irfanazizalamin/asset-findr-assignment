<template>
  <v-form @submit.prevent="submitAsset">
    <v-card flat class="bg-white">
      <template #title>
        <div class="flex items-center gap-2 p-1">
          <v-icon icon="mdi-arrow-left" @click="backToAssetPage"></v-icon>
          <h5 class="text-xl font-semibold">Add Asset</h5>
        </div>
      </template>

      <template #text>
        <div class="px-6 py-4">
          <v-row>
            <v-col cols="12" sm="6">
              <div class="text-base font-semibold">Asset Information</div>
              <v-text-field
                v-model="assetForm.AssetID"
                hide-details
                label="Asset ID/Tag"
                density="comfortable"
                variant="outlined"
                class="mt-6"
              ></v-text-field>
              <v-text-field
                v-model="assetForm.AssetName"
                hide-details
                label="Asset Name"
                density="comfortable"
                variant="outlined"
                class="mt-6"
              ></v-text-field>
              <v-select
                v-model="assetForm.Category"
                hide-details
                label="Category"
                density="comfortable"
                variant="outlined"
                class="mt-6"
                :items="['Vehicle', 'Tire', 'Furniture']"
              ></v-select>
              <v-select
                v-model="assetForm.Status"
                hide-details
                label="Status"
                density="comfortable"
                variant="outlined"
                class="mt-6"
                :items="['Active', 'Inactive', 'In Repair']"
              ></v-select>
              <v-text-field
                v-model="assetForm.ModelNumber"
                hide-details
                label="Model Number"
                density="comfortable"
                variant="outlined"
                class="mt-6"
                @input="
                  () =>
                    (assetForm.ModelNumber =
                      assetForm.ModelNumber.toUpperCase())
                "
              ></v-text-field>
              <v-text-field
                v-model="assetForm.SerialNumber"
                hide-details
                label="Serial Number"
                density="comfortable"
                variant="outlined"
                class="mt-6"
                @input="
                  () =>
                    (assetForm.SerialNumber =
                      assetForm.SerialNumber.toUpperCase())
                "
              ></v-text-field>
              <v-textarea
                v-model="assetForm.Description"
                auto-grow
                counter
                label="Description"
                density="comfortable"
                row-height="15"
                rows="1"
                variant="outlined"
                class="mt-6"
              >
                <template #counter="{ counter }">
                  <div>{{ counter }}/200</div>
                </template>
              </v-textarea>
            </v-col>
            <v-col cols="12" sm="6">
              <div class="text-base font-semibold">Purchase Information</div>
              <v-text-field
                v-model="assetForm.PurchaseCost"
                hide-details
                label="Purchase Cost"
                density="comfortable"
                variant="outlined"
                type="number"
                prefix="Rp."
                class="mt-6"
                min="0"
              ></v-text-field>
              <v-dialog max-width="300px" v-model="isDateMenuOpen">
                <template #activator="{ props }">
                  <v-text-field
                    :model-value="selectedDateFormatted"
                    hide-details
                    label="Purchase Date"
                    density="comfortable"
                    variant="outlined"
                    class="mt-6"
                    v-bind="props"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="selectedDate" scrollable actions>
                  <template #actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" @click="isDateMenuOpen = false"
                      >Cancel</v-btn
                    >
                    <v-btn color="primary" @click="isDateMenuOpen = false"
                      >OK</v-btn
                    >
                  </template>
                </v-date-picker>
              </v-dialog>
              <v-text-field
                v-model="assetForm.VendorName"
                hide-details
                label="Vendor Name"
                density="comfortable"
                variant="outlined"
                class="mt-6"
              ></v-text-field>
            </v-col>
          </v-row>
        </div>
      </template>

      <template #actions>
        <div class="px-8 py-2">
          <v-btn
            variant="flat"
            size="large"
            type="submit"
            :disabled="isDisabledSubmit"
            :loading="isLoadingSubmit"
            class="bg-primary w-[260px]"
          >
            <span class="text-white"> Add Asset </span>
          </v-btn>
        </div>
      </template>
    </v-card>
  </v-form>
</template>

<script setup>
import { computed, reactive, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useAssetStore } from "../../store/asset";
import { format } from "date-fns";

const router = useRouter();
const assetStore = useAssetStore();

const assetForm = reactive({
  AssetID: null,
  AssetName: null,
  Category: null,
  Status: null,
  ModelNumber: null,
  SerialNumber: null,
  Description: null,
  PurchaseCost: null,
  PurchaseDate: null,
  VendorName: null,
});

const isDateMenuOpen = ref(false);
const selectedDate = ref(null);
const selectedDateFormatted = computed(() => {
  if (!selectedDate.value) return null;

  const formattedDate = format(new Date(selectedDate.value), "yyyy-MM-dd");
  return `${formattedDate}`;
});

watch(selectedDate, () => {
  assetForm.PurchaseDate = selectedDateFormatted.value;
});

const isLoadingSubmit = ref(false);
const isDisabledSubmit = computed(() => {
  return Object.values(assetForm).some((val) => val === null);
});

function backToAssetPage() {
  router.push({ name: "asset" });
}

async function submitAsset() {
  isLoadingSubmit.value = true;

  try {
    await assetStore.postAsset(assetForm);
    router.replace({ name: "asset" });
  } catch (error) {
    console.error("Terjadi Galat: ", error);
  } finally {
    isLoadingSubmit.value = false;
  }
}
</script>
