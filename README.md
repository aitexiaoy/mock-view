# mock-view
- > 可视化的mock工具

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## TODO
- [ ] 根据接口请求自动添加接口列表 websocket
- [ ] 接口参数自定义 分为固定参数以及随机参数，能根据不同的参数返回不同的数据
- [ ] 接口归类，分组。考虑到分组的层级不确定性，采用平行目录储存
```
{
    type:'file|axio' 文件夹，接口
    parent:'',
    children:[],
}
```
- [ ] 全局定义代理，请求真正的接口，请求成功后将数据回填（可配置）也可以单接口配置
- [ ] 容错管理
