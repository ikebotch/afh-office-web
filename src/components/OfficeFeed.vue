<template>
  <div class="container py-4">
    <div class="row g-4">
      <div class="col-md-6" v-for="(office, index) in offices" :key="index">
        <OfficeCard :office="office"/>
      </div>
    </div>

    <div class="text-center mt-4" v-if="canLoadMore">
      <button class="btn btn-primary" @click="loadMore">Load More</button>
    </div>
  </div>
</template>
<script setup>
import {ref, computed, onMounted} from 'vue';
import OfficeCard from './OfficeCard.vue';
import OfficeService from "../services/OfficeService.js";

const offices = ref([]);
const pageIndex = ref(1);
const pageSize = 4;
const totalCount = ref(0);

const canLoadMore = computed(() => {
  return offices.value.length < totalCount.value;
});

async function loadOffices() {
  try {
    const result = await OfficeService.getOffices(pageIndex.value, pageSize);

    if (result?.payload?.length) {
      offices.value.push(...result.payload);
    }

    totalCount.value = result?.paginationMetaData?.totalRecords ?? 0;
  } catch (err) {
    console.error('Error fetching offices:', err);
  }
}

function loadMore() {
  pageIndex.value++;
  loadOffices();
}

onMounted(loadOffices);
</script>
