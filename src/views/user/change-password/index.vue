<template>
<!-- 修改密码 -->
	<div class="change_password">
		<x-header-return></x-header-return>
		<div class="mt44 p2">
			<input type="text" v-model="oldPassword" placeholder="请输入原来的登录密码">
			<input type="text" v-model="newPassword1" placeholder="请设置6-20位新的登录密码">
			<input type="text" v-model="newPassword2" placeholder="请再次输入新的登录密码">
			<mt-button type="primary" size="large" class="mt3" @click.native="changePassword">修改</mt-button>
		</div>
	</div>
</template>

<script>
import XHeaderReturn from '@/components/x-header-return'

export default {
	name: "change-password",
	data() {
		return {
			oldPassword:'',
			newPassword1:'',
			newPassword2:''
		};
	},
	methods:{
		changePassword(){
			if(!this.oldPassword){
				this.$toast("请输入原来的登录密码", "top");
				return;
			}
			if(!this.newPassword1){
				this.$toast("请设置6-20位新的登录密码", "top");
				return;
			}
			if(!this.newPassword2){
				this.$toast("请再次输入新的登录密码", "top");
				return;
			}
			if(this.newPassword1 != this.newPassword2){
				this.$toast("两次密码输入不一致", "top");
				return;
			}
			let postData = {
				old_password:this.oldPassword,
				new_password:this.newPassword2
			}
			this.$axios.post("/member/change_password",postData).then((res)=>{
				if(res.code == 200){
					this.$toast('操作成功','top');
					this.$router.push({name:'userCenter'})
				}
			})
		}
	},
	components:{
		XHeaderReturn
	}
};
</script>

<style scoped>
input{
	border:none;
	padding-left:20px;
	border-bottom:1px solid #efefef;
	width:76vw;
	height:56px;
	line-height: 56px;
	margin:auto;
	display: block;
	outline:none;
}
</style>
