<template>
<!-- 首页 -->
	<div class="index">
		<div class="header_exit pl2 pr2">
			<span class="title fl fz18 fw6">首页</span>
			<!-- <span class="fr fz14" @click="exit">退出</span> -->
		</div>
		<!-- banner -->
		<div class="banner mt44 p2">
			<div style="height:180px;margin:auto;border-radius:20px;text-align:center">
				<mt-swipe :auto="4000">
					<mt-swipe-item>
						<div class="banner_img" :style="{'backgroundImage':'url('+(orgId == $conf.xhx_id ? xhx_banner1 : kcb_banner1)+')'}">
							<!-- <img :src="banner1" alt=""> -->
						</div>
					</mt-swipe-item>
					<mt-swipe-item>
						<div class="banner_img" :style="{'backgroundImage':'url('+(orgId == $conf.xhx_id ? xhx_banner2 : kcb_banner2)+')'}">
							<!-- <img :src="banner2" alt=""> -->
						</div>
					</mt-swipe-item>
					<mt-swipe-item>
						<div class="banner_img" :style="{'backgroundImage':'url('+(orgId == $conf.xhx_id ? xhx_banner3 : kcb_banner3)+')'}">
							<!-- <img :src="banner3" alt=""> -->
						</div>
					</mt-swipe-item>
				</mt-swipe>
			</div>
		</div>
		<!-- 明星教师 -->
		<!-- <div class="star_teacher pl2 pr2 pb2" v-if="orgId != $conf.xhx_id">
			<p class="fz14 title">明星教师</p>
			<ul class="d-flex">
				<li>
					<div class="head_pic" :style="{backgroundImage:'url('+teacher1+')'}"></div>
					<p class="teacher_name fw55 fz14">李易真</p>
					<p class="teacher_position">院长</p>
				</li>
				<li>
					<div class="head_pic" :style="{backgroundImage:'url('+teacher2+')'}"></div>
					<p class="teacher_name fw55 fz14">贺淑斌</p>
					<p class="teacher_position">副院长</p>
				</li>
				<li>
					<div class="head_pic" :style="{backgroundImage:'url('+teacher3+')'}"></div>
					<p class="teacher_name fw55 fz14">刘彦豆</p>
					<p class="teacher_position">学术中心副总监</p>
				</li>
			</ul>
		</div> -->
		<!-- 热门活动 -->
		<div class="activity pl2 pr2 pb2" v-if="orgId == $conf.xhx_id">
			<p class="fz14 title">热门课程</p>
			<ul>
				<a href="https://mp.weixin.qq.com/s/SPOhc-do-XQv0jm1ITHaxQ">
					<li class="pt1 pb1 d-flex mb1">
						<div class="activity_pic">
							<img :src="xhx_tuiwen1">
						</div>
						<div class="pl1">
							<p class="fz14 activity_title">【小海象科学】科学实验课程</p>
							<!-- <p class="activity_process">
								<span>活动报名中</span>
								<span class="fr">剩余<b>25</b>个名额</span>
							</p> -->
						</div>
					</li>
				</a>
				<a href="https://mp.weixin.qq.com/s/Jn8_0cLnNgdxEZeF8BYRGg">
					<li class="pt1 pb1 d-flex mb1">
						<div class="activity_pic">
							<img :src="xhx_tuiwen2">
						</div>
						<div class="pl1">
							<p class="fz14 activity_title">【小海象科学】小智机器人</p>
							<!-- <p class="activity_process">
								<span>活动报名中</span>
								<span class="fr">剩余<b>25</b>个名额</span>
							</p> -->
						</div>
					</li>
				</a>
			</ul>
		</div>
		<div class="activity pl2 pr2 pb2" v-else>
			<p class="fz14 title">干货合集</p>
			<ul>
				<a href="https://mp.weixin.qq.com/s/zVEFNRUJv2iWeTQPn4s3sw">
					<li class="pt1 pb1 d-flex mb1">
						<div class="activity_pic">
							<img :src="kcb_tuiwen1">
						</div>
						<div class="pl1">
							<p class="fz14 activity_title">孩子哪个瞬间让你觉得TA是你的老师？</p>
							<!-- <p class="activity_process">
								<span>活动报名中</span>
								<span class="fr">剩余<b>25</b>个名额</span>
							</p> -->
						</div>
					</li>
				</a>
				<a href="https://mp.weixin.qq.com/s/2rYxp9L3ac-3nqwULgcpiA">
					<li class="pt1 pb1 d-flex mb1">
						<div class="activity_pic">
							<img :src="kcb_tuiwen2">
						</div>
						<div class="pl1">
							<p class="fz14 activity_title">关于学习 | 实用高效的学习时间管理法则</p>
							<!-- <p class="activity_process">
								<span>活动报名中</span>
								<span class="fr">剩余<b>25</b>个名额</span>
							</p> -->
						</div>
					</li>
				</a>
				<a href="https://mp.weixin.qq.com/s/Q-s2zMzA6zWp2aO6svC0-Q">
					<li class="pt1 pb1 d-flex mb1">
						<div class="activity_pic">
							<img :src="kcb_tuiwen3">
						</div>
						<div class="pl1">
							<p class="fz14 activity_title">孩子以作业为借口要玩手机？教育部：不可能了！</p>
							<!-- <p class="activity_process">
								<span>活动报名中</span>
								<span class="fr">剩余<b>25</b>个名额</span>
							</p> -->
						</div>
					</li>
				</a>
			</ul>
		</div>
	</div>
