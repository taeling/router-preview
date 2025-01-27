<template>
    <router-link v-bind="props" style="color:red" v-slot="{isMatch}">
        <slot :class="{'active':isMatch}"></slot>
    </router-link>
</template>

<script setup lang="ts">
import { RouterLink } from '@kitbag/router';

type Props = InstanceType<typeof RouterLink>['$props'];

const props = defineProps<Props>();

</script>