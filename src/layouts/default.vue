<template>
  <div class="layout-default">
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>
<style scoped>
div.layout-default {
  min-height: 100vh;
  max-width: 1904px;
  margin: 0 auto;
}
div.content {
  min-height: 100vh;
  padding: 0 32px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
