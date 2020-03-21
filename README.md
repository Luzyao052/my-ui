# ui-learn

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

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
```
<!-- 使用模板 -->
<my-button>标准按钮</my-button>
    <br>
    <my-button :size="size">mini大小的按钮</my-button>
    <br>
    <my-button size="huge">huge大小的按钮</my-button>
    <br>
    <my-button icon="user">icon为user的按钮</my-button>
    <br>
    <my-button icon="history">icon为history的按钮</my-button>
    <br>
    <my-button size="massive" icon="warning circle">warning circle</my-button>
    <br>
    <my-button disabled size="massive" icon="warning circle">禁用状态</my-button>
    <br>
    <my-button  icon="history" loading>icon为history的loading按钮</my-button>
    <br>
    <my-button animated="vertical">
    <div slot="hidden">$10000</div>
    <div slot="visible"><i class="shop icon"></i>不要错过哈123</div>
    </my-button>
    <br>
    <my-button animated="fade">
    <div slot="hidden">$10000</div>
    <div slot="visible"><i class="shop icon"></i>不要错过哈</div>
    </my-button>
    <br>
     <my-button @click="hClick">点击事件</my-button>
