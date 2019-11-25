<template>
  <!-- 修改手机号页面 -->
	<div class="change_mobile">
		<x-header-return></x-header-return>
		<div class="pass_process mt44">
			<span :class="{'blue':process}">1.验证手机号码</span>
			<icon name="iconiconfontjiantou" class="icon_jiantou"></icon>
			<span :class="{'blue':!process}">2.设置新手机号码</span>
		</div>
		<div class="info_box p2" v-show="process">
			<div class="mobile">
				<icon name="iconshouji" class="fz20 mobile_icon fl mt1"></icon>
				<input type="text" v-model="mobile" placeholder="请输入当前手机号" class="mobile_input">
			</div>
			<div class="code">
				<icon name="iconmima" class="fz20 code_icon fl mt1"></icon>
				<input type="text" v-model="code" placeholder="请输入短信验证码" class="code_input">
				<verification-code class="code_box" :mobile="mobile"></verification-code>
			</div>
			<mt-button type="primary" size="large" @click.native="next" class="mt3">下一步</mt-button>
			<p style="color:red;opacity:0.6">注：电脑端账号会同步修改</p>
		</div>
		<div class="info_box p2" v-show="!process">
			<div class="mobile">
				<icon name="iconshouji" class="fz20 mobile_icon fl mt1"></icon>
				<input type="text" v-model="newMobile" placeholder="请输入新的手机号" class="mobile_input">
			</div>
			<div class="code">
				<icon name="iconmima" class="fz20 code_icon fl mt1"></icon>
				<input type="text" v-model="newCode" placeholder="请输入短信验证码" class="code_input">
				<verification-code class="code_box fr" :mobile="newMobile" ref="yzm"></verification-code>
			</div>
			<mt-button type="primary" size="large" @click.native="changeMobile" class="mt3">提交</mt-button>
			<p style="color:red;opacity:0.6">注：电脑端账号会同步修改</p>
		</div>
	</div>
</template>

<script>
import { mapActions } from "vuex";
import verificationCode from "@/components/verification-code";
import XHeaderReturn from '@/components/x-header-return'
export default {
	name: "change-mobile",
	data() {
		return {
			mobile: "", //手机号码
			newMobile:"",//新手机号码
			code: "", //验证码
			newCode:"",//新验证码
			process: true //进度是否在验证旧手机号
		};
	},
	methods: {
		...mapActions([
			'getUserInfo'
		]),
		//验证当前手机号
		next() {
			this.$refs.yzm.refresh();
			if (!this.mobile) {
				this.$toast("手机号码不能为空", "top");
				return;
			}
			var mobilereg=/^[1][3,4,5,7,8,9][0-9]{9}$/;
            if (!mobilereg.test(this.mobile)) {
				this.$toast("手机号码格式不正确", "top");
                return;
            }
			if (!this.code) {
				this.$toast("验证码不能为空", "top");
				return;
			}
			const postData = {
				mobile: this.mobile,
				code: this.code
			};
			this.$axios.post("/member/check_mobile_code", postData).then(res => {
				if (res.code == 200) {
					this.$toast("验证成功", "top");
					this.process = false;
				}
			});
		},
		//修改密码
		changeMobile(){
			if (!this.newMobile) {
				this.$toast("手机号码不能为空", "top");
				return;
			}
			var mobilereg=/^[1][3,4,5,7,8,9][0-9]{9}$/;
            if (!mobilereg.test(this.newMobile)) {
				this.$toast("手机号码格式不正确", "top");
                return;
            }
			if (!this.newCode) {
				this.$toast("验证码不能为空", "top");
				return;
			}
			const postData = {
				mobile: this.newMobile,
				code: this.newCode
			};
			this.$axios.post("/member/change_mobile", postData).then(res => {
				if (res.code == 200) {
					this.$toast("修改成功", "top");
					this.getUserInfo();
					this.$router.back();
				}
			});
		}
	},
	components: {
		verificationCode,
		XHeaderReturn
	}
};
</script>

<style scoped>
.pass_process {
	display: flex;
	border-bottom: 1px solid #efefef;
}
.pass_process span {
	width: 50%;
	text-align: center;
	color: #666;
	line-height: 36px;
}
.icon_jiantou {
	font-size: 36px;
	color: #efefef;
}
.login {
  	padding-top: 60px;
}
.info_box {
  	line-height: 40px;
}
.mobile,
.password,
.code {
	border: 1px solid #efefef;
	box-sizing: border-box;
	overflow: hidden;
	display: flex;
}
.code,
.repassword {
  	border-top: none;
}
.password_input,
.code_input,
.mobile_input {
	outline: none;
	border: none;
	height: 40px;
	flex-grow: 1
}
.code_input {
  	width: 50%;
}
.code_icon,
.password_icon,
.mobile_icon {
	width: 15%;
	color: #999;
}
.find_pass {
  	color: #999;
}
.code_box {
	margin-top: 6.5px;
	margin-right: 6.5px;
}
.pass_process span{
	font-size: 14px;
}
.pass_process .blue {
  	color: #56a5e8;
}
</style>
