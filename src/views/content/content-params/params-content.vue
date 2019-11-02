<template>
    <div class="params-content">
        
    </div>
</template>

<script>

export default {
    name: 'content',
    props:{
        data:{
            type:Array,
            default:[]
        }
    },
    data() {
        return {
            
        }
    },
    methods: {
        handleTabChange(key) {
            this.currentTabs = key
        }
    },
}
</script>

<style lang="scss" scoped>
.params-item {
    width: 100%;
}
</style>
