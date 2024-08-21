<script lang="ts" setup>
import NavigationBar from './components/NavigationBar.vue';
import { activeUser } from "./services/user";
</script>

<template>
  <NavigationBar>
    <router-link :to="(resolve) => resolve('home')">Home</router-link>
    <router-link :to="(resolve) => resolve('settings')">Settings</router-link>
  </NavigationBar>

  <button type="button" @click="activeUser = 'me'">
    <template v-if="activeUser">
      HAS ACTIVE USER
    </template>
    <template v-else>
      set active user
    </template>
  </button>
  
  <router-view />
</template>

<script lang="ts" setup>
</script>