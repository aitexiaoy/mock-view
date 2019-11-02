<template>
  <div class="header">
      <div class="header-content header-left">
          <div>此处是一个软件login</div>
          <a-icon type="bars" />
      </div>
      <div class="header-content header-right">
          <a-icon type="global" />
      </div>
  </div>
</template>

<script>

export default {
    name: 'header',
}
</script>


<style lang="sacc" scoped>
.header{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>