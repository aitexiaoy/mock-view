<template>
<div id="app">
    <AppHeader />
    <div class="main">
        <AppSilder />
        <router-view></router-view>
    </div>
</div>
</template>

<script lang="ts">
import {
    Component,
    Vue
} from 'vue-property-decorator'
import AppHeader from './views/header/main/index.vue'
import AppSilder from './views/silder/main/index.vue'

@Component({
    name: 'app',
    components: {
        AppHeader,
        AppSilder,
    },
})
export default class App extends Vue {}
</script>

<style lang="scss" scoped>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    .main{
      width: 100%;
      height: calc(100vh - 50px);
      display: flex;
    }
}
</style>
