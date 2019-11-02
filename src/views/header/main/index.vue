<template>
<div class="header">
    <div class="header-content header-left">
        <div class="login">MOCK-VIEW</div>
        <i class="iconfont iconfenlan" @click="handleCollapseClick" :class="{'silder-collapse':silderCollapse}" />
    </div>
    <div class="header-content header-right">
        <a-icon type="global" />
    </div>
</div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
    name: 'appHeader',
    computed: {
        ...mapState({
            silderCollapse: state => state.silderCollapse
        })
    },
    mounted() {
        
    },
    methods: {
        ...mapActions(['setSilderCollapse']),
        handleCollapseClick(){
            this.setSilderCollapse(!this.silderCollapse)
        }
    },
}
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    height: 50px;
    display: flex;
    border-bottom: 1px solid $border-color;
    justify-content: space-between;
    align-items: center;

    .header-content {
        display: flex;
        align-items: center;
        padding: 0 $padding-space;
    }

    .login {
        padding: 0 20px;
        padding-left: 0px;
    }
    .silder-collapse{
        color: #1890ff;
    }
}
</style>
