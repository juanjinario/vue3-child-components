<template>
  <div>
    Hola, <span class="display-5">{{ name }}</span>
  </div>
  <h3 class="mt-2 lh-base">Tu post favorito es: {{ favoritePost?.title }}</h3>
  <div class="mt-4">
    <BlogPost
      v-for="blog of blogList"
      :body="blog.body"
      :color-title="blog.colorTitle"
      :id="blog.id"
      :title="blog.title"
      @changeFavorite="changeFavorite"
      :showAlert="onShowAlert"
    />
    <BlogPost
      :color-title="'warning'"
      title="Titulo del blog 4"
      @changeFavorite="changeFavorite"
      :showAlert="onShowAlert"
    />
  </div>
  <MyButton class="mt-4" />
</template>
<script setup>
import MyButton from "./components/mybutton/MyButton.vue";
import BlogPost from "./components/blogPost/BlogPost.vue";
import { ref } from "vue";

const name = "MyName";
const favoritePost = ref({});
const blogList = [
  {
    id: 1,
    body: "Este es el cuerpo del post 1",
    title: "Titulo post 1",
    colorTitle: "success",
  },
  {
    id: 2,
    body: "Este es el cuerpo del post 2",
    title: "Titulo post 2",
    colorTitle: "primary",
  },
  {
    id: 3,
    body: "Este es el cuerpo del post 3",
    title: "Titulo póst 3",
    colorTitle: "warning",
  },
];

// methods
const changeFavorite = (favorite) => {
  favoritePost.value = favorite;
};

const onShowAlert = (favorite) => {
  alert(favorite.title);
};
</script>
<style scoped></style>
