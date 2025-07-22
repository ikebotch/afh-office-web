<template>
  <div class="container py-4">
    <div class="row g-4">
      <div v-for="(office, index) in offices" :key="index" class="col-md-6">
        <OfficeCard :office="office"/>
      </div>
    </div>

    <div class="text-center mt-4">
      <!-- Pagination Info -->
      <p class="mt-2 small text-secondary">
        Loaded {{ offices.length }} of {{ totalCount }} offices
        (Page {{ pageIndex }} of {{ totalPages }})
      </p>

      <!-- Load More Button -->
      <button
          v-if="canLoadMore"
          class="btn btn-primary"
          @click="loadMore"
      >
        Load More
      </button>

    </div>
  </div>
</template>
<script setup>
import {computed, onMounted, ref} from 'vue';
import OfficeCard from '@/components/OfficeCard.vue';
import OfficeService from '@/services/OfficeService.js';


const offices = ref([]);
const pageIndex = ref(1);
const pageSize = 4;
const totalCount = ref(0);


const canLoadMore = computed(() => offices.value.length < totalCount.value);
const totalPages = computed(() => Math.ceil(totalCount.value / pageSize));


const loadOffices = async () => {
  try {
    const {payload = [], paginationMetaData = {}} = await OfficeService.getOffices(pageIndex.value, pageSize);
// append fetched data to existing array
    if (payload.length) {
      offices.value.push(...payload);
    }

    totalCount.value = paginationMetaData.totalRecords ?? 0;
  } catch (error) {
    console.error('Error loading offices:', error);
  }
};

const loadMore = () => {
  pageIndex.value++;
  loadOffices();
};

onMounted(loadOffices);
</script>
