<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { useCounterStore } from '@/store/index';
  import BaseBtn from '@/components/BaseBtn.vue';
  import BaseDisplay from '@/components/BaseDisplay.vue';

  const counter = useCounterStore();
  const { count } = storeToRefs(counter);
  const { increment, decrement } = counter;
  const up = () => increment();
  const down = () => decrement();
</script>

<template>
  <div class="pinia">
    <img src="/pinia-logo.svg" alt="piniaロゴ" class="pinia-logo" />
    <h1>pinia</h1>
    <BaseDisplay :count="count" />
    <div class="pinia-btns">
      <BaseBtn @click-event="up">UP</BaseBtn>
      <BaseBtn @click-event="down">DOWN</BaseBtn>
    </div>
    <p class="text-primary">
      <nuxt-link to="/" tag="a" class="nuxt-welcome">NuxtWelcome</nuxt-link>
    </p>
  </div>
</template>

<style scoped>
  .pinia {
    display: flex;
    flex-direction: column;
    margin: 10vh auto;
    justify-content: center;
    text-align: center;
  }

  .pinia-logo {
    width: 30%;
    height: 25%;
    margin: 0 auto;
    padding: 20px;
  }

  .pinia-btns {
    display: flex;
    justify-content: center;
  }

  .nuxt-welcome,
  .nuxt-welcome:visited {
    --tw-text-opacity: 1;
    color: rgba(0, 220, 130, var(--tw-text-opacity));
    text-decoration: none;
  }
</style>
