<template>
  <header>
    <p class="tittle">PolkaSort</p>
    <div class="lowerBar"></div>
  </header>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  @import '@css/colors.scss';

  header{
    display: block;
    width: 100%;
    padding: 25px;

    .tittle{
      width: 100%;
      height: 30px;
      text-align: center;
    }

    .lowerBar{
      height: 0px;
      margin: 0 30%;
      border-top: 1px solid $color-borders;
    }
  }

</style>