</template>
<script>
import {mapState} from 'vuex'
import xhx_banner1 from '@/img/xhx_banner1.jpg'
import xhx_banner2 from '@/img/xhx_banner2.jpg'
import xhx_banner3 from '@/img/xhx_banner3.jpg'
import kcb_banner1 from '@/img/kcb_banner1.png'
import kcb_banner2 from '@/img/kcb_banner2.png'
import kcb_banner3 from '@/img/kcb_banner3.png'
import teacher1 from '@/img/teacher1.jpg'
import teacher2 from '@/img/teacher2.jpg'
import teacher3 from '@/img/teacher3.jpg'
import kcb_tuiwen1 from '@/img/kcb_tuiwen1.jpg'
import kcb_tuiwen2 from '@/img/kcb_tuiwen2.jpg'
import kcb_tuiwen3 from '@/img/kcb_tuiwen3.jpg'
import xhx_tuiwen1 from '@/img/xhx_tuiwen1.jpg'
import xhx_tuiwen2 from '@/img/xhx_tuiwen2.jpg'
export default {
	name: 'index',
	data(){
		return {
			xhx_banner1:xhx_banner1,
			xhx_banner2:xhx_banner2,
			xhx_banner3:xhx_banner3,
			kcb_banner1:kcb_banner1,
			kcb_banner2:kcb_banner2,
			kcb_banner3:kcb_banner3,
			teacher1:teacher1,
			teacher2:teacher2,
			teacher3:teacher3,
			kcb_tuiwen1:kcb_tuiwen1,
			kcb_tuiwen2:kcb_tuiwen2,
			kcb_tuiwen3:kcb_tuiwen3,
			xhx_tuiwen1:xhx_tuiwen1,
			xhx_tuiwen2:xhx_tuiwen2
		}
	},
	created(){
		
	},
	computed:{
		...mapState({
			orgId: state => state.orgId
		})
	},
	mounted() {
		 	
	},
	methods: {
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
	border-bottom:6px solid #efefef;
}
.header_exit span:last-child{
	color:#0079fe;
}
.banner{
	padding-top:26px;
}
.banner_img{
	width:100%;
	height:100%;
	border-radius:20px;
	box-sizing:border-box;
    overflow: hidden;
	border:1px solid #efefef;
    background-size: 100% 100%;
}
.banner_img img{
	width:100%;
	height:100%;
}
.star_teacher,.activity{
	border-top:6px solid #efefef;
}
.star_teacher{
	flex-direction: row
}
.title{
	line-height:44px;
}
.star_teacher li{
	flex: 1;
	padding-top:10px;
	padding-bottom:10px;
	border:1px solid #efefef;
    border-radius: 3px;
    box-shadow:0px 0px 5px 1px #eee;
}
.star_teacher li:nth-child(2){
	margin-left:10px;
	margin-right:10px;
}
.head_pic{
	width:40px;
	height:40px;
	border-radius: 40px;
	margin:auto;
	border:1px solid #efefef;
	background-size: cover;
}
.teacher_name{
	color:#0079fe;
	line-height:36px;
	text-align: center
}
.teacher_position{
	color:#ccc;
	text-align: center
}
.activity_pic{
	width:80px;
	height:50px;
}
.activity_pic img{
	width:80px;
	height:50px;
}
.activity li{
	border-bottom:1px solid #efefef;
}
.activity a:last-of-type li{
	border-bottom:0;
}
.activity li div:last-child{
	flex-grow:1
}
.activity_title{
	line-height:24px;
	font-size:12px;
}
.activity_process{
	line-height:28px;
}
.activity_process span:first-child{
	color:#0079fe;
}
b{
	color:#0079fe;
	font-size:14px;
}
</style>

