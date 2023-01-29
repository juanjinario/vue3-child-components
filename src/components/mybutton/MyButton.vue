<template>
  <button class="btn btn-primary" @click="onClickButton">
    Este es un botón
  </button>
</template>
<script setup>
const onClickButton = () => {
  console.log("le has dado click");
};
</script>
<style lang="scss"></style>
