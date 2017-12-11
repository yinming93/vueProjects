<template>
  <div>
  <router-view></router-view>
  <!-- v-for循环 -->
  <h2>v-for循环的使用</h2>
    <ul v-for="item in list">
      <li>{{item.name}}今年{{item.age}}岁</li>
    </ul>
    <br>
    <br>
 
    <ul v-for="(value,key) in objgg">
      <li>{{key+':'+value}}</li>
    </ul>
    <p v-html="hello"></p>
    <p v-text="hello"></p>
    {{ status ? '是true' : '错了'}}
    <br>
    <br>

    <h2>methods v-if v-show v-model set的使用</h2>
    <!-- @ ：methods v-if v-show v-model -->
    <button v-on:click="addItem" :style="linkcss">additem</button><br><br>
    <button @click="change">改值set</button><br><br>
    <a :href="link" :title="hello" :class="classname">a标签</a><br><br>

    <a v-if="isbig">老大</a>
    <a v-show="!isbig">老二</a>
    <button @click="toogle">切换</button><br><br>
  
    <input type="text" @keydown="kd"> <br><br>
    <input type="text" v-model="myvalue">
    {{ myvalue }} <br><br>

  <h2>三种input的v-model的使用</h2>
    <!-- 三种input的v-model -->
    <input v-model="mybox" type="checkbox" value="juice">
    <input v-model="mybox" type="checkbox" value="pee">
    <input v-model="mybox" type="checkbox" value="water">
    {{ mybox }}
    <br><br>
    <input v-model="mybox2" type="radio" value="juice">
    <input v-model="mybox2" type="radio" value="pee">
    <input v-model="mybox2" type="radio" value="water">
    {{ mybox2 }}
    <br><br>
    <select v-model="selection">
      <option v-for="item in selectOption" :value="item.value">{{item.text}}</option>
    </select>
    {{ selection }}
    <br>
    <br>

    <h2>lazy  computed计算的使用</h2>
    <input type="text" v-model.lazy="myvaluea" placeholder="lazy">
    {{myvaluea}}
    <br>
    <br>
    <input type="text" v-model="smg" placeholder="computed计算">
    {{ smgnum }}
    <br>
    <br>
    <h2>watch属性监听 console打印</h2>
    <input type="text" v-model="wat">

    <ul v-for="item in mylist">
      <li>{{item.name}}最厉害</li>
    </ul>
   <button @click="wchange">改值监听</button>
  <br>
  <br>

  <h2>vue 动画过渡</h2>
  <transition name="mytrans" mode="out-in">
    <p v-show="show">出来吧 尼玛兽！</p>
  </transition>
  <button @click="show=!show">召唤</button><br><br>

  <h2>路由</h2>
  <h4>声明式 router-link  编程式 router.push()</h4>
  <router-link :to="{path:'/a', param:{color:'yellow'}}">apple</router-link>
  <router-link to="/b">banana</router-link>
  <router-link :to="{name:'Banana'}">banana2</router-link>
  <router-link :to="{path:'a/red'}">a/red</router-link>
  <br>
  <br>
  <br>
  <router-view name="viewA"></router-view>
  <router-view name="viewB"></router-view>
  <br>
  <br>
  <br>
  <h2>路由重定向</h2>
  </div>
</template>
<style>
  .mytrans-enter-active,.mytrans-leave-active {
    transition: all 1s ease-out;
  }
  .mytrans-enter{
    transform: translateY(-500px);
    opacity: 0;
  }
  .mytrans-leave-active{
    transform: translateY(500px);
    opacity: 0;
  }
</style>
<script>
import vue from 'vue'
  export default {
    data () {
      return{
        myvalue:'',
        myvaluea:'',
        smg:'',
        wat:'',
        show:false,
        mybox:[],
        mybox2:[],
        selection:'',
        selectOption:[
        {
          text:'pee',
          value:0
        },
        {
          text:'shit',
          value:1
        }
        ],
        link:'http://www.baidu.com',
        classname:'red',
        hello:'<span>鬼啊</span>',
        status:false,
        linkcss:{
          'color':'red',
          'font-weight':'bolder'
        },
        isbig:true,
        list:[
          {
            name:'孙颖',
            age:'18'
          },
           {
            name:'好哥',
            age:'25'
          },
           {
            name:'大哥',
            age:'8'
          }
        ],
        mylist:[
        {
          name:'大哥'
        },
        {
          name:'二哥'
        },
        {
          name:'三哥'
        }
        ],
        objgg:{
          name:'金苹果',
          price:'19.9',
          num:'57'
        }
        }
      },

      // 实时计算
       computed: {
        smgnum(){
          return this.smg.replace(/\d/g,'')
        }
      },
      // 事件监听
      watch:{
        wat: function (val,oldval) {
          console.log(val,oldval)
        },
        mylist:function () {
          alert('改变了');
        }
      },

      // 定义方法
      methods: {
          addItem (){
           this.list.push({
            name:'毒苹果',
            age:'57'
           })
           // alert('aaa')
          },
          change(){
            vue.set(this.list,2,{
              age:'18',
              name:'尹大哥'
            })
          },
           wchange(){
            vue.set(this.mylist,0,{
              name:'尹爸爸'
            })
          },

          toogle(){
            this.isbig=!this.isbig
          },

          kd(){
            alert('别填！')
          }
      }
  }
</script>