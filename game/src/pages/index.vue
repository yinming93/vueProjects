<template>
	<div class="index-wrap">
		<div class="index-left">
			<div class="index-left-blcok">
				<h2>全部产品</h2>
				<template v-for="product in productList">
					<h3>{{product.title}}</h3>
					<ul v-for="item in product.list">
						<li>
							<a :href="item.url">{{item.name}}</a>
							<span v-if="item.hot" class="hot-tag">HOT</span>
						</li>
					</ul>
					<div v-if="!product.last" class="hr"></div>
				</template>
			</div>
			<div class="index-left-blcok">
				<h2>最新消息</h2>
					<ul>
						<li v-for="item in newsList"><a :href="item.url">{{item.title}}</a></li>
					</ul>
			</div>
		</div>
		<div class="index-right">
			<div class="index-board-list">
				<div class="index-board-item" v-for="item in boardList">
					<div class="index-board-item-inner">
						<h2>{{item.title}}</h2>
						<p>{{item.description}}</p>
						<div class="index-board-button">
							<a href="">立即购买</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
			data(){
				return{
				productList: {
		        pc: {
		          title: 'PC产品',
		          list: [
		            {
		              name: '数据统计',
		              url:'https://www.baidu.com/'
		            },
		            {
		              name: '数据预测',
		              url:'https://www.baidu.com/'
		            },
		            {
		              name: '流量分析',
		              url:'https://www.baidu.com/',
		              hot: true
		            },
		            {
		              name: '广告发布',
		              url:'https://www.baidu.com/'
		            }
		          ]
		        },
		        app: {
		          title: '手机应用类',
		          last: true,
		          list: [
		            {
		              name: '91助手',
		              url:'https://www.baidu.com/'
		            },
		            {
		              name: '产品助手',
		              url:'https://www.baidu.com/',
		              hot: true
		            },
		            {
		              name: '智能地图',
		              url:'https://www.baidu.com/'
		            },
		            {
		              name: '团队语音',
		              url:'https://www.baidu.com/'
		            }
		          ]
		        }
		      },
		      newsList: [
			        {
			          title: '开放产品',
			          url:'https://www.baidu.com/'
			        },
			        {
			          title: '品牌营销',
			          url:'https://www.baidu.com/'
			        },
			        {
			          title: '使命必达',
			          url:'https://www.baidu.com/'
			        },
			        {
			          title: '勇攀高峰',
			          url:'https://www.baidu.com/'
			        }
			      ],
				boardList: [
			        {
			          title: '开放产品',
			          description: '开放产品是一款开放产品',
			          id: 'car',
			          toKey: 'analysis',
			          saleout: false
			        },
			        {
			          title: '品牌营销',
			          description: '品牌营销帮助你的产品更好地找到定位',
			          id: 'earth',
			          toKey: 'count',
			          saleout: false
			        },
			        {
			          title: '使命必达',
			          description: '使命必达快速迭代永远保持最前端的速度',
			          id: 'loud',
			          toKey: 'forecast',
			          saleout: true
			        },
			        {
			          title: '勇攀高峰',
			          description: '帮你勇闯高峰，到达事业的顶峰',
			          id: 'hill',
			          toKey: 'publish',
			          saleout: false
			        }
			      ],
				}
			}
		}
</script>
<style type="text/css" scoped>
	.index-wrap{
		width: 1200px;
		margin: 0 auto;
		overflow: hidden;
	}
	.index-left{
		width: 300px;
		text-align: left;
		float: left;
	}
	.index-right{
		width: 900px;
		float: left;
	}
	.index-left-blcok{
		background: #fff;
		margin: 15px;
		box-shadow: 0 0 1px #ddd;
	}
	.index-left-blcok h2{
		background: #4fc08d;
		color: #fff;
		padding: 10px 15px;
		margin-bottom: 20px;
	}
	.index-left-blcok h3{
		color:#222;
		font-weight: bolder;
		padding: 0 15px 5px 15px;
	}
	.index-left-blcok ul{
		padding: 10px 15px;
	}
	.index-left-blcok li{
		padding: 5px;
	}
	.hot-tag{
		background: red;
		color: white;
	}
	a{
		text-decoration: none;
		color: grey;
	}
	.hr{
		border-top: 1px solid grey;
		margin-bottom: 20px;
	}

	/*右边板块*/
	.index-board-list{
		overflow: hidden;
	}
	.index-board-item{
		width: 400px;
		float: left;
		background: #fff;
		padding: 20px;
		box-shadow: 0 0 1px #ddd;
		margin-bottom: 20px;
		margin-right: 20px;
	}

	/*四个小图*/
.index-board-item-inner {
  min-height: 125px;
  padding-left: 120px;
}
.index-board-item-inner h2 {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 15px;
}
.index-board-button {
  margin-top: 20px;
  background: #00C88F;
}

.index-board-car .index-board-item-inner{
  background: url(../assets/images/1.png) no-repeat;
}
.index-board-loud .index-board-item-inner{
  background: url(../assets/images/2.png) no-repeat;
}
.index-board-earth .index-board-item-inner{
  background: url(../assets/images/3.png) no-repeat;
}
.index-board-hill .index-board-item-inner{
  background: url(../assets/images/4.png) no-repeat;
}
</style>