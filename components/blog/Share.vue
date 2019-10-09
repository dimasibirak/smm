<template>
  <div id="share">
    <script src="https://yastatic.net/es5-shims/0.0.2/es5-shims.min.js"></script>
    <script src="https://yastatic.net/share2/share.js" async="async"></script>
    <h4>Поделиться с друзьями</h4>
    <div class="ya-share2" data-services="facebook,vkontakte,odnoklassniki,instagram,twitter"></div>
  </div>
</template>

<style scoped lang="less">
#share{
  font-size: 18px;
  margin-top: 30px;
  margin-bottom: 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  h4{
    margin-right: 5px;
    font-weight: inherit;
  }
}
</style>
