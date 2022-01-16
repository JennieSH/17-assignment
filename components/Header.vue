<template>
  <header>
    <Icon name="burger" size="lg" />
    <h1>HandsUP</h1>
    <Icon name="sign-out" size="lg" />
  </header>
</template>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  color: var(--secondary);
  background-color: var(--primary);

  h1 {
    flex-grow: 1;
    font-size: $text-md;
    padding-left: 15px;

    @include lg-width {
      font-size: $text-lg;
    }
  }
}
</style>
