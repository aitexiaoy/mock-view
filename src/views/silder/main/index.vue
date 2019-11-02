<template>
  <div class="silder">
      <div class="silder-search">
          <a-input-search placeholder="搜索" @search="onSearch" />
      </div>
     <a-tabs :defaultActiveKey="currentTabKey" @change="handleTabChange">
      <a-tab-pane tab="归纳" key="collections">
          <silderCollections></silderCollections>
      </a-tab-pane>
      <a-tab-pane tab="历史" key="history" forceRender>
          <silderHistory></silderHistory>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>



<script>
import silderCollections from '../collections'
import silderHistory from '../history'

export default {
    name: 'silderCollections',
    component:{
        silderCollections,
        silderHistory
    },
    data() {
        return {
            currentTabKey:'collections'
        }
    },
    methods: {
        onSearch(){

        },
        handleTabChange(key){
            this.currentTabKey=key
        }
    },
    
}
</script>


<style lang="sacc" scoped>
.silder{
    width: 200px;
    height: 100vh;
}
</style>