<template>
  <div>
    <v-card title="List Asset" flat>
      <template #text>
        <div class="flex items-center gap-2">
          <v-btn variant="flat" prepend-icon="mdi-plus" class="bg-primary">
            <template v-slot:prepend>
              <v-icon color="white"></v-icon>
            </template>
            <span class="text-white"> Add Asset </span>
          </v-btn>
          <v-text-field
            v-model="search"
            label="Search Asset"
            variant="outlined"
            hide-details
            single-line
            class="max-w-[240px]"
            direction="horizontal"
          ></v-text-field>
        </div>
      </template>

      <v-data-table :search="search" :items="data"></v-data-table>
    </v-card>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import DataSet from "../../assets/data/data.json";

const search = ref("");
const data = ref([]);

onMounted(() => {
  data.value = DataSet;
});
</script>

<style lang="scss" scoped>
::v-deep {
  .v-card-text {
    .v-input {
      .v-field {
        height: 40px;
        .v-field__field {
          height: 40px;
        }
        .v-field__input {
          padding: 8px;
          min-height: inherit;
        }
      }
    }
  }
}
</style>
