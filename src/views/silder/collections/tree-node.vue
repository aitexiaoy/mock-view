<template>
    <a-tree-node
        class="tree-node"
        :title="nodeData.name"
        :key="nodeData.id"
        :isLeaf="nodeData.type!=='folder'">
        <template v-if="nodeData.children&&nodeData.children.length>0">
            <TreeNode v-for="item in nodeData.children" :nodeData="item" :key="item.id" />
        </template>
    </a-tree-node>
</template>

<script>
export default {
    name: "TreeNode",
    props: {
        nodeData: {
            type: Object,
            default: {}
        }
    },
    data() {
        return {
            collection: []
        };
    },

    mounted() {
        this.dataInit()
    },
    methods: {

    }
};
</script>

<style lang="scss" scoped>
.tree-node {}
</style>
