<template>
  <div class="btn-group" role="group" aria-label="Basic example">
    <button
      type="button"
      class="btn btn-outline-primary"
      :disabled="isDisabledPrevious"
      @click="onPrevious()"
    >
      Anterior
    </button>
    <button
      type="button"
      class="btn btn-outline-primary"
      :disabled="isDisabledNext"
      @click="onNext()"
    >
      Siguiente
    </button>
  </div>
</template>
<script setup>
import { computed } from "vue";
const firstPage = 0;
const lastPage = 9;

const props = defineProps({
  page: {
    type: Number,
    default: 0,
  },
});

// computed
const isDisabledPrevious = computed(() => {
  return props.page === firstPage ? true : false;
});

const isDisabledNext = computed(() => {
  return props.page === lastPage ? true : false;
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
