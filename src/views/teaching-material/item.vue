<template>
<!-- 教材列表 -->
	<div class="teaching_material_item">
		<x-header-return></x-header-return>
		<div class="pl2 pr2 mt44 teaching_material_item_box">
			<!-- <scroller :on-refresh="refresh" :on-infinite="infinite" ref="my_scroller" class="mt44"> -->
				<ul>
					<router-link :to="{name:'teachingMaterialDetail',params:{name:item.class_name,key:item.qnkey,title:item.title}}" v-for="(item,index) in data" :key="index">
						<li class="mt1 d-flex">
							<div class="pic">
								<img v-if="cover" :src="cover"> 
							</div>
							<div class="ml1 detail">
								<p class="fw55">{{item.class_name}}</p>
								<p>
									<icon name="icondeng" class="icon_deng"></icon>
									<span class="ml2 fw55">{{item.random_total}}次浏览</span>
									<span class="fr">{{item.random}}人正在学</span>
								</p>
							</div>
						</li>
					</router-link>
				</ul>
			<!-- </scroller> -->
		</div>
	</div>
</template>

<script>
import { mapState,mapActions } from "vuex";
import XHeaderReturn from '@/components/x-header-return'
export default {
	name: "teaching-material-item",
	data(){
		return{
			selected:'1', //选择教师用书还是教材课件，默认教师用书
			page:0,
			cover:this.$route.params.cover,
			data:[],
		}
	},
	created(){
		this.setHeaderName(this.$route.params.name)
		this.getData();
	},
	methods:{
		...mapActions(["setHeaderName"]),
		infinite (done) {
			console.log("infinite")
			this.page++    //每当向上滑动的时候就让页数加1
			this.getData(this.page, done)
		},
		refresh (done) { //这是向下滑动的时候请求最新的数据
			console.log("refresh")
			this.page = 0
			this.getData(1, done)
		},
		getData(page,done){
			const postData = {
				class_id:this.$route.params.classId
			}
			var url;
			if(this.$route.params.type == '1'){
				url = '/teaching_material/teacher_book';
			}else{
				url = '/teaching_material/teaching_material';
			}
			this.$axios.post(url,postData).then((res)=>{
				// this.data.forEach((e)=>{
				// 	e.cover = 'http://admin.com' + e.cover;
				// })

				// if (res.content.length < 10) {    //每次请求数据是10条，如果数据不够10条，就是没数据了 让页数=0；
				// 	this.page = 0
				// 	done(true)
				// 	return
				// } else {
				// 	if (done) done()
				// }
				// if (this.page === 1) {
					this.data = res.content   //如果是想下滑动，刷新数据 就让items等于最新数据
					this.data = this.data.map((v)=>{
						var ramdom = Math.ceil(Math.random()*1000);
						v.random = ramdom;
						v.random_total = ramdom*Math.ceil(Math.random()+1.3);
						return v;
					})
						// } else {
				// 	this.data = this.data.concat(res.content) //否则就把数据拼接
				// }
			})
		}
	},
	computed: {
		...mapState({
			headerName: state => state.headerName
		})
	},
	components:{
		XHeaderReturn
	}
};
</script>

<style scoped>
.teaching_material_item_box{
	margin-top:52px;
}
.teaching_material_item li{
	width:100%;
	padding-bottom:12px;
	border-bottom:1px solid #efefef;
}
.pic{
	width:60px;
	height:80px;
	background: #efefef;
	border-radius: 6px;
}
.teaching_material_item p:first-of-type{
	line-height:40px;
	letter-spacing:2px
}
.teaching_material_item p:last-of-type{
	line-height:40px;
	position: relative;
	margin-left:-3px;
}
.icon_deng{
	position: absolute;
	color:orange;
	font-size:20px;
	top: 50%;
    margin: -10px 0 0 0;
}
.detail{
	flex-grow:1;
}
</style>
