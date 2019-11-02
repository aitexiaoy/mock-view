<template>
<div class="silder" :class="{'silder-collapse':silderCollapse}">
    <div class="silder-search" >
        <a-input-search placeholder="搜索" @search="onSearch" />
    </div>
    <a-tabs :defaultActiveKey="currentTabKey" @change="handleTabChange" class="silder-tabs">
        <a-tab-pane tab="归纳" key="collections">
            <SilderCollections></SilderCollections>
        </a-tab-pane>
        <a-tab-pane tab="历史" key="history" forceRender>
            <SilderHistory></SilderHistory>
        </a-tab-pane>
    </a-tabs>
</div>
</template>

<script>
import SilderCollections from '../collections'
import SilderHistory from '../history'
import {mapState} from 'vuex'

export default {
    name: 'silder',
    components: {
        SilderCollections,
        SilderHistory
    },
    data() {
        return {
            currentTabKey: 'collections',
        }
    },
    computed: {
        ...mapState({
            silderCollapse:state=>state.silderCollapse
        })
    },
    methods: {
        onSearch() {

        },
        handleTabChange(key) {
            this.currentTabKey = key
        }
    },

}
</script>

<style lang="scss" scoped>
.silder {
    width: 300px;
    flex: none;
    height: 100%;
    border-right: 1px solid $border-color;
    transform: width 0.3s;
    overflow: hidden;

    &.silder-collapse {
        width: 0px;
        transform: width 0.3s;
    }

    .silder-search {
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        padding: 0 $padding-space;
        border-bottom: 1px solid $border-color;
    }
    .silder-tabs{
        width: 300px;
    }
}
</style>
