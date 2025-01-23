<template>
  <div>
    <div>
      <a href="https://vite.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    <h1>Home Page</h1>
    <HelloWorld />
    <button @click="toAbout">去详情</button>
    <div class="parent">
      <div class="child">弟弟</div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
// 组件逻辑

const router = useRouter()
function toAbout() {
  router.push({ name: 'About' })
}
</script>

<style lang="less" scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.parent {
  .child {
    color: red;
  }
}
</style>
