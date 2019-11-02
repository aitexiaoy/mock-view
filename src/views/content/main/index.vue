<template>
  <div class="content">
      <ContentHeader/>
      <ContentParams/>
      <ContentJson/>
  </div>
</template>

<script>
import ContentHeader from '../content-header'
import ContentJson from '../content-json'
import ContentParams from '../content-params'

export default {
    name: 'content',
    components:{
        ContentHeader,
        ContentParams,
        ContentJson
    }
}
</script>


<style lang="scss" scoped>
.content{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction:column;
}
</style>