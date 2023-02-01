<template>
  <div class="btn-group" role="group" aria-label="Basic example">
    <button type="button" class="btn btn-outline-primary" @click="onPrevious()">
      Anterior
    </button>
    <button type="button" class="btn btn-outline-primary" @click="onNext()">
      Siguiete
    </button>
  </div>
</template>
<script setup>
import { computed } from "vue";

const props = defineProps({
  page: {
    type: Number,
    default: 0,
  },
});

// methods
const emit = defineEmits(["next", "previous"]);

const onPrevious = () => {
  emit("previous");
};
const onNext = () => {
  emit("next");
};
</script>
<style lang=""></style>
