<template>
    <div class="params-json">
        <VueAceJson v-model="value"/>
    </div>
</template>

<script>

export default {
    name: 'ContentJson',
    props:{},
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
.params-json {
    width: 100%;
    height: 100%;
    padding-top:10px; 
    flex: auto;
}
</style>
