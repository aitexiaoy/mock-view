<template>
    <div class="silder-collections">
        <a-directory-tree defaultExpandAll :treeData="collection">
            <template slot="title" slot-scope="{title}">
                <span >{{title+'1212'}}</span>
            </template>
        </a-directory-tree>
    </div>
</template>

<script>
export default {
    name: "silderCollections",
    data() {
        return {
            collection: []
        };
    },

    mounted() {
        this.dataInit()
    },
    methods: {
        /**
         * 获取数据
         */
        getData() {
            return [{
                    key: "文件夹1",
                    title: "文件夹1",
                    type: "folder",
                    parent: "",
                    children: [{
                        key: "文件夹2",
                        title: "文件夹2",
                        type: "folder",
                        parent: "文件夹1",
                        children: []
                    }, ]
                },

                {
                    key: "文件夹3",
                    title: "文件夹3",
                    type: "folder",
                    parent: "",
                    children: []
                }
            ];
        },

        dataInit() {
            const result = this.getData();
            this.collection = result
        },

        dataTransformArrayToTree() {

        },

        dataTransformTreeToArray(list, newArr = []) {
            list.forEach(item => {
                const {
                    children
                } = item;
                if (children) {
                    delete item.children;

                    if (children.length) {
                        newArr.push(item);
                        return this.dataTransformTreeToArray(children, newArr);
                    }
                }
                newArr.push(item);
            });
            return newArr;
        }
    }
};
</script>

<style lang="scss">
.silder-collections {
    width: 100%;

    .ant-tree li {
        text-align: left;
    }
}
</style>
