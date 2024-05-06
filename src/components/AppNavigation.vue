<template>
  <div class="app-navigation">
    <router-view :to="(resolve) => resolve('settings')">Settings</router-view>
  </div>
</template>
