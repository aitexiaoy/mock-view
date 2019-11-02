<template>
    <div class="silder-history">
        <a-list itemLayout="horizontal" :dataSource="data">
            <a-list-item slot="renderItem" slot-scope="item, index">
                <a-list-item-meta description="1">
                    <div slot="title" href="2">{{item.title}}</div>
                    <div slot="avatar" class="list-item-icon">{{item.type}}</div>
                </a-list-item-meta>
            </a-list-item>
        </a-list>
    </div>
</template>

<script>
export default {
    name: 'silderHistory',
    data() {
        return {
            data: [{
                    title: '接口1',
                    type:'GET',
                },
                {
                    title: '接口2',
                    type:'POST',
                },
                {
                    title: '接口3',
                    type:'DELETE'
                }
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
.silder-history {
    width: 100%;
    padding:0 20px;
    .list-item-icon{
      width: 50px;
      height: 50px;
      background-color:#faad14;
      color: #fff;
      border-radius: 100%;
      text-align: center;
      font-size: 14px;
      line-height: 50px;
    }
}
</style>
