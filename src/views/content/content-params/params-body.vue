<template>
    <div class="params-content">
        <VueAceJson v-model="value"/>
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
            value:'121'
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
