<template>
  <div id="app">
    <vue-marquee :msg="marqueeData" :speed="1" direction="col">
      <span v-for="(item,index) in marqueeData" :key="index">{{ item.nickname + '获得了' + item.money + '金币' }}</span>
    </vue-marquee>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      marqueeData:[],
    }
  },
  mounted() {
    this.getMsg()
  },
  methods: {
    getMsg() {
      this.marqueeData = [
          {
            "userid": "282293173",
            "nickname": "韩国芳",
            "headphoto": "\/\/aliimg.changba.com\/cache\/photo\/898664952_200_200.jpg",
            "worknum": 1,
            "money": "2750.00",
          }, {
            "userid": "282293173",
            "nickname": "韩韩韩",
            "headphoto": "\/\/aliimg.changba.com\/cache\/photo\/898664952_200_200.jpg",
            "worknum": 1,
            "money": "500.05",
          }, {
            "userid": "282293173",
            "nickname": "韩晓芳",
            "headphoto": "\/\/aliimg.changba.com\/cache\/photo\/898664952_200_200.jpg",
            "worknum": 1,
            "money": "250.03",
          },
          {
            "userid": "282293173",
            "nickname": "韩晓芳",
            "headphoto": "\/\/aliimg.changba.com\/cache\/photo\/898664952_200_200.jpg",
            "worknum": 1,
            "money": "280.03",
          },
          {
            "userid": "282293173",
            "nickname": "韩晓芳",
            "headphoto": "\/\/aliimg.changba.com\/cache\/photo\/898664952_200_200.jpg",
            "worknum": 1,
            "money": "200.03",
          },
          {
            "userid": "282293173",
            "nickname": "韩芳芳",
            "headphoto": "\/\/aliimg.changba.com\/cache\/photo\/898664952_200_200.jpg",
            "worknum": 1,
            "money": "2700.03",
          }
        ]
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
}

#app{
  width: 750px;
  height: 100px;
  font-size: 26px;
  margin: 0 auto;
}
</style>
