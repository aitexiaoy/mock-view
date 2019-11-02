<template>
    <div class="params-item">
        <a-input-group compact>
            <a-input style="width: 20%" defaultValue="0571" />
            <a-input style="width: 30%" defaultValue="26888888" />
        </a-input-group>
    </div>
</template>

<script>
export default {
    name: 'content',
    data() {
        return {
            currentTabs: 'header',
            headerData: [{
                key: 'name',
                value: '131212'
            }],
            bodyData: [{
                key: 'name',
                value: '12333'
            }]
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
