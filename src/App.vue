<template>
  <div id="app">
    <app-header></app-header>
    <div class="container-fluid">
      <div class="row">
        <app-silder></app-silder>
      </div>
      <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <!-- <app-list></app-list> -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppSilder from "./components/AppSilder.vue";
export default {
  name: "app",
  components: {
    AppHeader,
    AppSilder,
  }
};
</script>

<style>

</style>
