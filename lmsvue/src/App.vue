<template>
    <div id="app">
      <div class="content">
        <router-view></router-view>
      </div>
      <footer-layout></footer-layout>
    </div>
</template>

<script>
import FooterLayout from "@/layout/FooterLayout.vue";

export default {
  components: { FooterLayout},
};
</script>
