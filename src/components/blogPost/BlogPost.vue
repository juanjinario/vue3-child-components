<template>
  <div class="card mt-3">
    <div class="card-body">
      <h5 :class="`text-${colorTitle}`" class="card-title">
        {{ id }} {{ title }}
      </h5>
      <p>{{ body }}</p>
      <button class="btn btn-outline-info" @click="onSelectFavorite">
        Favorito
      </button>
      <!-- puedo acceder al global con el $emit -->
      <button
        class="btn btn-outline-success ms-3"
        @click="$emit('changeFavorite', blog)"
      >
        Favorito global
      </button>
      <button class="btn btn-outline-success ms-3" @click="showAlert(blog)">
        Mostrar Alerta
      </button>
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";
// states
// props
// defineProps(["body", "colorTitle", "title"]);
const props = defineProps({
  title: String,
  colorTitle: {
    type: String,
    default: "gray",
  },
  body: {
    type: String,
    default: "Sin descripción",
  },
  id: {
    type: Number,
    default: -1,
  },
  showAlert: Function,
});
// computed
const blog = computed(() => {
  return {
    title: props.title,
    colorTitle: props.colorTitle,
    body: props.body,
  };
});

// methods
const emit = defineEmits(["changeFavorite"]);
const onSelectFavorite = () => {
  const blog = {
    title: props.title,
    colorTitle: props.colorTitle,
    body: props.body,
  };
  emit("changeFavorite", blog);
};
</script>
<style lang="scss"></style>
