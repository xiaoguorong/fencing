<template>
    <!-- 登录页面 -->
    <div class="login p2">
		<x-header></x-header>
		<h2 class="t-center">校区管理系统</h2>
		<div class="info_box">
        <div class="mobile">
			<icon name="iconshouji" class="fz20 mobile_icon mt1"></icon>
			<input type="text" v-model="mobile" placeholder="手机号码" class="mobile_input fl">
        </div>
        <div class="password">
			<icon name="iconmima" class="fz20 password_icon mt1"></icon>
			<input :type="type" v-model="password" placeholder="登录密码" class="password_input">
			<icon name="iconyincang1" class="fz14 fl mt1 eye eye_close" v-if="!open" @click.native="open = true"></icon>
			<icon name="iconxianshi" class="fz14 fl mt1 eye eye_close" v-if="open"  @click.native="open = false"></icon>
        </div>
      </div>
      <mt-button type="primary" size="large" @click.native="login" class="mt3">登录</mt-button>
      <span class="fr fz12 mt2 find_pass" @click="findPassword">找回密码</span>
    </div>
</template>

<script>
import XHeader from '@/components/x-header'
import { mapActions } from "vuex";
import auth from '@/mixin/auth'
export default {
	name: "login",
	data() {
		return {
			mobile: "", //手机号码
			password: "", //密码
			type:'password',//input框类型
			open:false, //密码隐藏
		};
	},
	mixins:[ auth ],
	watch:{
		//密码显示为***
		open(val){
			if(val){
				this.type = "text";
			}else{
				this.type = "password";
			}
		}
	},
	methods: {
		...mapActions(["setToken", "setCamId","setAuthList","setAuthApi","setOrgId","setIsAdmin","setCampusNum","getUserInfo"]),
		login() {
			if (!this.mobile) {
				this.$toast("手机号码不能为空", "top");
				return;
			}
			var mobilereg=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;
            if (!mobilereg.test(this.mobile)) {
				this.$toast("手机号码格式不正确", "top");
                return;
            }
			if (!this.password){
				this.$toast("登录密码不能为空", "top");
				return;
			}
			let postData = {
				mobile: this.mobile,
				password: this.password
			};
			this.$axios.post("/user/login", postData).then(res => {
				if (res.code == 200) {
					// this.$toast("登录成功", "top");
					let token = res.token_info.sys_token;
					this.setToken(token);
					let sys_refresh_token = res.token_info.sys_refresh_token;
					window.localStorage.setItem("sys-refresh-token", sys_refresh_token);
					if (res.token_info.camid) {
						let camid = res.token_info.camid;
						let orgid = res.token_info.orgid;
						let campus_is_admin = res.token_info.campus_is_admin;
						let campus_num = res.token_info.campus_num;
						this.setCamId(camid);
						this.setOrgId(orgid);
						this.setIsAdmin(campus_is_admin);
						this.setCampusNum(campus_num);
					}
					//获取权限
					this.getAuth();
					//获取权限表
					this.$axios.post("/campus/get_menu_campus_api").then((res)=>{
						this.setAuthApi(JSON.stringify(res.content))
					})
					//获取用户信息
					this.getUserInfo();
					this.$router.push({ name: "index" });
				}
			});
		},
		findPassword() {
			this.$router.push({ name: "findPassword" });
		}
	},
	components:{
		XHeader
	}
};
</script>

<style scoped>
.login {
  	padding-top: 60px;
}
.info_box {
	line-height: 40px;
	margin-top: 35px;
}
.mobile,
.password {
	border: 1px solid #efefef;
	box-sizing: border-box;
	overflow: hidden;
	display: flex;
}
.password {
  	border-top: none;
	position: relative;
}
.password_input,
.mobile_input {
	outline: none;
	border: none;
	height: 40px;
	flex-grow: 1
}
.password_icon,
.mobile_icon {
	width: 15%;
	margin-top:11px;
	color: #999;
}
.find_pass {
  	color: #999;
}
.eye{
	position:absolute;
	right:20px;
	top:0;
	bottom:0;
	margin:auto;
	color:#757575;
}
</style>
