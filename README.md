vue-marquee
======================
支持横向无缝滚动和纵向无缝滚动，当区域内容不足以撑起外面盒子时不进行滚动，内容超过盒子宽度或者高度时进行滚动。适用于公告、消息通知等场景。

Build Setup
----------------------

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```


How To Use
----------------------
## 入口文件或相应vue文件引入
```bash
在需要的地方引入，例如入口index.js文件
import Vue from 'vue'
import VueMarquee from 'msg-vue-marquee'
Vue.use(VueMarquee)

````
## template写法

```script
 <template>
  <div class="marquee">
      <vue-marquee :msg="data" :speed="2" direction="row">
        <span v-for="(item,index) in data" :key="index">{{ item.nickname + '获得了' + item.money + '金币' }}</span>
      </vue-marquee>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function() {
    return {
      data: []
    };
  },
  mounted() {
    this.getList()
  },
  methods: {
    async getList() {
      this.data = [
          {
            "userid": "11111",
            "nickname": "韩国芳",
            "worknum": 1,
            "money": "2750.00"
          }, {
            "userid": "222",
            "nickname": "阿芳芳",
            "worknum": 1,
            "money": "500.05"
          }, {
            "userid": "333",
            "nickname": "韩晓芳",
            "worknum": 1,
            "money": "250.03"
          }
        ];
    }
  }
}
</script>
```

## 参数解释

| 参数      | 含义                                                                       |
| --------- | -------------------------------------------------------------------------- |
| msg       | Array 类型，用于无缝滚动的内容                                             |
| direction | String 类型，表示滚动的方向，横向滚动传 "row", 纵向滚动传"col",默认为"row" |
| speed     | Number 类型，表示滚动的速度，默认值为 2                                    |


支持水平滚动和垂直滚动
支持样式修改请直接覆盖class

欢迎各位大佬review、提优化建议～



