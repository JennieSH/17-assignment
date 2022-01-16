<template>
  <button class="btn"><slot></slot></button>
</template>

<style lang="scss" scoped>
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px;
  color: var(--secondary);
  background-color: var(--primary);
  border-radius: $rounded;

  &:hover {
    background-color: var(--active);
  }
}
</style>
