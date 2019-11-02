<template>
    <div class="content-params">
        <a-tabs :defaultActiveKey="currentTabs" @change="handleTabChange">
            <a-tab-pane class="params-main" tab="Header" key="header">Content of Tab Pane 1</a-tab-pane>
            <a-tab-pane
                class="params-main"
                tab="Body"
                key="body"
                forceRender>Content of Tab Pane 2</a-tab-pane>
        </a-tabs>
    </div>
</template>

<script>
export default {
    name: 'ContentParams',
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
.content-params {
    width: 100%;
    min-height: 100px;
    max-height: 300px;
    flex: none;

    border-bottom: 1px solid $border-color;

    .params-main {
        padding: 0 $padding-space;
    }
}
</style>
