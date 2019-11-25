<template>
	<!-- 工作台 -->
	<div class="workbench">
		<div class="header_exit pl2 pr2">
			<span class="title fl fz18 fw6">工作台</span>
			<!-- <span class="fr fz14" @click="exit">退出</span> -->
		</div>
		<div class="report_form mt44 p2">
			<p class="fz14">我的报表</p>
			<ul class="date_tab d-flex fz14 mt1">
				<li :class="{'active' : selectCycle == 1}" @click="selectCycle = 1">今天</li>
				<li :class="{'active' : selectCycle == 2}" @click="selectCycle = 2">本周</li>
				<li :class="{'active' : selectCycle == 3}" @click="selectCycle = 3">本月</li>
			</ul>
			<ul class="crm_data d-flex mt2">
				<li>
					<p>{{data.input_count ? data.input_count : 0}}人</p>
					<p>招生录入</p>
				</li>
				<li>
					<p>{{data.sign_up_count ? data.sign_up_count : 0}}人</p>
					<p>招生报名</p>
				</li>
			</ul>
			<ul class="crm_data d-flex mt2">
				<li>
					<p>{{data.timetable_count ? data.timetable_count : 0}}次</p>
					<p>教师总课次</p>
				</li>
				<li>
					<p>{{data.already_timetable_count ? data.already_timetable_count : 0}}次</p>
					<p>消耗教师课次</p>
				</li>
			</ul>
		</div>
		<div class="application p2">
			<p class="fz14">我的应用</p>
			<ul class="d-flex mt1">
				<router-link :to="{name:'teachingMaterial'}">
					<li class="mt1" v-if="permission('/teaching_material/teaching_material_class')">
						<icon name="iconzhidaoshu-" class="application_icon"></icon>
						<p class="fw55 fz14">教材</p>
					</li>
				</router-link>
			</ul>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
import auth from '@/mixin/auth';

export default {
	name: 'workbench',
	mixins: [auth],
	data(){
		return{
			selectCycle:1,//1：今天 2：本周 3：本月
			dataList:[],
			data:{}
		}
	},
	created(){
		this.getDataReport();
	},
	watch:{
		selectCycle(val){
			switch(val){
				case 1:
					this.data = this.dataList.today;
					break;
				case 2:
					this.data = this.dataList.week;
					break;
				case 3:
					this.data = this.dataList.month;
					break;
			}
		}
	},
	methods:{
		...mapActions(['clearLocalstroage']),
		getDataReport(){
			this.$axios.post("/campus/data_report").then((res)=>{
				this.dataList = res.content;
				this.data = this.dataList.today;
			})
		},
		exit(){
			this.clearLocalstroage();
			this.$router.replace({name: 'login'});
		}
	}

}
</script>

<style scoped>
.header_exit{
	top: 0;
    right: 0;
    left: 0;
    position: fixed;
    z-index: 1;
	background: #fff;
	line-height:44px;
}
.header_exit span:last-child{
	color:#0079fe;
}
.report_form,
.application{
	border-top:6px solid #efefef;
}
.date_tab{
	width:100%;
	border:1px solid #efefef;
	box-shadow:0 0 8px 1px #efefef;
}
.date_tab li{
	flex-grow:1;
	text-align: center;
	line-height: 30px;
	color:#000;
	background: #fff;
}
.date_tab .active{
	color:#fff;
	clip: rect(0px 0px 0px 0px);
	background: #0079fe;
}
.crm_data{
	flex-wrap:wrap
}
.crm_data li{
	box-shadow:0 0 8px 1px #efefef;
	flex-grow: 1;
	height:50px;
}
.crm_data li:nth-of-type(2n){
	margin-left:15px;
}
.crm_data li p{
	text-align: center;
	line-height: 25px;
}
.application ul{
	flex-wrap:wrap;
}
.application li{
	width:100%;
	height:80px;
	text-align: center;
}
.application li p:last-child{
	line-height:26px;
}
.application_icon,.video_icon{
	color:#0079fe;
	font-size: 54px;
	height:54px;
}
.video_icon{
	font-size:40px;
}
.application a{
	display: block;
	width:25%;
}
</style>
