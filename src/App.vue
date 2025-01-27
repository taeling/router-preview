<script lang="ts" setup>
import AppLink from './components/AppLink.vue';
import NavigationBar from './components/NavigationBar.vue';
</script>

<template>
  <NavigationBar>
    <AppLink :to="(resolve) => resolve('home')">Home</AppLink>
    <router-link :to="(resolve) => resolve('home')">Home</router-link>
    <router-link :to="(resolve) => resolve('settings')">Settings</router-link>
  </NavigationBar>
  
  <router-view />
</template>