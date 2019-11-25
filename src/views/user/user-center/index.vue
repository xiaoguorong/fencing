<template>
<!-- 个人中心 -->
	<div class="user_center">
		<div class="header_exit pl2 pr2">
			<span class="title fl fz18 fw6">我</span>
		</div>
		<router-link :to="{name:'userInfo'}">
			<div class="user_info d-flex pl2 pb1">
				<div class="head_pic">
					<avatar :src="userInfo.avatar"></avatar>
				</div>
				<div class="user_name p05">
					<p class="fw55 fz14">{{userInfo.realname ? userInfo.realname : userInfo.nickname}}</p>
					<p>{{userInfo.role_name}}</p>
				</div>
				<div class="more fz14">
					<icon name="icongengduo"></icon>
				</div>
			</div>
		</router-link>
		<!-- <ul class="campus_info ml2 mr2 mt2 d-flex">
			<li><p class="fz24"><icon name="iconxuesheng"></icon></p><p>学员：5</p></li>
			<li><p class="fz24"><icon name="iconshuben"></icon></p><p>教材：10</p></li>
			<li><p class="fz24"><icon name="iconzuoyeben-"></icon></p><p>作业：15</p></li>
		</ul> -->
		<ul class="user_settings">
			<router-link :to="{name:'feedback'}">
				<li class="d-flex">
					<div class="settings_icon fz20">
						<icon name="iconyijianfankui"></icon>
					</div>
					<span class="settings_name fz14">意见反馈</span>
					<div class="settings_more">
						<icon name="icongengduo"></icon>
					</div>
				</li>
			</router-link>
			<router-link :to="{name:'helpCenter'}">
				<li class="d-flex">
					<div class="settings_icon fz20">
						<icon name="iconbangzhuzhongxin1"></icon>
					</div>
					<span class="settings_name fz14">帮助中心</span>
					<div class="settings_more">
						<icon name="icongengduo"></icon>
					</div>
				</li>
			</router-link>
			<router-link :to="{name:'aboutUs'}">
				<li class="d-flex">
					<div class="settings_icon fz20">
						<icon name="iconicon2"></icon>
					</div>
					<span class="settings_name fz14">关于我们</span>
					<div class="settings_more">
						<icon name="icongengduo"></icon>
					</div>
				</li>
			</router-link>
			<router-link :to="{name:'userSelect'}">
				<li class="d-flex">
					<div class="settings_icon fz20">
						<icon name="iconshezhi"></icon>
					</div>
					<span class="settings_name fz14">设置</span>
					<div class="settings_more">
						<icon name="icongengduo"></icon>
					</div>
				</li>
			</router-link>
		</ul>
	</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
	name: "user-center",
	data() {
		return {
			
		};
	},
	computed:{
		...mapState({
			campus_num: state => state.campusNum,
			userInfo: state => state.userInfo
		})
	},
};
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
.user_info{
	/* border-top:6px solid #efefef; */
	padding-top:20px;
	margin-top:46px;
}
.head_pic{
	width:60px;
	height:60px;
	border-radius:60px;
}
.user_name{
	line-height:25px;
	flex-grow:1;
}
.more{
	margin-right:20px;
	line-height:60px;
}
.user_settings,.campus_info{
	border-top:6px solid #efefef;
}
.user_settings li{
	padding:2px 2px 2px 20px;
	border-bottom:1px solid #efefef;
}
.campus_info li{
	flex-grow:1;
	padding-top:7px;
	padding-bottom:4px;
}
.campus_info li p{
	margin:auto;
	text-align:center;
	line-height:30px;
}
.user_settings li{
	line-height:45px;
}
.settings_name{
	flex-grow:1
}
.settings_icon,.settings_more{
	width:30px;
	padding-left:10px;
	color:#999
} 
</style>
