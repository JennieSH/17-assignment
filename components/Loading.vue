<template>
  <div class="loading"></div>
</template>

<style lang="scss" scoped>
.loading {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border: 4px solid lighten($gray, 20%);
  border-top-color: var(--primary);
  animation: spin 1s infinite linear;
}
</style>
