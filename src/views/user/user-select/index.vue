<template>
<!-- 设置 -->
	<div class="user_select">
		<x-header-return></x-header-return>
		<div style="margin-top:39px">
			<mt-cell
				title="修改密码"
				@click.native="$router.push({name:'changePassword'})"
				is-link
				>
				<icon slot="icon" name="iconmima" class="fz20 fl mr05"></icon>
			</mt-cell>
		</div>
		<div class="loginout">
			<mt-button type="danger" size="large" class="mt3" @click.native="exit">退出登录</mt-button>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
import XHeaderReturn from '@/components/x-header-return'

export default {
	name: "user-select",
	data() {
		return {
			
		};
	},
	created(){
		
	},
	methods:{
		...mapActions(['clearLocalstroage']),
		exit(){
			this.clearLocalstroage();
			this.$router.replace({name: 'login'});
		}
	},
	components:{
		XHeaderReturn
	}
};
</script>

<style scoped>
.loginout{
	position:fixed;
	width:100%;
	padding:0 20px;
	bottom:80px;
	box-sizing:border-box;
}
</style>
