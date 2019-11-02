<template>
  <div id="app">
    <a-layout>
      <a-layout-header>
        <Header/>
      </a-layout-header>
      <a-layout>
        <a-layout-sider>
          <Silder/>
        </a-layout-sider>
        <a-layout-content>Content</a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from './views/header/main/index.vue'
import Silder from './views/silder/main/index.vue'


@Component({
    components: {
        Header,
        Silder,
    },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
