<template>
  <div
    class="btn-group align-items-center"
    role="group"
    aria-label="Basic example"
  >
    <button
      type="button"
      class="btn btn-primary"
      :disabled="isDisabledPrevious"
      @click="onPrevious()"
    >
      Anterior
    </button>
    <span v-show="last" class="mx-2 text-muted small"
      >Página {{ page + 1 }}</span
    >
    <button
      type="button"
      class="btn btn-primary"
      :disabled="isDisabledNext"
      @click="onNext()"
    >
      Siguiente
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
  first: {
    type: Number,
    default: 0,
  },
  last: {
    type: Number,
    default: 0,
  },
});

// computed
const isDisabledPrevious = computed(() => {
  return props.page === props.first ? true : false;
});

const isDisabledNext = computed(() => {
  return props.page === props.last ? true : false;
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
