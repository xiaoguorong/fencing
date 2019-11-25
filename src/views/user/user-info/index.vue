<template>
<!-- 个人信息 -->
	<div class="user_info">
		<x-header-return></x-header-return>
		<div class="mt44">
			<mt-cell title="头像" style="margin-top:-1px;">
				<avatar :src="userInfo.avatar" class="mt05 ml05 mr05 mb05" style="margin-right:10px;"></avatar>
			</mt-cell>
			<mt-cell title="用户名">
				<span style="margin-right:10px;">{{userInfo.realname ? userInfo.realname : userInfo.nickname}}</span>
			</mt-cell>
			<mt-cell title="手机号码" is-link :to="{name:'changeMoblie'}">
				<span>{{mobile}}</span>
			</mt-cell>
			<mt-cell title="密码" is-link :to="{name:'changePassword'}">
				<span>******</span>
			</mt-cell>
			<mt-cell title="当前校区" is-link :to="{name:'switchCampus'}">
				<span>{{userInfo.campus_name + '(' + (userInfo.join_numbers ? userInfo.join_numbers + "-" : "") + userInfo.numbers + ')'}}</span>
			</mt-cell>
			<mt-cell title="校区角色">
				<span style="margin-right:10px;">{{userInfo.role_name}}</span>
			</mt-cell>
		</div>
	</div>
</template>

<script>
import XHeaderReturn from '@/components/x-header-return'
import { mapState,mapActions } from "vuex";
export default {
	name: "user-info",
	data() {
		return{
			
		}
	},
	computed: {
		...mapState({
			userInfo: state => state.userInfo
		}),
		mobile(){
			if(this.userInfo){
				return this.userInfo.mobile.substring(0,3)+"****"+this.userInfo.mobile.substring(7,11);
			}
		}
  	},
	components:{
		XHeaderReturn
	}
};
</script>

<style scoped>

</style>
