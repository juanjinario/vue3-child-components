<template>
  <div>
    Hola, <span class="display-5">{{ name }}</span>
  </div>
  <h3 class="mt-2 lh-base">Tu post favorito es: {{ favoritePost?.title }}</h3>
  <div class="mt-4">
    <Pagination class="mb-2"></Pagination>
    <BlogPost
      v-for="blog of postsList.slice(0, 10)"
      :body="blog.body"
      :color-title="blog.colorTitle"
      :id="blog.id"
      :title="blog.title"
      @changeFavorite="changeFavorite"
      :showAlert="onShowAlert"
    />
    <Pagination class="mb-2"></Pagination>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { getAllPosts } from "/src/core/services/post.service.js";
import MyButton from "./components/mybutton/MyButton.vue";
import BlogPost from "./components/blogPost/BlogPost.vue";
import Pagination from "./components/pagination/Pagination.vue";

const name = "MyName";
const favoritePost = ref({});
const postsList = ref([]);
getAllPosts().then((data) => (postsList.value = data));

// methods
const changeFavorite = (favorite) => {
  favoritePost.value = favorite;
};

const onShowAlert = (favorite) => {
  alert(favorite.title);
};
</script>
<style scoped></style>
