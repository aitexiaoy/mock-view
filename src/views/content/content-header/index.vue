<template>
    <div class="content-hader">
        <a-input-group compact class="request-address">
            <a-select class="request-address-type" v-model="currentType" :disabled="currentTypeDisabled">
                <a-select-option v-for="item in typeOptions" :key="item.value" :value="item.value">{{item.label}}</a-select-option>
            </a-select>
            <a-input  v-model="address"  placeholder="接口地址" />
        </a-input-group>
        <div class="request-btn">
            <a-button class="button" type="primary">发送</a-button>
            <a-button class="button" type="primary">保存</a-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'contentHeader',
    data() {
        return {
            currentType:'GET',
            address:'/api/login',
            currentTypeDisabled:false,
            typeOptions: [{
                    label: 'GET',
                    value: 'GET'
                },
                {
                    label: 'POST',
                    value: 'POST'
                },
                {
                    lable: 'PUT',
                    value: 'PUS'
                },
                {
                    label: 'DELETE',
                    value: 'DELETE'
                }
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
.content-hader {
    width: 100%;
    height: 60px;
    padding: 0 20px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    flex: none;

    .request-address{
        display: flex;
        .request-address-type{
            width: 130px;
        }
    }

    .request-btn {
        display: flex;

        .button {
            margin-left: 5px;
        }
    }
}
</style>
