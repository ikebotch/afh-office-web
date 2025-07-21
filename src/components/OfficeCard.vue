<template>
  <div class="card shadow-sm">
    <a :href="office.map_url" target="_blank" class="text-decoration-none text-dark">
    <div class="card-body">
      <h5 class="card-title ">
        {{ office.name }}
      </h5>

      <p class="card-text mb-1">
        <i class="bi bi-geo-alt me-2 text-primary"></i>{{ `${office.address1} ${office.address2} `}}
      </p>

      <p v-if="office.address2" class="card-text mb-1 ps-4">
     {{ office.address2 }}
      </p>

      <p class="card-text mb-1 ps-4">
       {{ office.city }}
      </p>

      <p class="card-text ps-4">
       {{ office.postcode }}
      </p>
    </div> </a>
  </div>
</template>


<script setup>
defineProps({
  office: Object
});
</script>
<style scoped>
.card-body {
  font-size: 14px;
}

.card {
  transition: transform 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.card:hover {
  transform: scale(1.015);
  box-shadow: 0 0 0.6rem rgba(0, 0, 0, 0.9);
  cursor: pointer;
}
</style>