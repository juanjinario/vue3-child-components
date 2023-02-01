<template>
  <div>
    Hola, <span class="display-5">{{ name }}</span>
  </div>
  <h3 class="mt-2 lh-base">Tu post favorito es: {{ favoritePost?.title }}</h3>
  <div class="mt-4">
    <Pagination
      class="mb-2"
      :page="page"
      :last="lastPage"
      @next="nextPage"
      @previous="previousPage"
    />
    <BlogPost
      v-for="blog of postsListPaged"
      :body="blog.body"
      :color-title="blog.colorTitle"
      :id="blog.id"
      :title="blog.title"
      @changeFavorite="changeFavorite"
      :showAlert="onShowAlert"
    />
    <Pagination
      class="mt-4"
      :page="page"
      :last="lastPage"
      @next="nextPage"
      @previous="previousPage"
    />
  </div>
</template>
<script setup>
import { computed, ref } from "vue";
import { getAllPosts } from "/src/core/services/post.service.js";
import BlogPost from "./components/blogPost/BlogPost.vue";
import Pagination from "./components/pagination/Pagination.vue";

const name = "MyName";
const favoritePost = ref({});
const postsList = ref([]);
const page = ref(0);
const size = ref(10);
getAllPosts().then((data) => (postsList.value = data));

// Computed
const postsListPaged = computed(() => {
  const start = page.value * size.value;
  const end = (page.value + 1) * size.value;
  return postsList.value.slice(start, end);
});
const lastPage = computed(() => {
  return postsList.value.length / size.value - 1;
});

// methods
const changeFavorite = (favorite) => {
  favoritePost.value = favorite;
};
const onShowAlert = (favorite) => {
  alert(favorite.title);
};
const previousPage = () => {
  page.value -= 1;
};
const nextPage = () => {
  page.value += 1;
};
</script>
<style scoped></style>
