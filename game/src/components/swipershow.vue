<template>
  <swiper class="slide-show" :options="swiperOption">
    <swiper-slide v-for="slide in swiperSlides">
      <a :href="slide.href"><img :src="slide.src" alt=""></a>
      <h2 class="title">{{slide.title}}</h2>
    </swiper-slide>
    <!-- 滚动圆点 -->
    <div class="swiper-pagination" slot="pagination"></div>
    <!-- 滚动条 -->
     <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->

     <div class="swiper-button-prev" slot="button-prev"></div>
     <div class="swiper-button-next" slot="button-next"></div>

     
  </swiper>
</template>

<script>
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
          autoplay:true,
          // 用户触碰依然自动轮播
          autoplay: {
            disableOnInteraction: false,
          },
          // autoplay: {
          // delay: 1000,
          // stopOnLastSlide: false,
          // disableOnInteraction: true,
          // },
           // 上一页下一页配置
          navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          },
          // 切换效果
          effect : 'cube',
          scrollbar: {
            el: '.swiper-scrollbar',
          },
          // 分页器
          pagination: {
            el: '.swiper-pagination'
          }
        },

        swiperSlides: [
                    {
                        src:require('../assets/slideShow/Pic1.jpg'),
                        title:'哈有跟1',
                        href:'swiper.vue'
                    },
                    {
                        src:require('../assets/slideShow/Pic2.jpg'),
                        title:'瓦达啊2',
                        href:'https://www.baidu.com/'
                    },
                    {
                        src:require('../assets/slideShow/Pic3.jpg'),
                        title:'破洞肯3',
                        href:'https://www.baidu.com/'
                    }]
      }
    },
    mounted() {
      
    }
  }
</script>
<style scoped>
.slide-show {
  position: relative;
  margin: 15px 15px 15px 0;
  width: 900px;
  height: 500px;
  overflow: hidden;
}
  .title{
    width: 100%;
    height: 30px;
    background-color: black;
    opacity: 0.5;
    position: absolute;
    bottom: 0;
    color: white;
    line-height: 30px;
  }
</style>